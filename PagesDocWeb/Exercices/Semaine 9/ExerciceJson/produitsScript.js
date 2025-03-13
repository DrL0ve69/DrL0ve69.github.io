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
const cartContainer = document.querySelector('#cart');
const totalContainer = document.querySelector('#total');
const cartCount = document.querySelector('#cart-count');

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
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Launch demo modal
                                </button>
                                <button 
                                    data-prix="${produit.prixUnitaire}" 
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
    })
    .catch(erreur => console.error('Erreur dans la conversion du fichier =>', erreur))
}
convertJson();
