const { assert } = require("chai");
const { exit } = require("process");
readline = require("readline");

class Calculatrice{
    static Addition(x, y) {
        if (x === null || y === null  || isNaN(x) || isNaN(y)) {
            return "Erreur";
        }
        return x + y;
    }

    static Soustraction(x, y) {
        if (x === null || y === null || isNaN(x) || isNaN(y)){
            return "Erreur";
        }
        return x - y;
    }

    static Multiplication(x, y) {
        if (x === null || y === null || isNaN(x) || isNaN(y)){
            return "Erreur";
        }
        return x * y;
    }

    static Division(x, y) {
        if (x === null || y === null || isNaN(x) || isNaN(y)) {
            return "Erreur";
        }
        if (y === 0) {
            return "Erreur";
        }
        return x / y;
    }

    static Pourcentage(v, vMax) {
        if (v === null || vMax === null || isNaN(v) || isNaN(vMax)){
            return "Erreur";
        }
        if (vMax < -100 || vMax > 100) return "Erreur";
        return v * vMax / 100;
    }
    
    static Carre(x) {
        if (x === null || isNaN(x)) {
            return "Invalid Input";
        }

        let result = x * x;

        if(Number.isInteger(result)){
            return result;
        }
        return parseFloat(result.toFixed(2));
    }

    static RacineCarre(x) {
        if (x === null || isNaN(x) || x < 0) {
            return "Invalid Input";
        }

        let guess = x / 2;
        let prevGuess = 0;

        while (guess !== prevGuess) {
            prevGuess = guess;
            guess = (guess + x / guess) / 2;
        }

        if(Number.isInteger(guess)){
            return guess;
        }
        return parseFloat(guess.toFixed(2));
    }

    static Puissance(x, y) {
        if (x === null || y === null || isNaN(x) || isNaN(y)) {
            return "Invalid Input";
        }

        if (y === 0) {
            return 1.00;
        }

        let result = x;
        let absY = y < 0 ? -y : y;

        for (let i = 1; i < absY; i++) {
            result *= x;
        }

        if (y < 0) {
            result = 1 / result;
        }

        if(Number.isInteger(result)){
            return result;
        }
        return parseFloat(result.toFixed(2));
    }
}


rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let x;
let y;
let operateur;
let resultat;

rl.question('\nEcrivez le premier nombre : ', (input) => {
    x = parseInt(input);

    rl.question('\n1. [addition]\n2. [soustraction]\n3. [multiplication]\n4. [division]\n' +
        '5. [pourcentage]\n6. [puissance]\n7. [racine carré]\n Choisir un opérateur : ', (input) => {
        operateur = parseInt(input);
        
        if(operateur == 7){
            resultat = "√" + x + " = " + Calculatrice.RacineCarre(x);
            console.log("\nLe resultat est : " + resultat + "\n");
            exit();
        }

        rl.question('\nEcrivez le second nombre : ', (input) => {
            y = parseInt(input);
            switch(operateur) {
                case 1:
                    resultat = x + " + " + y + " = " + Calculatrice.Addition(x, y);
                    break;
                case 2:
                    resultat = x + " - " + y + " = " + Calculatrice.Soustraction(x, y);
                    break;
                case 3:
                    resultat = x + " x " + y + " = " + Calculatrice.Multiplication(x, y);
                    break;
                case 4:
                    resultat = x + " / " + y + " = " + Calculatrice.Division(x, y);
                    break;
                case 5:
                    resultat = Calculatrice.Pourcentage(x, y) + " pour " + y + " % de " + x;
                    break;
                case 6:
                    if (y == 2) {
                        resultat = x + "² = " + Calculatrice.Carre(x);
                    } else {
                        resultat = x + "^" + y + " = " + Calculatrice.Puissance(x, y)
                    }
                    break;
                default:
                    resultat = "Opérateur Invalide";
            }
            console.log("\nLe resultat est : " + resultat + "\n");
            exit();
        });
    });
});

module.exports = {
    Calculatrice: Calculatrice,
}
