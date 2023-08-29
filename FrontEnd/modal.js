const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalGallery = document.querySelector(".modal-gallery");
const modalAddBtn = document.getElementById("add-picture");
const modalAddWindow = document.querySelector(".modal-container-add-content");
const closeModal = document.querySelectorAll(".modal-close");
let modalImages = [];

function toggleModal() {
  modalContainer.classList.toggle("active");
}

function closeModalContainer() {
  modalAddWindow.classList.remove("active");
  modalContainer.classList.remove("active");
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", toggleModal);
});

closeModal.forEach((closeAction) => {
  closeAction.addEventListener("click", closeModalContainer);
});

modalAddBtn.addEventListener("click", () => {
  modalContainer.classList.toggle("active");
  modalAddWindow.classList.toggle("active");
});

async function openModal() {
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
openModal();
