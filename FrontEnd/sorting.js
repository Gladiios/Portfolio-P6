const gallery = document.querySelector(".gallery");
const sortingBtns = document.querySelectorAll(".sorting-btn");
const categoryNames = {
  1: "object",
  2: "apartment",
  3: "hotel",
};
const buttonProjet = document.querySelector(".btn-modifier");
// Data stocker dans ce tableau
let projectImages = [];

//Function d'affichage et de tri par categorie
async function filterProjects(category) {
  await fetch("http://localhost:5678/api/works")
    .then((res) => res.json())
    .then((data) => (projectImages = data));

  let filteredProjects = projectImages;

  // Permet de faire le tri au click
  if (category !== "all") {
    filteredProjects = projectImages.filter(
      (project) => categoryNames[project.categoryId] === category
    );
  }

  let galleryHTML = filteredProjects
    .map(
      (galleryProject) =>
        `
        <div class="cardProject">
          <id=${galleryProject.id}>
          <img src=${galleryProject.imageUrl} alt=${galleryProject.text}>
          <p>${galleryProject.title}</p>
        </div>
      `
    )
    .join("");

  if (token === false) {
    gallery.innerHTML = galleryHTML;
    buttonProjet.classList.add("btn-modifier-none");
  } else if (token === true) {
    gallery.innerHTML = galleryHTML;
  }
}
filterProjects("all");

// Permet de relancer la fonction au click et d'afficher les elements filtrés
sortingBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    category = e.target.id;
    console.log(e.target.id);
    filterProjects(category);
  });
});
