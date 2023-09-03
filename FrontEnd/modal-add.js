const dropArea = document.getElementById("drop-area");
const imageView = document.getElementById("img-view");
const returnArrow = document.getElementById("return-arrow");
const formSendData = document.querySelector(".form");
const inputFile = document.getElementById("input-file");
const titleArea = document.getElementById("title");
const categoryModal = document.getElementById("categorie");
const validateDataButton = document.getElementById("validatedata");

// Update du le background-color du bouton valider
function updateButtonColor() {
  const selectedFile = inputFile.files[0];
  const enteredTitle = titleArea.value;

  if (selectedFile && enteredTitle) {
    validateDataButton.style.backgroundColor = "#1D6154";
  } else {
    validateDataButton.style.backgroundColor = "";
  }
}
// Event listener avec appel fonction updateButtonColor pour changer la couleur du bg
inputFile.addEventListener("change", updateButtonColor);
titleArea.addEventListener("input", updateButtonColor);

// Permet de faire un retour avec la flèche dans la modal
function returnModal() {
  modalAddWindow.classList.remove("active");
  modalContainer.classList.toggle("active");
}
returnArrow.addEventListener("click", returnModal);

function uploadImage() {
  // Affiche l'image upload
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = "";
}
inputFile.addEventListener("change", uploadImage);

// Formulaire d'envoi vers la db
formSendData.addEventListener("submit", async (e) => {
  e.preventDefault();
  const selectedFile = inputFile.files[0]; // Get the selected file
  const enteredTitle = titleArea.value;
  const enteredId = categoryModal.value;

  if (!selectedFile) {
    alert("Image manquante");
    return;
  }
  if (!enteredTitle) {
    alert("Titre manquant");
    return;
  }

  // Creer un objet avec formdata auquel on ajoute le contenu grâce a append
  const worksData = new FormData();
  worksData.append("title", enteredTitle);
  worksData.append("category", enteredId);
  worksData.append("image", selectedFile);

  try {
    const sendData = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: worksData, // Pass the FormData directly as the body
    });

    if (sendData.ok) {
      alert("Envoie des données réussi !");
      closeModalContainer();
      filterProjects("all");
      openModal();
    } else {
      alert("Envoie échoué");
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi des données :", error);
  }
});
