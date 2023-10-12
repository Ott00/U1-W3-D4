//creo il tabellone della tombola
const main = document.getElementsByTagName("main");
const board = document.getElementById("board");
const cellContainer = document.createElement("div");
cellContainer.classList.add("cell-container");
board.appendChild(cellContainer);

//creo le celle del tabellone che contengono i numeri
for (let i = 0; i < 76; i++) {
  const cell = document.createElement("div");
  cell.innerHTML = `<h3>${i + 1}</h3>`;
  cell.classList.add("cell");
  cellContainer.appendChild(cell);
}

//creo il bottone per generare numeri e lo innesto nella pagina
const generateNumberBtn = document.createElement("button");
generateNumberBtn.classList.add("button");
generateNumberBtn.innerText = "Genera Numero";
board.appendChild(generateNumberBtn);

//array contenente tutte le estrazioni
const randomNumberHistory = [];

const generateNumber = function () {
  const n = Math.floor(Math.random() * 76 + 1);
  console.log("Numero Random", n);
  return n;
};

//NON FUNZIONANTE DA SISTEMARE (PARTE EXTRA DEL COMPITO)

// const checkRandomNumber = function (number) {
//   if (randomNumberHistory.length === 0) {
//     randomNumberHistory.push(number);
//   } else {
//     for (let i = 0; i < randomNumberHistory.length; i++) {
//       console.log("sono nel for del controllo numero");

//       if (randomNumberHistory[i] === number) {
//         console.log("Numero già utilizzato, rigenero un nuovo numero");
//         const newNumber = generateNumber();
//         checkRandomNumber(newNumber);
//       } else {
//         console.log("Numero nuovo");
//         console.log(randomNumberHistory);
//         colorCell();
//         // randomNumberHistory.push(number);
//       }
//     }
//   }
// };

const colorCell = function () {
  const h3Collection = document.getElementsByTagName("h3");
  const arrNumberH3 = Array.from(h3Collection);
  //console.log(arrNumberH3);

  for (let i = 0; i < arrNumberH3.length; i++) {
    //estraggo il contenuto di h3
    const h3Content = arrNumberH3[i].innerText;

    //comparo il contenuto di h3 con il numero random e se sono uguali
    //gli assegno la classe che colora la cella
    if (parseInt(h3Content) === randomNumber) {
      const h3 = arrNumberH3[i];
      h3.parentNode.classList.add("highlighted-cell");
    }
  }
};

//genero un numero al click del pulsante
generateNumberBtn.onclick = function () {
  //genero un numero
  randomNumber = generateNumber();

  //EXTRA NON FUNZIONANTE controllo se il numero generato è già stato precedentemente generato
  //checkRandomNumber(randomNumber);

  colorCell();
};
