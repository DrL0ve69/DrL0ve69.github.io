// CRUD => Create / Read / Update / Delete
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Btn cliqué!");
  
    formValidation();
  });

  let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Message ne peut pas être vide";
      console.log("Échec");
    } else {
      console.log("Succès");
      msg.innerHTML = "";
      acceptData();
    }
  };
// 1. Create

let data = {};

let acceptData = () => 
{
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => 
{
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
};

// 2. Read

// 3. Update

let editPost = (e) => 
{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

// 4. Delete

let deletePost = (e) => 
{
    e.parentElement.parentElement.remove();
};