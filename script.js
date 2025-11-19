const defaultCharacter = "!";
const defaultCount = 10;

function padRow(rowNumber, rowCount, character) {
  const spaces = rowCount - rowNumber;
  const chars = 2 * rowNumber - 1;

  return " ".repeat(spaces) + character.repeat(chars) + " ".repeat(spaces);
}

function generatePyramid(character, count, inverted = false) {
  const rows = [];

  for (let i = 1; i <= count; i++) {
    const row = padRow(i, count, character);

    if (inverted) {
      rows.unshift(row);
    } else {
      rows.push(row);
    }
  }

  return rows.join("\n");
}

const form = document.getElementById("pyramid-form");
const characterInput = document.getElementById("character-input");
const rowsInput = document.getElementById("rows-input");
const invertedInput = document.getElementById("inverted-input");
const output = document.getElementById("pyramid-output");

output.textContent = generatePyramid(defaultCharacter, defaultCount, false);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let character = characterInput.value || defaultCharacter;
  character = character[0]; 

  let count = parseInt(rowsInput.value, 10);
  if (Number.isNaN(count) || count < 1) {
    count = defaultCount;
  }

  const inverted = invertedInput.checked;

  const pyramid = generatePyramid(character, count, inverted);
  output.textContent = pyramid;
});
