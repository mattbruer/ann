let mobileNav = document.querySelector('.mobile-nav');
let toggleButton = document.querySelector('.toggle-button');
let backdrop = document.querySelector('.backdrop');

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
