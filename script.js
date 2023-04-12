let mobileNav = document.querySelector('.mobile-nav');
let toggleButton = document.querySelector('.toggle-button');
let backdrop = document.querySelector('.backdrop');
let navDiscs = document.querySelectorAll('.nav-disc');

function getOptimalFontColor(rgb) {
  // Extract the red, green, and blue values from the RGB string
  let r = parseInt(rgb.slice(4, 7));
  let g = parseInt(rgb.slice(9, 12));
  let b = parseInt(rgb.slice(14, 17));

  // Calculate the relative luminance of the background color
  let luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Choose the font color based on the luminance
  if (luminance > 0.5) {
    return '#000000'; // black
  } else {
    return '#FFFFFF'; // white
  }
}
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

navDiscs.forEach((d) => {
  d.addEventListener('mouseover', () => {
    let randomColor = getRandomColor();
    let fontColor = getOptimalFontColor(randomColor);
    d.style.backgroundColor = randomColor;
    d.style.color = fontColor;
  });
});
toggleButton.addEventListener('click', function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  closeModal();
});

function closeModal() {
  backdrop.classList.remove('open');
}
