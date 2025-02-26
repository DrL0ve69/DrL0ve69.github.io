const btnSlide = document.querySelector('.btn-slide');
const lePanel = document.querySelector('#panel');
lePanel.style.transition = '1.5s ease-in-out';
btnSlide.style.transition = '1.5s ease-in-out';

btnSlide.addEventListener('click',()=>
{
    
    btnSlide.classList.toggle('clicked');
    if(btnSlide.classList.contains('clicked'))
    {
        setTimeout(()=>
        {
            btnSlide.textContent = "Fermer";
        },1500)
        
        lePanel.style.height = '300px';
    }
    else
    {
        setTimeout(()=>
        {
            btnSlide.textContent = "Ouvrir";
        },1500)
        lePanel.style.height = '0px';
    } 
})

