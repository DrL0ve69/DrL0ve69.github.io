const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');
const spanCompte = document.querySelector('#counter');
let compteur = 0;

function Increase()
{
    return compteur++;
}
function Decrease()
{
    return compteur--;
}
btnIncrease.addEventListener('click', ()=>
{
    Increase();
    spanCompte.textContent = compteur +"";
})
btnDecrease.addEventListener('click', ()=>
{
    Decrease();
    if(compteur <= 0)compteur=0;
    spanCompte.textContent = compteur +"";
})
