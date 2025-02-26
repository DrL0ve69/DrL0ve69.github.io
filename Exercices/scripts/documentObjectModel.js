// DOM => document, représente la structure
console.log(document);

// Titre du document
console.log(document.title);

// Changer le titre du document
document.title = "Le nouveau titre";

// Balise body du document
console.log(document.body);

// Balise head du document
console.log(document.head);

// Balise html du document
console.log(document.documentElement);

// Atteindre le style CSS, Ex:
document.body.style.backgroundColor = "red";

// La fonction, addEventListener

      // Sélectionner le ID de l'élément en question
      let messageElement = document.getElementById("message");

      // Ajouter le eventListener au bouton
      document
        .getElementById("changeText")
        .addEventListener("click", function () {
          // Cela changera le texte
          messageElement.textContent = "Text Changed!";
        });

        // Access the first child of the body node
console.log(document.body.childNodes[0]);


// parentnode; the parent of a <p> element within a <div> would be the <div> itself.
let p = document.querySelector('p'); // Select the <p> element
console.log(p.parentNode); // Output: <div> element (parent of p); 

// Spaces between tags and line returns in HTML code are considered text nodes by the browser. So, the actual first child node might not be what you expect.

console.log(document.body.firstChild); // Outputs: First child node (likely a linebreak(text node))
console.log(document.body.lastChild); // Outputs: Last child node (likely a script tag)

// childnode
console.log(document.body.childNodes);

// children
console.log(document.body.children);

// Méthodes pour sélectionner les éléments du DOM