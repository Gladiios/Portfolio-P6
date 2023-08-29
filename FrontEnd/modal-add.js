const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const returnArrow = document.getElementById("return-arrow");

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
