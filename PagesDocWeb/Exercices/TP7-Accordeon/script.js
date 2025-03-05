const accordionTitles = document.querySelectorAll(".accordion-header");
const allItems = document.querySelectorAll(".accordion-item");
const allSectionContent = document.querySelectorAll(".accordion-content");


accordionTitles.forEach((accordionTitle) => {

  accordionTitle.addEventListener("click", () => {
// Si il est déjà actif, enlève la classe et le height du sibling
    if (accordionTitle.classList.contains("active")) {
      accordionTitle.classList.remove("active");
      accordionTitle.nextElementSibling.style.height = 0;
    } // Sinon vérifier que la classe est sur un autre, retire la et le height
    else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".active");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("active");
        accordionTitleWithIsOpen.nextElementSibling.style.height = 0;
      });
      // Maintenant ajout du height et active sur celui cliqué!
      accordionTitle.classList.add("active");
      accordionTitle.nextElementSibling.style.height = "100%";
    }
  });
});


/*

https://www.itzami.com/blog/how-to-build-an-accordion-with-javascript

    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel
    this.classList.toggle("active");

     Toggle between hiding and showing the active panel 
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
*/