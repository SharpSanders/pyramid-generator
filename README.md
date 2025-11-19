# Pyramid Generator

A simple JavaScript tool that generates an ASCII pyramid based on your chosen **character**, **number of rows**, and **orientation** (normal or inverted).  
Built to practice loops, string manipulation, DOM handling, and responsive UI layout.

---

## Demo

The UI includes:

- A stylish gradient background with a centered project card.
- Input fields for:
  - **Character** (1 character only)
  - **Rows** (1–30)
  - **Inverted** checkbox
- A **Generate Pyramid** button
- A `<pre>` code block that prints the ASCII pyramid using monospaced formatting.
- A **Back to Portfolio** link (relative path).

Example output for character `!` and 5 rows:

diff
Copy code
!
!!!
!!!!!
!!!!!!!
!!!!!!!!!

yaml
Copy code

If **Inverted pyramid** is checked, the order reverses.

---

## Tech Stack

- **HTML** – Form structure and layout
- **CSS** – Card styling, input styles, responsive design, gradient background
- **JavaScript** – Pyramid creation algorithm, event handling, dynamic rendering

---

## Features

- Generates a pyramid using any single ASCII character.
- Accepts row counts between **1 and 30**.
- Optional **inverted** mode (top-heavy pyramid).
- Auto-fills the initial preview using:
  - Character: `!`
  - Rows: `10`
- Clean, responsive interface.
- Uses a `<pre>` block with `white-space: pre` for accurate formatting.

---

## How It Works (JavaScript Overview)

### 1. Building a single row

```js
function padRow(rowNumber, rowCount, character) {
  const spaces = rowCount - rowNumber;
  const chars = 2 * rowNumber - 1;

  return " ".repeat(spaces) + character.repeat(chars) + " ".repeat(spaces);
}
Calculates left/right spacing.

Centers the pyramid row.

Creates the pyramid using the correct number of characters.

2. Generating the full pyramid
js
Copy code
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
Builds rows from 1 to the chosen count.

inverted decides whether rows are added to the end or beginning.

3. Form handling
Ensures the character input always uses only its FIRST character.

Validates rows; falls back to default if invalid.

Updates the <pre> output with the finalized pyramid.

Project Structure
text
Copy code
pyramid-generator/
├── index.html      # Form, layout, page structure
├── styles.css      # Gradient background, card UI, responsive styles
└── script.js       # Pyramid logic, form handling, dynamic output
What I Practiced
Using string.repeat() and " ".repeat() for layout.

Constructing ASCII art using loops.

Handling checkbox + text + number inputs.

Preventing default form submission.

Using a <pre> tag for monospace ASCII rendering.

Creating a clean component-style card UI.

Future Improvements
Add live preview as the user types.

Add multiple pyramid styles (left-aligned, hollow, full block).

Allow exporting the pyramid as a text file.

Add theme switching (light/dark).

Add animation that draws the pyramid row-by-row.

Author
Created by Trevyn Sanders.