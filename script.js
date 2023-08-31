// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  const filtrarStrings = strangeArray.filter((element) => typeof element === "string"); //Aquí se especifica la condición con la cual se va a filtrar, en éste caso solo va a mostrar todos los de tipo "string".
  const ordenarStrings = filtrarStrings.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })); //Con sort()Se ordenan los elementos alfabéticamente del array fliteredStrings. La función dentro de él indica que las minúsculas y las mayúsculas se ordenen de igual forma, sin importar su "peso".
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  showList(ordenarStrings);
});