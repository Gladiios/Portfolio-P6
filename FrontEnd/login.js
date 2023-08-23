// email: sophie.bluel@test.tld
// password: S0phie
const loginEmail = "sophie.bluel@test.tld";
const loginPassword = "S0phie";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  if ((enteredEmail === loginEmail) & (enteredPassword === loginPassword)) {
    alert("Authentification réussi !");
  } else if (
    (enteredEmail !== loginEmail) &
    (enteredPassword !== loginPassword)
  ) {
    alert("Email ou mot de passe incorrect");
  }
});
