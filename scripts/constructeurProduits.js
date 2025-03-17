/*
2. Section Produits
Affichage des produits sous forme de cartes Bootstrap, chargés dynamiquement depuis un fichier
produits.json.
Chaque carte produit doit contenir :
• Une image.
• Un titre et une courte description.
• Le prix.
• Deux boutons :
o “Ajouter au panier” (ajoute l’article au panier et le sauvegarde dans LocalStorage).
o “Détails” (ouvre un popup détaillé du produit).
Minimum : 6 produits. Les données doivent être chargées dynamiquement avec JavaScript.
*/

// Construire les objets de manière à pouvoir les ajouter dynamiquement sous forme de carte BootStrap

/*
    Exemple d'une carte
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/
const listeProduits = 
[
  {
    "id":1,
    "titre": "Produit 1",
    "prixUnitaire": 199.99,
    "description": "Description produit",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
  },
  {
    "id":2,
    "titre": "Produit 2",
    "prixUnitaire": 199.99,
    "description": "Description produit",
    "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/20547d52-3e1b-4c3d-b917-f0d7e0eb8bdf/custom-nike-air-force-1-low-by-you-shoes.png"
  },
  {
    "id":3,
    "titre": "Produit 3",
    "prixUnitaire": 199.99,
    "description": "Description produit",
    "image": "https://images.laced.com/products/83b250a4-e848-4d2c-b36b-5efa3ea0f012.jpg?auto=format&fit=max&w=3840&q=75"
  },
  {
    "id":4,
    "titre": "Produit 4",
    "prixUnitaire": 199.99,
    "description": "Description produit",
    "image": "https://images.laced.com/products/e88566e0-0051-4948-ae08-5765bbdd6db0.jpg?auto=format&fit=max&w=3840&q=75"
  },
  {
    "id":5,
    "titre": "Produit 5",
    "prixUnitaire": 199.99,
    "description": "Description produit",
    "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/956f694e-6ab5-48c5-a47d-fef6286590a8/KOBE+IX+ELITE+%28GS%29.png"
  },
  {
    "id":6,
    "titre": "Produit 6",
    "prixUnitaire": 199.99,
    "description": "Description produit",
    "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c3967023-e1af-403c-bc21-4a398f9df18f/LEBRON+XXII+SN.png"
  },
]
console.log(listeProduits);

// Rangées de produits
const rowProduits = document.querySelector("#rangeeProduits");
console.log(rowProduits);
// Ajout dynamique de produit à la page, le aspect ratio: 1 => image carrée
listeProduits.forEach(produit =>
{
    let newProduit = document.createElement("div");
    newProduit.classList = "col col-md-6 col-lg-4 col-xxl-3";
    console.log(newProduit);
    newProduit.innerHTML = 
    `
        <div class="card" style="width: 18rem;">
            <img
                data-id="${produit.id}"
                data-prix="${produit.prixUnitaire}"  
                src="${produit.image}" alt="${produit.titre}" style="aspect-ratio: 1;">
            <div class="card-body">
                <a href="detail.html?id=${produit.id}"><h5 class="card-title">${produit.titre}</h5></a>
                <p class="card-text">${produit.description} ${produit.id}</p>
                <p class="card-text text-center">${produit.prixUnitaire}$</p>
                <div class="container-fluid d-flex justify-content-center">
                    <div class="container-sm d-flex align-items-center justify-content-center">
                     <button 
                        data-id="${produit.id}"
                        data-prix="${produit.prixUnitaire}" 
                        data-titre="${produit.titre}"                         
                        class="btn btn-primary btn-card addCart text-center">
                            Ajouter au panier
                     </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    rowProduits.append(newProduit);
})


// Arranger les import export pour que le tout se lie vers un main.js de type module
// Ceci va dans le cart.js

let cart = [];

// Fonction qui permet le contrôle des produits dans le shopping cart
const setProductInCart = (idProduit, quantity, position) =>
{
    if(quantity > 0)
    {
        // Cas numéro 1
        if(position < 0)
        {
            cart.push(
            {
                produit_id: idProduit,
                quantity:quantity
            });
        }
        else
        {
            cart[position].quantity = quantity;
        }
    }
    else
    {
        cart.splice(position,1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    refreshCartHTML();
}
// Fonction pour rafraîchier le panier
const refreshCartHTML = () =>
{
    const cartBody = document.querySelector('.offcanvas-body');
    let totalPanier = document.querySelector('#icon-cart span');
    let totalQuantity = 0;
    console.log(totalPanier,cartBody);

    // Libérer le body du panier
    cartBody.innerHTML = null;
    let sommePanier = 0;
    cart.forEach(item => 
    {
        totalQuantity = totalQuantity + item.quantity;
        

        let position = listeProduits.findIndex(value => value.id == item.produit_id);
        let infoProduit = listeProduits[position];


        let newItem = document.createElement('div');
        newItem.classList.add('itemCart');
        newItem.innerHTML = 
        `
            <div class="cartImage">
                <img src="${infoProduit.image}" />
            </div>
            <div class="cartItemNom">NomProduit</div>
            <div class="cartItemPrixTotal">${infoProduit.prixUnitaire * item.quantity}$</div>
            <div class="cartItemQuantity">
                <span class="minus" data-id="${infoProduit.id}">-</span>
                <span>${item.quantity}</span>
                <span class="plus" data-id="${infoProduit.id}">+</span>
            </div>
        `;
        cartBody.append(newItem);
        sommePanier += infoProduit.prixUnitaire * item.quantity;

    })
    totalPanier.textContent = totalQuantity;
    const containerSommePanier = document.querySelector('#totalPanier span');
    containerSommePanier.textContent = sommePanier;
}
// Évènement click sur la page
document.addEventListener('click', e =>
{
    const btnDeleteAll = document.querySelector('#btnTrashAll');
    let buttonClick = e.target;
    let idProduit = buttonClick.dataset.id;
    let position = cart.findIndex(value => value.produit_id == idProduit);
    let quantity = position < 0 ? 0 : cart[position].quantity;
    if(buttonClick.classList.contains('addCart') || buttonClick.classList.contains('plus'))
    {
        quantity++;
        setProductInCart(idProduit, quantity, position);
    }
    else if(buttonClick.classList.contains('minus'))
    {
        quantity--;
        setProductInCart(idProduit, quantity, position);
    }
    else if(buttonClick == btnDeleteAll)
    {
        cart = [];
        setProductInCart(idProduit, quantity, position);
        console.log("Clique sur le allTrash");
    }
})

// Vérification du localstorage
const initApp = () =>
{
    if(localStorage.getItem('cart'))
    {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    refreshCartHTML();
}
initApp();

// Ceci va dans le main script, manipulation diverses:
// La flèche de retour sur le scroll
window.addEventListener('scroll',()=>
{
    const flecheHaut = document.querySelector('#flecheHaut');
    
    if(scrollY > 100)flecheHaut.style.visibility = 'visible';
    else flecheHaut.style.visibility = 'hidden';
})

// Création dynamique d'un modal lorsqu'on clique sur l'image ou le btn détail
const imgCard = document.querySelectorAll('.card img');
console.log(imgCard);

imgCard.forEach(imgCarte =>
{
    imgCarte.addEventListener('click',e =>
    {
        let imgProduit = e.target;
        
        let objProduit = listeProduits.find(p => p.image == imgProduit.src); // On pourrait aussi utiliser les data-attributes
        console.log(objProduit);
        let lightboxProduit = document.createElement('div');
        lightboxProduit.classList.add('lightboxContainer')

        // Définir le contenu du lightbox:
        lightboxProduit.innerHTML = 
        `
            <button class="btn btn-primary" id="btnEscape">&times;</button>
            <div class="image-container">
                <img id="imgLightbox" src="${objProduit.image}" alt="${objProduit.titre}">
                <div class="infoLightbox">
                    <h3>${objProduit.titre}</h3>
                    <p>${objProduit.description}</p>
                </div>
                <div class="prixProduitLightbox text-center">
                    ${objProduit.prixUnitaire}$
                </div>
            </div>
        `;
        document.body.prepend(lightboxProduit);

        // Enlever le lightbox du body
        lightboxProduit.addEventListener('click',e => 
        {
            let btnFermer = document.getElementById('btnEscape');
            console.log(e.target)
            if(e.target == btnFermer || e.target == document.querySelector('.lightboxContainer'))document.body.firstChild.remove();
            
        })

    })
})
