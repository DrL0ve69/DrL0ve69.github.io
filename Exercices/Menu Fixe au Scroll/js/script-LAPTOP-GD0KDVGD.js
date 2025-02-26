const navBar = document.querySelector('.navbar');
navBar.style.transition = 'all 2s ease-in-out'

window.addEventListener('scroll', e =>
{
    let positionY = window.scrollY;
    console.log(positionY);
    if(positionY >= 200)
    {
        navBar.style.visibility = 'hidden';
        navBar.style.opacity = '0.5';
        navBar.style.position = 'fixed';
        navBar.style.visibility = 'visible'; 
    }
    else
    {
        navBar.style.visibility = 'visible';
        navBar.style.position = 'relative';
        navBar.style.opacity = '1';
    }
    //console.log(e.target, e)
    // sinon avec le transform et translate => translate le menu = au scrollY
});