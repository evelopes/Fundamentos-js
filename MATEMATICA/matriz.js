let total = [];
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        //console.log(i + " " + j)
        if (i > j) {
            soma = (Math.pow(2, i));
            total.push(soma)
        } else if (i < j) {
            let a = j - i;
            soma = (Math.pow(3, a));
            total.push(soma)
        } else if (i = j) {
            soma = ((Math.pow(i, 2)) - j);
            total.push(soma)
        }
    }
}
console.log(total)

let somar = 0;
for (let index = 0; index < total.length; index++) {
    somar += total[index]
}

console.log(somar)