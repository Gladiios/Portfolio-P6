const gallery = document.querySelector(".gallery");
const sortingBtn = document.querySelectorAll(".sorting-btn");

let project = [
  {
    image: "./assets/images/abajour-tahina.png",
    text: "Abajour Tahina",
    id: "object",
  },
  {
    image: "./assets/images/appartement-paris-v.png",
    text: "Appartement Paris V",
    id: "apartment",
  },
  {
    image: "./assets/images/appartement-paris-x.png",
    text: "Appartement Paris X",
    id: "apartment",
  },
  {
    image: "./assets/images/appartement-paris-xviii.png",
    text: "Appartement Paris XVIII",
    id: "apartment",
  },
  {
    image: "./assets/images/bar-lullaby-paris.png",
    text: "Bar Lullaby Paris",
    id: "hotel",
  },
  {
    image: "./assets/images/hotel-first-arte-new-delhi.png",
    text: "Hotel First Arte New-Delhi",
    id: "hotel",
  },
  {
    image: "./assets/images/la-balisiere.png",
    text: "La Balisiere",
    id: "hotel",
  },
  {
    image: "./assets/images/le-coteau-cassis.png",
    text: "Le Coteau Cassis",
    id: "hotel",
  },
  {
    image: "./assets/images/restaurant-sushisen-londres.png",
    text: "Restaurant Sushisen Londres",
    id: "hotel",
  },
  {
    image: "./assets/images/structures-thermopolis.png",
    text: "Structure Thermopolis",
    id: "object",
  },
  {
    image: "./assets/images/villa-ferneze.png",
    text: "Villa Ferneze",
    id: "apartment",
  },
];

// Convertit le tableau en fonction de l'id
let sortMethod = "all";

let filteredProjectsHotel = project.filter((item) => item.id === "hotel");

let filteredProjectsApartment = project.filter(
  (item) => item.id === "apartment"
);

let filteredProjectsObject = project.filter((item) => item.id === "object");

//Function d'affichage
function projectDisplay() {
  let filteredProjects = project;

  if (sortMethod === "object") {
    filteredProjects = filteredProjectsObject;
  } else if (sortMethod === "apartment") {
    filteredProjects = filteredProjectsApartment;
  } else if (sortMethod === "hotel") {
    filteredProjects = filteredProjectsHotel;
  }

  gallery.innerHTML = filteredProjects
    .map(
      (galleryProject) =>
        `
          <div class="cardProject">
            <id=${galleryProject.id}>
            <img src=${galleryProject.image} alt=${galleryProject.text}>
            <p>${galleryProject.text}</p>
          </div>
        `
    )
    .join("");
}

projectDisplay();

// Permet de relancer la fonction au click et d'afficher les elements filtrés
sortingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    console.log(e.target.id);
    projectDisplay();
  });
});
