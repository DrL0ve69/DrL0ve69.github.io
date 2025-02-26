const btnChangeClr = document.querySelector(".changeColor");

function GetNewColor() 
{
    let symbols = '0123456789ABCDEF'; // 16 symboles possible avec l'ajout du << # >> en préfixe
    let color = '#'
    for (let i = 0; i < 6; i++) { // Les couleurs contiennent 6 chiffres/lettres
       color += symbols[Math.floor(Math.random() * 16)]; // Choisir de 0 à 15 dans l'index
    }
    document.body.style.background = color; // change le bg du body
    document.body.style.transition = '1s ease-in-out';
    document.getElementById("hexColorTxt").textContent = color; // Valeur texte du hexadécimal
}
btnChangeClr.addEventListener("click",()=>
{
    GetNewColor();
});
setInterval(GetNewColor,2000);