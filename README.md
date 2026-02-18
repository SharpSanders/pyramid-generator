# Pyramid Generator

An interactive ASCII pyramid generator built with **HTML, CSS, and vanilla JavaScript**.  
Users can customize the character, number of rows, and orientation (standard or inverted) to dynamically generate centered ASCII art.

## Live Demo
https://sharpsanders.github.io/pyramid-generator/

<img src="./img/Screenshot-pyramid-generator.png" alt="Pyramid Generator Screenshot">

---

## Overview

This project focuses on string manipulation, loop logic, and dynamic DOM updates.  
It renders a properly centered ASCII pyramid inside a `<pre>` block to preserve spacing and formatting.

Users can configure:

- **Character** (single ASCII character)
- **Rows** (1–30)
- **Inverted mode** (reverses pyramid order)

The interface is styled as a centered card with a gradient background and responsive layout.

---

## Example Output

Character: `!`  
Rows: `5`

!
!!!
!!!!!
!!!!!!!
!!!!!!!!!


If **Inverted mode** is enabled, the row order reverses.

---

## Features

- Generates centered ASCII pyramids using any single character
- Accepts row counts between **1–30**
- Optional inverted orientation
- Default preview on page load
- Responsive UI layout
- Accurate formatting using `<pre>` and `white-space: pre`

---

## Technical Highlights

- Pure JavaScript algorithm for dynamic string construction
- Uses `String.prototype.repeat()` for spacing and character distribution
- Controlled input validation (single-character enforcement)
- Defensive handling for invalid numeric input
- Event-driven form submission
- Clean separation of layout (HTML), styling (CSS), and logic (JavaScript)

---

## How It Works

### Row Construction

```js
function padRow(rowNumber, rowCount, character) {
  const spaces = rowCount - rowNumber;
  const chars = 2 * rowNumber - 1;

  return " ".repeat(spaces) + character.repeat(chars) + " ".repeat(spaces);
}
Calculates symmetric spacing

Centers each row

Scales character count correctly per row

Pyramid Generation
function generatePyramid(character, count, inverted = false) {
  const rows = [];

  for (let i = 1; i <= count; i++) {
    const row = padRow(i, count, character);
    inverted ? rows.unshift(row) : rows.push(row);
  }

  return rows.join("\n");
}
Iterates from 1 → row count

Uses conditional insertion for inverted mode

Joins rows using newline characters for <pre> rendering

Tech Stack
HTML5

CSS3 (gradient background, card layout, responsive styling)

JavaScript (ES6)

No frameworks or external libraries.

Project Structure
pyramid-generator/
  index.html
  styles.css
  script.js
  img/
    Screenshot-pyramid-generator.png
What This Demonstrates
Loop-based pattern generation

String manipulation and spacing logic

DOM updates from user input

Controlled form handling

Clean UI structuring for small interactive tools

Future Enhancements
Live preview while typing

Additional pyramid styles (left-aligned, hollow, solid block)

Export to text file

Theme toggle (light/dark)

Animated row-by-row drawing effect

Author
Trevyn Sanders
Better Endeavors LLC