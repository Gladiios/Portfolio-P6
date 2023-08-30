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
       <div class = "modal-gallery-content" data-id="${modalContent.id}">
        <div class="image-container">
          <img src=${modalContent.imageUrl} alt=${modalContent.text}>
          <i class="fa-solid fa-trash-can"></i>
        </div>
          <p class="edit">éditer</p>
       </div>
       `
    )
    .join("");
  const deleteTrashCans = document.querySelectorAll(".fa-trash-can");

  deleteTrashCans.forEach((trashCan) => {
    trashCan.addEventListener("click", (e) => {
      //permet de recuperer le parent le plus proche
      const modalGalleryContent = e.target.closest(".modal-gallery-content");
      //recupere l'id correspondant a la trashcan
      const id = modalGalleryContent.getAttribute("data-id");
      try {
        const deleteWork = fetch("http://localhost:5678/api/works/" + id, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });
        if (deleteWork) {
          alert("Cet élément va être supprimé.");
        }
      } catch (error) {
        console.error("Erreur lors de l'envoi des données :", error);
      }
    });
  });
}
openModal();
