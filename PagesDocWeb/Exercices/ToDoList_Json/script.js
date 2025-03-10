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
    ulListe.innerHTML = localStorage.getItem("data") || [];
}
showTask();

// Écrire le fichier Json
const strJson = ''
/*
function write_JsonFile()
{
    let strBuilder = [];
    const allLi = document.querySelectorAll("li");
    console.log(allLi);
    let count = 0;
    allLi.forEach(item => 
    {
        const allLi_Json = JSON.stringify(item.innerHTML);
        console.log(allLi_Json);
        strBuilder[count] = item.innerHTML;
        count++;
    })
    console.log(strBuilder);
    console.log(JSON.stringify(allLi[0].innerHTML));
    fetch('list_JsonData.json')
    .then(response =>
    {
        console.log(response);
        response = JSON.stringify(strBuilder);
        return response
    })
    .then(str=>
    {
        console.log(str);
    })

};
write_JsonFile();
*/

// version Json Lire le fichier
fetch("list_JsonData.json")
.then(response => response.json())
.then(dataObj => 
{
    console.log(dataObj); // append le ul.innerHtml avec le résultat
});
// autre version
/*
async function getData()
{
    try
    {
        let response = await fetch("list_JsonData.json");
        console.log(response);
        if(!response.ok)throw new Error('Réponse invalide');
        let dataObj = await response.json();
        console.log(dataObj, dataObj.name, dataObj.age, dataObj.car);
    }
    catch(err)
    {
        console.warn(err.message)
    }

}
getData();

// URL, Request, Headers
const strPrime1 = "http://127.0.0.1:5500/ToDoList_Json/list_JsonData.json";
function getDataPrime1()
{
    const url = new URL("http://127.0.0.1:5500/ToDoList_Json/list_JsonData.json");
    //console.log(url.host, url.origin, url.protocol, url.port, url.pathname)
    const request = new Request(url,
    {
        headers:{'x-steve': 'Hello'},
        method: 'GET', // Default
        cache: 'no-store',
    });
    fetch(request)
    .then((response) =>
    {
        //console.log(response.status)
        if(!response.ok)throw new Error('Requête Invalide');
        return response.json();
    })
    .then((data)=>
    {
        console.log(data);
    })
    .catch(err => console.warn(err.message));
}
getDataPrime1();
*/

// RESPONSE OBJECTS
const strJson_Prime2 = "http://127.0.0.1:5500/ToDoList_Json/list_JsonData.json";
// HTTP Request - HEAD, BODY
// HTTP Response - HEAD, BODY
let obj_Prime2 = 
{
    id: crypto.randomUUID(),
    name: 'Dr.L0v3',
    couleurFavorite: 'green',
};

function getData_Prime2()
{
    let jsonString = JSON.stringify(obj_Prime2);
    let file = new File([jsonString], 'myData_Prime2.json',{type: 'application/json'});

    let response = new Response(file, 
    {
        status:200,
        statusText: 'Say my name',
        headers:
        {
            'content-type': 'application/json',
            'conten-length':file.size,
            'x-Dr.L0v3': 'Doit commencer par la lettre x pour un header personnel'
        },
    });
    console.log(response)
}
getData_Prime2();