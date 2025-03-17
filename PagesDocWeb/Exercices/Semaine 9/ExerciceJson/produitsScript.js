// Cet exemple est incomplet et non-fonctionnel


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

const containerRowProduits = document.querySelector('#rowProduits');
const cartContainer = document.querySelector('.offcanvas-body');
const totalContainer = document.querySelector('#total');
const cartCount = document.querySelector('.fa-cart-shopping span');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function convertJson()
{
    fetch('produits.json')
    .then(resp => resp.json())
    .then(produitsData => 
    {
        produitsData.forEach(produit => 
        {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-4');

                productCard.innerHTML = 
                `
                    <div class="card">
                        <img src="${produit.image}" alt="${produit.titre}" style="aspect-ratio: 1">
                        <div class="card-body">
                            <a href="detail.html?id=${produit.id}"><h5 class="card-title">${produit.titre}</h5></a>
                            <p class="card-text">${produit.description} ${produit.id}</p>
                            <p class="card-text text-center">${produit.prixUnitaire}$</p>
                            <div class="container-fluid d-flex justify-content-center">
                                <div class="container-sm d-flex align-items-center justify-content-around">
                                <button
                                    data-image="${produit.image}"
                                    data-description="${produit.description}"
                                    data-prixUnitaire="${produit.prixUnitaire}" 
                                    data-titre="${produit.titre}" 
                                    data-id="${produit.id}"
                                    type="button" class="btn btn-primary voirDetails" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Launch demo modal
                                </button>
                                <button
                                    data-image="${produit.image}"
                                    data-description="${produit.description}"
                                    data-prixUnitaire="${produit.prixUnitaire}" 
                                    data-titre="${produit.titre}" 
                                    data-id="${produit.id}" 
                                    class="btn btn-primary btn-card addCart text-center">
                                        Ajouter au panier
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            containerRowProduits.append(productCard);
        });
        const btndetails = document.querySelectorAll(".voirDetails");
        console.log(btndetails);
        btndetails.forEach(btn =>
        {
            btn.addEventListener('click', e => 
            {
                const idProduit = e.target.getAttribute('data-id');
                const titreProduit = e.target.getAttribute('data-titre');
                const prixUnitaireProduit = e.target.getAttribute('data-prixUnitaire');
                const descriptionProduit = e.target.getAttribute('data-description');
                const imageProduit = e.target.getAttribute('data-image');
                showProductModal(idProduit, titreProduit, descriptionProduit, prixUnitaireProduit, imageProduit);
            })
        })

        const btnCart = document.querySelectorAll(".addCart");

        btnCart.forEach(btn =>
            {
                  btn.addEventListener('click', e => 
                  {
                      const idProduit = e.target.getAttribute('data-id');
                      const titreProduit = e.target.getAttribute('data-titre');
                      const prixUnitaireProduit = e.target.getAttribute('data-prixUnitaire');
                      const imageProduit = e.target.getAttribute('data-image');
                      addToCart(idProduit, titreProduit, prixUnitaireProduit, imageProduit);
                  })
            })
    })
    .catch(erreur => console.error('Erreur dans la conversion du fichier =>', erreur))
}
convertJson();



function showProductModal(id, titre, description, prixUnitaire, image)
{
    const modalTitle = document.querySelector('.modal-title');
    modalTitle.textContent = titre;

    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = 
    `
        <img src="${image}" class="img-fluid mb-3" alt="${titre}">
        <p class="text-center">${id}. ${description}</p>
        <p class="text-center">${prixUnitaire} $</p>
    `

}

function addToCart(id, titre, prix, img)
{
    const cartItem = cart.find(item => item.id == id);
    if(cartItem)
    {
        cartItem.quantity++;
    }
    else
    {
        cart.push({id, titre, prix, quantity :1});
    }
    //saveCart();
    updateCart();
    
}

function updateCart()
{
    cartContainer.innerHTML = "";
    let total = 0;
    let itemCount = 0;
    cart.forEach(item => 
    {
        total += item.prix * item.quantity;
        itemCount += item.quantity;
        const listeItem = document.createElement('li');

        listeItem.innerHTML =
        `
            ${item.titre} X ${item.quantity} - ${item.prix * item.quantity}
            <button
                data-id="${item.id}" 
                class="btn btn-danger removeItem">
                X
            </button>
        `;

        cartContainer.appendChild(listeItem);

    })
    cartCount.textContent = itemCount;
}