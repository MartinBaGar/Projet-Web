const imageContainer = document.getElementById('image-container');
const blackScreen = document.getElementById('black-screen');

const apeImages = [
  'img/bonobo_icon.png', 'img/chimp_icon.png', 'img/orangutan_icon.png', 'img/gibbon_icon.png', 'img/homosapsap_icon.png', 'img/gorilla_icon.png',
];

const apePages = [
  'pages/bonobo.html', 'pages/chimp.html', 'pages/orangutan.html', 'pages/gibbon.html', 'pages/homosapsap.html', 'pages/gorilla.html',
];

function createImagePoints() {
  const angleIncrement = 360 / apeImages.length;
  let currentAngle = 0;

  for (let i = 0; i < apeImages.length; i++) {
    const imagePoint = document.createElement('div');
    imagePoint.classList.add('image-point');
    imagePoint.style.transform = `rotate(${currentAngle}deg) translateX(5vw)`;
    imagePoint.innerHTML = `<img src="${apeImages[i]}" alt="Ape Image" data-page="${apePages[i]}">`;
    imageContainer.appendChild(imagePoint);

    currentAngle += angleIncrement;

    imagePoint.addEventListener('click', () => redirectToPage(imagePoint));
  }
}

function redirectToPage(imagePoint) {
  const pageUrl = imagePoint.querySelector('img').getAttribute('data-page');
  window.location.href = pageUrl;
}

function stopRotation() {
  blackScreen.style.display = 'none';
}

window.onload = function () {
  createImagePoints();
  blackScreen.style.display = 'flex';
};
