// script.js

// Datos de las imágenes
const galleryData = [
  { base: "arbol-navidad", caption: "Árbol de Navidad adornado con luces y regalos" },
  { base: "botellas", caption: "Colección de botellas de vidrio en un estante" },
  { base: "candados", caption: "Candados colgando de una cadena" },
  { base: "edificio", caption: "Edificio histórico de piedra con balcones" },
  { base: "mario-kart", caption: "Consola Nintendo Switch con el juego Mario Kart en pantalla" },
  { base: "perritos", caption: "Tres perritos durmiendo juntos sobre una manta blanca" },
  { base: "plato", caption: "Plato con comida y utensilios sobre fondo rosa" },
  { base: "rolex", caption: "Reloj Rolex de oro sobre su caja original" },
  { base: "vaso", caption: "Vaso de whisky con hielo sobre fondo oscuro" }
];

// Seleccionamos el contenedor de la galería
const gallery = document.getElementById('gallery');
if (!gallery) {
  console.error('No se encontró el elemento con id="gallery" en el HTML.');
}

// Función para crear una tarjeta de imagen
function createImageCard(img) {
  const figure = document.createElement('figure');
  figure.className = 'gallery-item';

  // Crear <picture>
  const picture = document.createElement('picture');

}
  // Fuentes para diferentes breakpoints y densidades
  const sourcesConfig = [
    { size: 'xlarge', media: '(min-width: 1200px)' },
    { size: 'large', media: '(min-width: 900px)' },
    { size: 'medium', media: '(min-width: 600px)' },
    { size: 'small' } // fallback
  ];

  sourcesConfig.forEach(cfg => {
    const source = document.createElement('source');
    source.srcset = `output/resized/${img.base}-${cfg.size}-1x.jpg 1x, output/resized/${img.base}-${cfg.size}-2x.jpg 2x`;
    source.type = 'image/jpeg';
    if (cfg.media) source.media = cfg.media;
    picture.appendChild(source);
  });

  // Imagen fallback
  const imgEl = document.createElement('img');
  imgEl.src = `output/resized/${img.base}-small-1x.jpg`;
  imgEl.alt = img.caption;
  imgEl.loading = 'lazy'; // mejora rendimiento
  picture.appendChild(imgEl);

  // Pie de foto
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = img.caption;

  figure.appendChild(picture);
  figure.appendChild(figcaption);

  // Evento de clic para abrir el modal
  figure.addEventListener('click', () => openModal(img));

  return figure;

// Crear todas las tarjetas
galleryData.forEach(img => {
  gallery.appendChild(createImageCard(img));
});

// === Modal ===
const modal = document.createElement('div');
modal.id = 'modal';
modal.innerHTML = `
  <span class="modal-close">&times;</span>
  <img class="modal-img" src="" alt="">
  <div class="modal-caption"></div>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-img');
const modalCaption = modal.querySelector('.modal-caption');
const closeModalBtn = modal.querySelector('.modal-close');

function openModal(img) {
  // Usamos la versión de mayor resolución disponible
  modalImg.src = `output/resized/${img.base}-xlarge-2x.jpg`;
  modalImg.alt = img.caption;
  modalCaption.textContent = img.caption;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Cerrar con tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    closeModal();
  }
});