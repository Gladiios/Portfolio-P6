const loginEmail = "sophie.bluel@test.tld";
const loginPassword = "S0phie";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  const AuthentificationData = {
    email: enteredEmail,
    password: enteredPassword,
  };

  try {
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(AuthentificationData),
    });

    if (response.ok) {
      //Auth réussi
      alert("Authentification réussi !");
      window.location.href = "http://127.0.0.1:5500/FrontEnd/index.html";
    } else {
      // Auth Echoué
      alert("Email ou mot de passe incorrect");
    }
  } catch (error) {
    console.error("Erreur lors de l'authentification :", error);
  }
});
