const logregBox = document.querySelector(".logreg-box");
const container = document.querySelector(".container");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconclose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
  logregBox.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  container.classList.add("active-popup");
});

iconclose.addEventListener("click", () => {
  container.classList.remove("active-popup");
});

iconclose.addEventListener("click", () => {
  container.classList.remove("active-popup");
});
