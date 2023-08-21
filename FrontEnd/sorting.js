const gallery = document.querySelector(".gallery");
const sortingBtn = document.querySelectorAll(".sorting-btn");

let project = [
  {
    image: "./assets/images/abajour-tahina.png",
    text: "Abajour Tahina",
  },
  {
    image: "./assets/images/appartement-paris-v.png",
    text: "Appartement Paris V",
  },
  {
    image: "./assets/images/appartement-paris-x.png",
    text: "Appartement Paris X",
  },
  {
    image: "./assets/images/appartement-paris-xviii.png",
    text: "Appartement Paris XVIII",
  },
  {
    image: "./assets/images/bar-lullaby-paris.png",
    text: "Bar Lullaby Paris",
  },
  {
    image: "./assets/images/hotel-first-arte-new-delhi.png",
    text: "Hotel First Arte New-Delhi",
  },
  {
    image: "./assets/images/la-balisiere.png",
    text: "La Balisiere",
  },
  {
    image: "./assets/images/le-coteau-cassis.png",
    text: "Le Coteau Cassis",
  },
  {
    image: "./assets/images/restaurant-sushisen-londres.png",
    text: "Restaurant Sushisen Londres",
  },
  {
    image: "./assets/images/structures-thermopolis.png",
    text: "Structure Thermopolis",
  },
  {
    image: "./assets/images/villa-ferneze.png",
    text: "Villa Ferneze",
  },
];
let sortMethod = "all";

function projectDisplay() {
  gallery.innerHTML = project
    .map(
      (galleryProject) =>
        `
  <div class="cardProject">
    <img src=${galleryProject.image} alt=${project.text}>
    <p>${galleryProject.text}</p>
  </div>
  `
    )
    .join("");
}
projectDisplay();

sortingBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    console.log(sortMethod);
  });
});
