
const APARCAMIENTO_DATA = [
    { planta: '1', numero: 1, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 2, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 3, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 4, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 5, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 6, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 7, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 8, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 9, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 10, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 11, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 12, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 13, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 14, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 15, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 16, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 17, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 18, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 19, disponible: true, precio_hora: 0.25 },
    { planta: '1', numero: 20, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 21, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 22, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 23, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 24, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 25, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 26, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 27, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 28, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 29, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 30, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 31, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 32, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 33, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 34, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 35, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 36, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 37, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 38, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 39, disponible: true, precio_hora: 0.25 },
    { planta: '2', numero: 40, disponible: true, precio_hora: 0.25 },
  



document.addEventListener("DOMContentLoaded", function() {
    function changeBoxColors() {
        var colorBoxes = document.querySelectorAll('.color-box');
        colorBoxes.forEach(function(box) {
            box.style.backgroundColor = Math.random() < 0.5 ? 'red' : 'green';
        });
    }

    setInterval(changeBoxColors, 2000);
});
