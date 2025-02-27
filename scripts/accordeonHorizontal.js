const accordionTitles = document.querySelectorAll(".accordion-header");
const allItems = document.querySelectorAll(".accordion-item");
const allSectionContent = document.querySelectorAll(".accordion-content");


accordionTitles.forEach((accordionTitle) => {

  accordionTitle.addEventListener("click", () => {
// Si il est déjà actif, enlève la classe et le height du sibling
    if (accordionTitle.classList.contains("active")) {
      accordionTitle.classList.remove("active");
      accordionTitle.nextElementSibling.style.width = 0;
    } // Sinon vérifier que la classe est sur un autre, retire la et le height
    else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".active");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("active");
        accordionTitleWithIsOpen.nextElementSibling.style.width = 0;
      });
      // Maintenant ajout du height et active sur celui cliqué!
      accordionTitle.classList.add("active");
      accordionTitle.nextElementSibling.style.width = "100%";
    }
  });
});