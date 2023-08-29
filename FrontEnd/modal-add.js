const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const returnArrow = document.getElementById("return-arrow");
const formSentData = document.querySelector(".form");
const titleArea = document.getElementById("title");
const category = document.getElementById("categorie");

inputFile.addEventListener("change", uploadImage);

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

formSentData.addEventListener("submit", async (e) => {
  e.preventDefault();
  const enteredImage = inputFile.value;
  const enteredTitle = titleArea.value;
  const enteredId = category.value;
  console.log(enteredId);
  const worksData = {
    id: "",
    title: enteredTitle,
    imageUrl: enteredImage,
    categoryId: enteredId,
    userId: 1,
  };

  try {
    const response = await fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`, // Include the token in the headers
      },
      body: JSON.stringify(worksData),
    });

    if (response.ok) {
      //Auth réussi
      alert("Envoie des données réussi !");
    } else {
      // Auth Echoué
      alert("Envoie échoué");
    }
  } catch (error) {
    console.error("Erreur lors de l'envoie des données :", error);
  }
});
