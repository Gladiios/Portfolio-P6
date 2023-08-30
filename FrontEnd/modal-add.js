const dropArea = document.getElementById("drop-area");
const imageView = document.getElementById("img-view");
const returnArrow = document.getElementById("return-arrow");
const formSendData = document.querySelector(".form");
const inputFile = document.getElementById("input-file");
const titleArea = document.getElementById("title");
const categoryModal = document.getElementById("categorie");

function returnModal() {
  modalAddWindow.classList.remove("active");
  modalContainer.classList.toggle("active");
}
returnArrow.addEventListener("click", returnModal);

function uploadImage() {
  // give file uploaded in input file
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageView.textContent = "";
}
inputFile.addEventListener("change", uploadImage);

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

  const worksData = new FormData(); // Use FormData to handle binary data
  worksData.append("title", enteredTitle);
  worksData.append("category", enteredId);
  worksData.append("image", selectedFile); // Append the selected file to the FormData

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
    } else {
      alert("Envoie échoué");
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi des données :", error);
  }
});
