const ulListe = document.getElementById('itemList');
const btnAjouter = document.querySelector('.addItem');
const txtInput = document.querySelector('.itemInput');
const leDiv = document.querySelector('#leDiv');
const pErreur = document.createElement('p');


// Définition du message d'erreur
pErreur.style.color = 'red';
pErreur.textContent = "Vôtre input est vide!!!"
leDiv.prepend(pErreur);
pErreur.style.display = "none";

// Ajouter un li avec gestion d'un input vide ou null
function AjouterItem()
{
    if(txtInput.value == null || txtInput.value == "")
    {
        pErreur.style.display= "block";
    }
    else
    {
        const new_ListeItem = document.createElement("li"); // Nouveau li, sans texte
        new_ListeItem.style.width = '30%';
        new_ListeItem.style.display = 'flex';
        new_ListeItem.style.justifyContent = 'space-between';
        new_ListeItem.innerHTML =  
        `
            ${txtInput.value}
            <span class="options">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </span>
        `;
        
        ulListe.append(new_ListeItem); // Ajoute le li du ul à la fin, prepend pour le début
        pErreur.style.display = "none";
        saveData(); // Enregistre le ul.innerHtml dans le local storage
        txtInput.focus(); // Ajout du focus sur le input pour entrer un autre item
    }

}
// Évènement utilisant la fonction AjouterItem sur le click du btnAjouter
btnAjouter.addEventListener("click",() =>
{
    AjouterItem();
    txtInput.value = ""; // Vide la valeur du input
});

// Faire le edit et le delete!
// Évènement click du i poubelle faTrash&faEdit
ulListe.addEventListener("click", e =>
{
    const iconesTrash = document.querySelectorAll('.fa-trash-alt');
    const iconesEdit = document.querySelectorAll('.fa-edit');
    console.log(e.target);
    iconesTrash.forEach(poubelle => 
    {
        if(e.target == poubelle)
        {
            poubelle.parentElement.parentElement.remove();
            saveData();
        }
    });
    iconesEdit.forEach(edit => 
    {
        if(e.target == edit)
        {
            if(txtInput.value == null || txtInput.value == "")
            {
                pErreur.style.display= "block";
            }
            else
            {
                edit.parentElement.previousSibling.textContent = txtInput.value;
                txtInput.value = "";
                pErreur.style.display = "none";
                saveData();
                txtInput.focus();
            }   
        }
    });
});

// Sauvegarder les items avec le localSorage
function saveData()
{
    localStorage.setItem("data", ulListe.innerHTML);
}

// Maintenant, retrouvons le data sauvgardé pour l'afficher
function showTask()
{
    ulListe.innerHTML = localStorage.getItem("data");
}
showTask();