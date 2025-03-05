const btn1 = document.getElementById("btn1");

// le mettre en switch!! Pour la clarifier!
//MVT DROITE/GAUCHE & HAUT/BAS AVEC WASD!!!!!
let positionX_Btn1 =0;
let positionY_Btn1 =0;
window.addEventListener("keypress", event =>
{
	console.log(event.key, btn1.style);
	if (event.key === "d")
	{
		positionX_Btn1+= 10;
		gsap.set(btn1,{x: positionX_Btn1})
	}
	if (event.key === "w")
	{
		positionY_Btn1 -= 10;
		gsap.set(btn1,{y: positionY_Btn1})
	}
	if (event.key === "a")
	{
		positionX_Btn1 -= 10;
		gsap.set(btn1,{x: positionX_Btn1})
	}
	if (event.key === "s")
	{
		positionY_Btn1 += 10;
		gsap.set(btn1,{y: positionY_Btn1})
	}
	console.log(event.key, btn1);
});
