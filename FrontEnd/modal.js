const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalGallery = document.querySelector(".modal-gallery");

let modalImages = [];

function toggleModal() {
  modalContainer.classList.toggle("active");
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", toggleModal);
});

async function filterProjects() {
  await fetch("http://localhost:5678/api/works")
    .then((res) => res.json())
    .then((data) => (modalImages = data));

  modalGallery.innerHTML = modalImages
    .map(
      (modalContent) =>
        `
       <div class = "modal-gallery-content">
        <div class="image-container">
          <img src=${modalContent.imageUrl} alt=${modalContent.text}>
          <i class="fa-solid fa-trash-can"></i>
        </div>
          <p class="edit">éditer</p>
       </div>
       `
    )
    .join("");
}
filterProjects();
