const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

console.log(modalTriggers);

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", () => {
    console.log("click", trigger);
  })
);
