const grid = document.querySelector(".grid");

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

const revealcarta = ({ target }) => {
  target.parentNode.classList.add("reveal-carta");
};

const createcarta = (personagem) => {
  const carta = createElement("div", "carta");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../Imagens/${personagem}.jpeg')`;

  carta.appendChild(front);
  carta.appendChild(back);

  carta.addEventListener("click", revealcarta);

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
LoadGame();
