const gallery = document.querySelector(".gallery");
const sortingBtns = document.querySelectorAll(".sorting-btn");

const FilterType = {
  HOTEL: "hotel",
  APARTMENT: "apartment",
  OBJECT: "object",
};

let projectImages = [
  {
    image: "./assets/images/abajour-tahina.png",
    text: "Abajour Tahina",
    type: FilterType.OBJECT,
  },
  {
    image: "./assets/images/appartement-paris-v.png",
    text: "Appartement Paris V",
    type: FilterType.APARTMENT,
  },
  {
    image: "./assets/images/appartement-paris-x.png",
    text: "Appartement Paris X",
    type: FilterType.APARTMENT,
  },
  {
    image: "./assets/images/appartement-paris-xviii.png",
    text: "Appartement Paris XVIII",
    type: FilterType.APARTMENT,
  },
  {
    image: "./assets/images/bar-lullaby-paris.png",
    text: "Bar Lullaby Paris",
    type: FilterType.HOTEL,
  },
  {
    image: "./assets/images/hotel-first-arte-new-delhi.png",
    text: "Hotel First Arte New-Delhi",
    type: FilterType.HOTEL,
  },
  {
    image: "./assets/images/la-balisiere.png",
    text: "La Balisiere",
    type: FilterType.HOTEL,
  },
  {
    image: "./assets/images/le-coteau-cassis.png",
    text: "Le Coteau Cassis",
    type: FilterType.HOTEL,
  },
  {
    image: "./assets/images/restaurant-sushisen-londres.png",
    text: "Restaurant Sushisen Londres",
    type: FilterType.HOTEL,
  },
  {
    image: "./assets/images/structures-thermopolis.png",
    text: "Structure Thermopolis",
    type: FilterType.OBJECT,
  },
  {
    image: "./assets/images/villa-ferneze.png",
    text: "Villa Ferneze",
    type: FilterType.APARTMENT,
  },
];

// Convertit le tableau en fonction de l'id
let filter = "all";

let hotelImages = projectImages.filter(
  (projectImage) => projectImage.type === "hotel"
);

let apartmentImages = projectImages.filter(
  (projectImage) => projectImage.type === "apartment"
);

let objectImages = projectImages.filter(
  (projectImage) => projectImage.type === "object"
);

//Function d'affichage
function filterProjects() {
  let filteredProjects = projectImages;

  if (filter === "object") {
    filteredProjects = objectImages;
  } else if (filter === "apartment") {
    filteredProjects = apartmentImages;
  } else if (filter === "hotel") {
    filteredProjects = hotelImages;
  }

  gallery.innerHTML = filteredProjects
    .map(
      (galleryProject) =>
        `
          <div class="cardProject">
            <id=${galleryProject.type}>
            <img src=${galleryProject.image} alt=${galleryProject.text}>
            <p>${galleryProject.text}</p>
          </div>
        `
    )
    .join("");
}

filterProjects();

// Permet de relancer la fonction au click et d'afficher les elements filtrés
sortingBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filter = e.target.id;
    console.log(e.target.id);
    filterProjects();
  });
});
