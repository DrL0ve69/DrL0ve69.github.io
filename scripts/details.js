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
        let img = document.createElement('img');
        img.src = produitSelectionne.image;
        img.style.width = '50vw';
        img.style.height = '100vh';

        document.body.append(img);
        console.log(img);
    })
}
getData();


