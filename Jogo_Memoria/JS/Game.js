const grid = document.querySelector(".grid");
const timer = document.querySelector(".Timer");
const SpanPlayer = document.querySelector(".Player");
const btn = document.querySelector(".restart");

const cartas = [
  "ima1",
  "ima2",
  "ima3",
  "ima4",
  "ima5",
  "ima6",
  "ima7",
  "ima8",
  "ima9",
  "ima10",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};
let primeracarta = "";
let segundacarta = "";

const checkendgame = () => {
  const disablecards = document.querySelectorAll(".disable-card");

  if (disablecards.length === 20) {
    clearInterval(timerLoop);
    alert(
      `Parabéns, ${SpanPlayer.innerHTML}: Seu tempo foi: ${timer.innerHTML}`
    );
  }
};

const cheackcartas = () => {
  const primerainformacao = primeracarta.getAttribute("InformacaoCarta");
  const segundainformacao = segundacarta.getAttribute("InformacaoCarta");

  if (primerainformacao === segundainformacao) {
    primeracarta.firstChild.classList.add("disable-card");
    segundacarta.firstChild.classList.add("disable-card");

    primeracarta = "";
    segundacarta = "";

    checkendgame();
  } else {
    setTimeout(() => {
      primeracarta.classList.remove("reveal-carta");
      segundacarta.classList.remove("reveal-carta");
      primeracarta = "";
      segundacarta = "";
    }, 500);
  }
};

const revealcarta = ({ target }) => {
  if (target.parentNode.className.includes("reveal-carta")) {
    return;
  }

  if (primeracarta === "") {
    target.parentNode.classList.add("reveal-carta");
    primeracarta = target.parentNode;
  } else if (segundacarta === "") {
    target.parentNode.classList.add("reveal-carta");
    segundacarta = target.parentNode;

    cheackcartas();
  }
};

const createcarta = (personagem) => {
  const carta = createElement("div", "carta");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../Imagens/${personagem}.jpeg')`;

  carta.appendChild(front);
  carta.appendChild(back);

  carta.addEventListener("click", revealcarta);

  carta.setAttribute("InformacaoCarta", personagem);

  return carta;
};

const LoadGame = () => {
  const duplicar = [...cartas, ...cartas];

  const baralhar = duplicar.sort(() => Math.random() - 0.5);

  baralhar.forEach((personagem) => {
    const carta = createcarta(personagem);
    grid.appendChild(carta);
  });
};

let timerLoop;

const starttimer = () => {
  this.loop = setInterval(() => {
    const tempoatual = +timer.innerHTML;
    timer.innerHTML = tempoatual + 1;
  }, 1000);
};

const resetGame = () => {
  window.location.reload();
};

window.onload = () => {
  SpanPlayer.innerHTML = localStorage.getItem("Player");
  starttimer();
  LoadGame();
};

btn.addEventListener("click", resetGame);
