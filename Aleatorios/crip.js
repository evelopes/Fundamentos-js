const enigma = {
    // configuração inicial da máquina
    rotor1: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
    rotor2: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
    rotor3: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
    reflector: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
    // configuração inicial das posições dos rotores
    rotor1Pos: 0,
    rotor2Pos: 0,
    rotor3Pos: 0,
    // função para criptografar uma mensagem
    encrypt: function (plaintext) {
        let ciphertext = "";
        for (let i = 0; i < plaintext.length; i++) {
            // passa a letra através dos rotores
            let input = plaintext[i].toUpperCase();
            let output = this.rotor3[(this.rotor3.indexOf(input) + this.rotor3Pos) % 26];
            output = this.rotor2[(this.rotor2.indexOf(output) + this.rotor2Pos) % 26];
            output = this.rotor1[(this.rotor1.indexOf(output) + this.rotor1Pos) % 26];
            // passa a letra através do refletor
            output = this.reflector[this.reflector.indexOf(output)];
            // passa a letra de volta através dos rotores
            output = this.rotor1.indexOf(output);
            output = this.rotor2.indexOf(output);
            output = this.rotor3.indexOf(output);
            // adiciona a letra cifrada à mensagem cifrada
            ciphertext += String.fromCharCode(output + 65);
            // avança as posições dos rotores
            this.rotor1Pos = (this.rotor1Pos + 1) % 26;
            if (this.rotor1Pos === 0) {
                this.rotor2Pos = (this.rotor2Pos + 1) % 26;
                if (this.rotor2Pos === 0) {
                    this.rotor3Pos = (this.rotor3Pos + 1) % 26;
                }
            }
        }
        return ciphertext;
    },

    decrypt: function (ciphertext) {
        let plaintext = "";
        for (let i = 0; i < ciphertext.length; i++) {
            // passa a letra através dos rotores (em ordem inversa)
            let input = ciphertext[i].toUpperCase();
            let output = this.rotor3.indexOf(input);
            output = this.rotor2.indexOf(output);
            output = this.rotor1.indexOf(output);
            // passa a letra através do refletor
            output = this.reflector[output];
            // passa a letra de volta através dos rotores (em ordem inversa)
            output = this.rotor1[(this.rotor1.indexOf(output) - this.rotor1Pos + 26) % 26];
            output = this.rotor2[(this.rotor2.indexOf(output) - this.rotor2Pos + 26) % 26];
            output = this.rotor3[(this.rotor3.indexOf(output) - this.rotor3Pos + 26) % 26];
            // adiciona a letra decifrada à mensagem decifrada
            plaintext += String.fromCharCode(output + 65);
            // volta as posições dos rotores
            this.rotor1Pos = (this.rotor1Pos - 1 + 26) % 26;
            if (this.rotor1Pos === 25) {
                this.rotor2Pos = (this.rotor2Pos - 1 + 26) % 26;
                if (this.rotor2Pos === 25) {
                    this.rotor3Pos = (this.rotor3Pos - 1 + 26) % 26;
                }
            }
        }
        return plaintext;

    }

}
let message = "hello world";
let encrypted = enigma.encrypt(message);
console.log(encrypted) ;


let dencrypted = enigma.decrypt(encrypted);
console.log(dencrypted);
