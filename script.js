


let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
// reconoces una accion porque tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
typewriter
  .pauseFor(2500) // milisegundos 2.5 segundos
  .typeString('Irazu Serrano')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora FRONTEND JR')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});
// reconoces una accion porque tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
typewriterFrase
  .pauseFor(2500) // milisegundos 2.5 segundos
  .typeString('"La vida no se mide por los logros, sino por los momentos que nos hacen vivir."')
  .pauseFor(300)
  .deleteAll()
  .typeString('Dalai Lama IX')
  .pauseFor(1000)
  .start();

/* 

let audioElement; // Variable para almacenar el objeto Audio

const mainElement = document.querySelector('main'); // Seleccionar la etiqueta <main>

mainElement.addEventListener('click', function () {
  if (!audioElement) {
    audioElement = new Audio('assets/music/man.mp3');
    audioElement.volume = 0.1;
  }
  audioElement.play();
});

const pauseButton = document.getElementById('pauseButton');

pauseButton.addEventListener('click', function () {
  if (audioElement.paused) {
    audioElement.play();
    pauseButton.textContent = "Pausar";
  } else {
    audioElement.pause();
    pauseButton.textContent = "Reanudar";
  }
});
 */

async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar:', err);
  }
}