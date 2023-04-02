const Calculatrice = require('../src/app').Calculatrice;
const expect = require('chai').expect;

describe('Tests de la calculatrice', function () {
    describe('Méthode BDD', function () {
        describe('Tests de la fonction carre', function () {
            it('devrait retourner le carré d\'un nombre', function (done) {
                expect(Calculatrice.Carre(2)).to.equal(4);
                expect(Calculatrice.Carre(-4)).to.equal(16);
                expect(Calculatrice.Carre(2.58)).to.equal(6.66);
                expect(Calculatrice.Carre(null)).to.equal("Invalid Input");
                done();
            });
        });

        describe('Tests de la fonction racineCarre', function () {
            it('devrait retourner la racine carrée d\'un nombre', function (done) {
                expect(Calculatrice.RacineCarre(9)).to.equal(3);
                expect(Calculatrice.RacineCarre(8)).to.equal(2.83);
                expect(Calculatrice.RacineCarre(8.5)).to.equal(2.92);
                expect(Calculatrice.RacineCarre(-16)).to.equal("Invalid Input");
                expect(Calculatrice.RacineCarre(null)).to.equal("Invalid Input");
                done();
            });
        });

        describe('Tests de la fonction puissance', function () {
            it('devrait retourner la puissance d\'un nombre', function (done) {
                expect(Calculatrice.Puissance(2, 3)).to.equal(8);
                expect(Calculatrice.Puissance(-2, 3)).to.equal(-8);
                expect(Calculatrice.Puissance(2, -3)).to.equal(0.13);
                expect(Calculatrice.Puissance(-2, -3)).to.equal(-0.13);
                expect(Calculatrice.Puissance(0, 0)).to.equal(1);
                expect(Calculatrice.Puissance(null, 2)).to.equal("Invalid Input");
                expect(Calculatrice.Puissance(3, null)).to.equal("Invalid Input");
                expect(Calculatrice.Puissance(null, null)).to.equal("Invalid Input");
                done();
            });
        });
    });
    describe('Méthode TDD', function () {
        describe('Addition', function () {
            it('Doit additionner deux nombres', function (done) {
                expect(Calculatrice.Addition(2, 3)).to.equal(5);
                expect(Calculatrice.Addition(-5, 10)).to.equal(5);
                expect(Calculatrice.Addition(null, 5)).to.equal("Erreur");
                expect(Calculatrice.Addition(-5, null)).to.equal("Erreur");
                expect(Calculatrice.Addition(null, null)).to.equal("Erreur");
                done();
            });
        });

        describe('Soustraction', function () {
            it('Doit soustraire deux nombres', function (done) {
                expect(Calculatrice.Soustraction(5, 3)).to.equal(2);
                expect(Calculatrice.Soustraction(5, 10)).to.equal(-5);
                expect(Calculatrice.Soustraction(null, 5)).to.equal("Erreur");
                expect(Calculatrice.Soustraction(-5, null)).to.equal("Erreur");
                expect(Calculatrice.Soustraction(null, null)).to.equal("Erreur");
                done();
            });
        });
        describe('Multiplication', function () {
            it('Doit multiplier deux nombres', function (done) {
                expect(Calculatrice.Multiplication(5, 10)).to.equal(50);
                expect(Calculatrice.Multiplication(-5, 10)).to.equal(-50);
                expect(Calculatrice.Multiplication(null, 5)).to.equal("Erreur");
                expect(Calculatrice.Multiplication(-5, null)).to.equal("Erreur");
                expect(Calculatrice.Multiplication(null, null)).to.equal("Erreur");
                done();
            });
        });
        describe('Division', function () {
            it('Doit diviser deux nombres', function (done) {
                expect(Calculatrice.Division(10, 5)).to.equal(2);
                expect(Calculatrice.Division(10, -5)).to.equal(-2);
                expect(Calculatrice.Division(null, 5)).to.equal("Erreur");
                expect(Calculatrice.Division(-5, null)).to.equal("Erreur");
                expect(Calculatrice.Division(null, null)).to.equal("Erreur");
                done();
            });
            it('Doit retourner une erreur si l\'un des arguments est zéro dans la division', function (done) {
                expect(Calculatrice.Division(10, 0)).to.equal("Erreur");
                expect(Calculatrice.Division(0, 5)).to.equal(0);
                done();
            });
        });
        describe('Pourcentage', function () {
            it('Doit calculer le pourcentage d\'un nombre', function (done) {
                expect(Calculatrice.Pourcentage(50, 25)).to.equal(12.5);
                expect(Calculatrice.Pourcentage(50, -25)).to.equal(-12.5);
                expect(Calculatrice.Pourcentage(null, 5)).to.equal("Erreur");
                expect(Calculatrice.Pourcentage(-5, null)).to.equal("Erreur");
                expect(Calculatrice.Pourcentage(null, null)).to.equal("Erreur");
                done();
            });
            it('Doit retourner une erreur si le pourcentage est supérieur à 100 %', function () {
                expect(Calculatrice.Pourcentage(50, 200)).to.equal("Erreur");
                expect(Calculatrice.Pourcentage(100, 50)).to.equal(50);
            });
        });
    });
});