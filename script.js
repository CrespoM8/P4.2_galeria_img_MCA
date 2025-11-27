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