//break dentro de um if, interrompe o laço for

let palavra = ["a", "b", "c", "d", "e"]

for (let index = 0; index < palavra.length; index++) {
    if (palavra[index] == "b") {
        console.log("oi " + index);
        break
    } else {
        console.log("index do else: " + index)
    }
}


