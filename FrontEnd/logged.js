const login = document.getElementById("login");
const logout = document.getElementById("logout");

let token = false;

if (window.localStorage.getItem("token")) {
  token = true;
  login.classList.add("btn-modifier-none");
} else {
  token = false;
  logout.classList.add("btn-modifier-none");
}

logout.addEventListener("click", () => {
  window.localStorage.removeItem("token");
});
