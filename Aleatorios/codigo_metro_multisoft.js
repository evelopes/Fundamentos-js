let s = "";
let a = 3;
while (a != 1) {
    console.log("A: " + a + " \n S:" + s)
    s += a;
    if (a % 2 == 0) {
        a = a / 2
    } else {
        a = 3 * a + 1
    }
}
console.log("www.multisoft.se/" + s)