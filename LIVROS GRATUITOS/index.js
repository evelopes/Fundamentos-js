const puppeteer = require("puppeteer");
const fs = require("fs");

const scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://amzn.to/3iSEYpe");
    //await page.click(".nav_cs_kindle_books");

    //await page.type("#twotabsearchtextbox", "alexa");
    //await page.click("#nav-search-submit-button");
    await page.waitForSelector(".s-pagination-next");

    // Go to next results page
    await page.click(".s-pagination-next");
    await page.waitForSelector(".s-pagination-next");

    // Gather product title
    const title = await page.$$eval("h2 span.a-color-base", (nodes) =>
        nodes.map((n) => n.innerText)
    );
    // Gather price
    const price = await page.$$eval(
        "[data-component-type='s-search-result'] span.a-price[data-a-color='base'] span.a-offscreen",
        (nodes) => nodes.map((n) => n.innerText)
    );

    // Gather product image
    const image = await page.$$eval(".s-image ", (nodes) =>
        nodes.map((n) => n.src)
    );

    // Gather product link
    const link = await page.$$eval(".a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal", (nodes) =>
        nodes.map((n) => n.href)
    );


    // Consolidate product search data
    const amazonSearchArray = title.slice(0, 10).map((value, index) => {
        return {
            title: title[index],
            price: price[index],
            image: image[index],
            link: link[index],
        };
    });

    const jsonData = JSON.stringify(amazonSearchArray, null, 2);
    fs.writeFileSync("amazonSearchResults.json", jsonData);
    await browser.close();
};
scrape();