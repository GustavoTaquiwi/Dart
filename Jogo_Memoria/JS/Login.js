const input = document.querySelector(".Login_Nome");
const Button = document.querySelector(".Button");
const form = document.querySelector(".Login");

const validacaoinput = ({ target }) => {
  console.log(event.target.value);

  if (target.value.length > 2) {
    Button.removeAttribute("disabled");
    return;
  }
  Button.setAttribute("disabled", "");
};

const lendosubmit = (event) => {
  event.preventDefault();
  localStorage.setItem("Player", input.value);

  window.location.href = "http://127.0.0.1:5500/Jogo_Memoria/Paginas/Game.html";
};

input.addEventListener("input", validacaoinput);
form.addEventListener("submit", lendosubmit);
