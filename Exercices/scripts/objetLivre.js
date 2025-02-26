//Exemple de documentation JSDoc:
/**
 * Représente un livre.
 * @constructor
 * @param {string} titre - Le titre du livre.
 * @param {string} auteur - Auteur du livre.
 * @param {string} citation - Citation du livre
 */
function Livre(titre, auteur, citation) {
	this.Titre = titre;
	this.Auteur = auteur;
	this.Citation = citation;
	this.toString =
			
			`<h3>Titre du livre : ${this.Titre}</h3>`+ "\n" +
			`<h4>Auteur : ${this.Auteur}</h4>` + "\n" +
			`<p><< ${"" + this.Citation + ""} >></p>` + "\n \n";
	
}
let livre1 = new Livre(
		"La liberté n'est pas une marque de yogourt",
		"Falardeau, Pierre",
		"Il y a le mensonge organisé comme il y a le crime organisé. L'information de Radio-Cadenas, par exemple, contrôlée par la gang à O'Neil, ex-homme de main de Pierre Elliot. Je pense aussi à Roger D.Landry, le père de Youppi, façonnant la grosse Presse à son image et à sa ressemblance.")

console.log(livre1.Auteur + "\n" + livre1.Titre + "\n" + livre1.Citation);
console.log(livre1.toString);
document.body.innerHTML += (livre1.toString);