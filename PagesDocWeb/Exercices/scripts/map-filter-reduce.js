// 1. Fonctions, Closure & Scoping

//  1.2 Le setTimeout dans un loop avec un var&let
for (let i = 0; i <= 10; i++)
{
    setTimeout( () => 
    {
        console.log(i)
    },100)
} // donne 1,2,3... car 3variables sont crées

for (var i = 0; i < 10; i++)
    {
        setTimeout( () => 
        {
            console.log(i)
        },100)
    } // donne 10,10,10... dû au scoping&hoisting

// 2. ARRAY METHODS, map(), filter(), reduce()
// Même principe que le for each mais retourne un array

// 2.1 Exemple 1

const nombres = [1, 2, 3, 4];

const nbCarrés = nombres.map((n)=>
    {
        return n*n;
    });

console.log(nbCarrés);

// 2.2 Disons que nous avons une liste de prix et que nous voulons appliquer un rabais de 50% sur chacun :
// Avec le forEach =>

const prix = [4, 8, 15, 16, 23, 42];

prix.forEach((prixProduit, i, arr)=>
    {
        arr[i] = prixProduit * 0.5;
    });

console.log(prix); 
// Ceci va cependant changer les prix d'origines de notre array, on doit donc créer un array vide et utiliser la méthode push

// Avec la méthode map()

const prixEx2 = [15, 33, 50, 118, 222];
const prixRabais = prixEx2.map((prixDeduction)=>
    {
        return prixDeduction * 0.5;
    });
console.log(prixRabais);
console.log(prixEx2);

// ENCORE PLUS SIMPLE !!! ICI CONNARD
const rabaisPrime = prixEx2.map(pRabais => pRabais * 0.5); // enlève le besoin d'utiliser le return
console.log(rabaisPrime);

// 2.3 Exemple de produits sur un Ecommerce

const produitsElectroniques = 
[
    {nomProduit: "Laptop", prixVenteOG: 499, couleur: "Blanc"},
    {nomProduit: "Smartphone", prixVenteOG: 1000, couleur: "Noir"},
    {nomProduit: "Écouteurs-sans-fil", prixVenteOG: 250, couleur: "Noir"},
    {nomProduit: "Écouteurs", prixVenteOG: 150, couleur: "Argent"},
    {nomProduit: "Clavier", prixVenteOG: 55, couleur: "Noir"}
];

const pElectroRabais = produitsElectroniques.map((pElectro)=>
    {
        return {
            ...pElectro,
            prixVenteOG: pElectro.prixVenteOG * 0.5
        } // On doit retourner l'objet complet et modifier le prix donc pas juste le pElectro.prix
    });
console.log(pElectroRabais); // Attention garder le format de l'objet intacte, même nom, prix, etc...

// 2.4 Simplifier une liste d'objet en string

const nomsProduits = produitsElectroniques.map((pElectro) => 
    {
        return pElectro.nomProduit;
    });
console.log(nomsProduits);

// 2.5 Ajout de logique à l'intérireur de la fonction map()

const categoriesProduits = produitsElectroniques.map(produit =>
    {
        let categorie;
        if(produit.prixVenteOG < 100) categorie = "Budget";
        else if(produit.prixVenteOG <= 250) categorie = "Moyen";
        else categorie = "Produits Premium";
        return {...produit, categorie}; // retourne les objets originaux avec l'ajout d'une propriété categorie
    });
console.log(categoriesProduits);

// Maintenant la méthode filter() qui permet l'ajout de logique directement pour filtrer une recherche
// 2.6 Exemple de base avec nombre pair et impair

const arrayNombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayNombres.filter(n => n % 2 === 0); // cette ligne n'aura aucun impact car arrayNombres, il faut sauvegarder pour modifier
console.log(arrayNombres.filter(n => n % 2 === 0));

const nbPairs = arrayNombres.filter(n => n % 2 === 0);
console.log(nbPairs); // Comme ceci!!! 

// 2.7 Retournons à l'exemple des produits mais avec filter() sur le prix ou autres propriétés.
// Le Prix

const produitsAbordables = produitsElectroniques.filter(produit => produit.prixVenteOG < 250);
console.log(produitsAbordables); // Vérifie si l'objet est de moins de 250 si True, l'inclut!

// La couleur

const produitsCouleurNoir = produitsElectroniques.filter(produit => produit.couleur === "Noir");
console.log(produitsCouleurNoir);

// Avec le include pour un search sur le nom du produit

const searchEcouteur = produitsElectroniques.filter(produit => produit.nomProduit.includes("Écouteur"));
console.log(searchEcouteur);

// Avec le return pour inclure plusieurs conditions :

const arrConditionsMultiples = produitsElectroniques.filter(produit => 
    {
        return produit.couleur === "Noir" && produit.prixVenteOG >= 250; // Doit remplir ces 2 conditions True, True!!!
    });
console.log(arrConditionsMultiples);


// Maintenant la méthode reduce()
// 2.8 Exemple de base, avec le tableau de nombres (arrNombres) allant de 1 à 10:

const sommeArrNb = arrayNombres.reduce((total, nb) => 
    {
        return total + nb; // Accumulateur et la valeur du nombre à l'index[x] dans ce cas-ci 1,2,3,4 etc
    },0); // ici on indique la valeur à laquelle débutée!!! IMPORTANT!!! Débute à la 1ere valeur si ommis.
console.log(sommeArrNb); // Cela donne le nombre 55, on a donc réduit le array à la somme de ses composantes!

// 2.9 Avec un array de string que l'on veut joindre en un seul string
const mots = ["Hello", " ", "world"];
const phrase = mots.reduce((resultat, mot) =>
    {
        return resultat + mot;
    });
console.log(phrase); // La phrase correspond au string "Hello world", n'est donc pas un array!


// 2.10 Exemple d"un array de string qui retourne un compte d'objets

const fruits = ["pomme", "banane", "pomme", "orange", "pomme", "banane"];

const compte = fruits.reduce((panier, fruit) => 
    {
        panier[fruit] = (panier[fruit] || 0) + 1;
        return panier;
    },{}); // Voir les accolades qui permettent le résultat transformé
console.log(compte);

// reduce() permet donc de prendre une valeur et de la transformé en un autre type, cumulé ou réduit