const selectedProductID = window.location.href.split('=')[1];
let produitSelectionne = {};
console.log(selectedProductID);

let listeProduits = [];
function getData()
{
    fetch('produits.json')
    .then(resp => resp.json())
    .then(produitsData => 
    {
        produitsData.forEach(produit => {
            
            listeProduits.push(produit)
        });
        produitSelectionne = listeProduits.find(p => p.id == selectedProductID);
        console.log(produitSelectionne);

        let divImgContainer = document.querySelector('#imgPageDetail');
        let divTxtContainer = document.querySelector('#txtPageDetail');
        let img = document.createElement('img');
        img.src = produitSelectionne.image;
        img.style.width = '100%';
        img.style.height = '90vh';

        divImgContainer.append(img);
        console.log(img);

        let titreProduit = document.createElement('h1');
        titreProduit.textContent = `${produitSelectionne.id}. ${produitSelectionne.titre}`;
        divTxtContainer.prepend(titreProduit);

        let descriptionProduit = document.createElement('p');
        descriptionProduit.textContent = `${produitSelectionne.description}`;
        divTxtContainer.append(descriptionProduit);

        let prixProduit = document.createElement('p');
        prixProduit.textContent = `${produitSelectionne.prixUnitaire} $`;
        divTxtContainer.append(prixProduit);
    })
}
getData();


