const btnEscape = document.getElementById('btnEscape');
const divLightbox = document.getElementById('lightbox');
const imgLightbox = document.getElementById('imgLightbox');
divLightbox.style.visibility = "hidden";


const imgDoc = document.querySelector("a img");
console.log(imgDoc);
imgDoc.addEventListener("click",() =>
{
    divLightbox.style.visibility = "visible";
})

// Enlève la visibilité du lightbox onClick
btnEscape.addEventListener("click",()=>
{
    divLightbox.style.visibility = "hidden";
});

// Vérifier si l'utilisateur clique ailleurs que sur l'image
divLightbox.addEventListener("click",e=>
{
    console.log(e);
    console.log(e.target);
    if(e.target !== imgLightbox)divLightbox.style.visibility = "hidden";;
});