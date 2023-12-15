const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// ========== Task 1 ==========

// colors.forEach((color) => {
//   const colorBox = document.createElement("div");
//   colorBox.classList.add("color-box");
//   console.log(colorBox);
//   colorBox.style.backgroundColor = color;
//   document.body.append(colorBox);
// });

// ========== Task 2 ==========

function renderColorBox() {
  colors.forEach((color) => {
    let index = 1;
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    // console.log(colorBox);
    colorBox.style.backgroundColor = color;
    colorBox.textContent = index++;
    document.body.append(colorBox);
  });
}

colors.forEach(renderColorBox);

// colors.forEach((color) => {
//   renderColorBox(color);
// });
