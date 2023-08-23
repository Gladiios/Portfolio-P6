// email: sophie.bluel@test.tld
// password: S0phie

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);

// Recupère la valeur des champs email et mdp
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log(e.target.value);
  });
});
