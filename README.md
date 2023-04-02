# Test Unitaire

___
## Sommaire

[Dépendances](#dépendances) 
**|** [Installation et exécution](#installation-et-exécution)
**|** [Méthode TDD](#test-driven-development)
**|** [Méthode BDD](#behavior-driven-development)


## Dépendances

* [NodeJS](https://nodejs.org/fr/download/)

## Installation et exécution

Pour pouvoir lancer l'application, veuillez lancer la commande suivante :
```
npm install
```

Pour lancer les tests, faites la commande suivante :
```
npm run test
```

Enfin, si vous voulez tester la calculatrice, placez-vous dans le dossier src, puis lancez la commande :
```
node app.js
```

## Test driven development

### Explication du TDD 

Le développement piloté par les tests (TDD) est une méthode de développement logiciel qui consiste à écrire des tests avant de coder les fonctionnalités. Cette approche permet de s'assurer que chaque fonctionnalité ajoutée au code fonctionne correctement, en vérifiant qu'elle passe les tests qui lui sont associés.

> Les tests sont écrits pour vérifier le bon fonctionnement de chacune des fonctions de la classe Calculatrice, qui permettent de réaliser des opérations arithmétiques simples : Addition, Soustraction, Multiplication, Division et Pourcentage.

Chacun de ces tests utilise la fonction describe() pour décrire le groupe de tests et it() pour décrire chaque test individuel. Dans chaque test, on appelle la fonction correspondante de la classe Calculatrice avec certains arguments, puis on compare le résultat retourné par la fonction à une valeur attendue en utilisant l'assertion expect().

___
**Addition**

- Le test doit vérifier que la fonction Addition(2, 3) retourne la valeur 5.
- Le test doit vérifier que la fonction Addition(-5, 10) retourne la valeur 5.
- Le test doit vérifier que la fonction Addition(null, 5) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Addition(-5, null) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Addition(null, null) retourne la chaîne de caractères "Erreur".

___
**Soustraction**

- Le test doit vérifier que la fonction Soustraction(5, 3) retourne la valeur 2.
- Le test doit vérifier que la fonction Soustraction(5, 10) retourne la valeur -5.
- Le test doit vérifier que la fonction Soustraction(null, 5) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Soustraction(-5, null) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Soustraction(null, null) retourne la chaîne de caractères "Erreur".

___
**Multiplication**

- Le test doit vérifier que la fonction Multiplication(5, 10) retourne la valeur 50.
- Le test doit vérifier que la fonction Multiplication(-5, 10) retourne la valeur -50.
- Le test doit vérifier que la fonction Multiplication(null, 5) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Multiplication(-5, null) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Multiplication(null, null) retourne la chaîne de caractères "Erreur".

___
**Division**

- Le test doit vérifier que la fonction Division(10, 5) retourne la valeur 2.
- Le test doit vérifier que la fonction Division(10, -5) retourne la valeur -2.
- Le test doit vérifier que la fonction Division(null, 5) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Division(-5, null) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Division(null, null) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Division(10, 0) retourne la chaîne de caractères "Erreur" si l'un des arguments   est zéro dans la division.
- Le test doit vérifier que la fonction Division(0, 5) retourne la valeur 0.

___
**Pourcentage**

- Le test doit vérifier que la fonction Pourcentage(200, 50) retourne la valeur 100.
- Le test doit vérifier que la fonction Pourcentage(100, 25) retourne la valeur 25.
- Le test doit vérifier que la fonction Pourcentage(null, 5) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Pourcentage(-5, null) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Pourcentage(null, null) retourne la chaîne de caractères "Erreur".
- Le test doit vérifier que la fonction Pourcentage(50, 200) retourne la chaîne de caractères "Erreur" si le pourcentage est supérieur à 100 %
- Le test doit vérifier que la fonction Pourcentage(100, 50) retourne la valeur 50


## Behavior driven development

### Les Users Stories

> Pour chaque fonctionnalité que l'on voudra implémenter, il faudra à l'aide de
> la méthode BDD, définir cette fonctionnalité du côté métier.
> Dans ce contexte, nous avons dû créer 3 user stories.

___
**Le nombre au carré**

*En tant qu'utilisateur de la calculatrice, je veux saisir un nombre afin d'obtenir son carré*

Spécifications :

- La fonction doit prendre en entrée un nombre et retourner le carré de ce nombre
- La fonction doit fonctionner avec des nombres positifs ou négatifs
- La fonction doit retourner un résultat précis jusqu'à deux décimales
- Si l'entrée est d'un autre type qu'un nombre, la fonction doit retourner une erreur

___
**La racine carrée d'un nombre**

*En tant qu'utilisateur de la calculatrice, je veux saisir un nombre afin d'obtenir sa racine carré*

Spécifications :

- La fonction doit prendre un nombre positif en entrée et renvoyer sa racine carrée
- La fonction doit retourner un résultat précis jusqu'à deux décimales
- Si l'entrée est négative, la fonction doit retourner une erreur
- Si l'entrée est d'un autre type qu'un nombre, la fonction doit retourner une erreur

___
**La puissance d'un nombre**

*En tant qu'utilisateur de la calculatrice, je veux saisir un premier nombre ainsi qu'un deuxième afin d'obtenir la puissance du premier nombre*

Spécifications :

- La fonction doit prendre en entrée une base et un exposant et retourner la puissance de la base à l'exposant
- La fonction doit retourner un résultat précis jusqu'à deux décimales
- La base et l'exposant peuvent être des nombres positifs comme négatifs
- Si l'exposant est négatif, la fonction doit retourner la valeur inverse de la puissance
- Si l'exposant est nul, la fonction doit retourner 1
- Si les entrées sont d'un autre type que des nombres, la fonction doit retourner une erreur