let ESTACIONAMIENTO_DATA = []; // Esta variable ahora es global y accesible en todo el archivo

cargarEstadoEstacionamiento();

async function cargarEstadoEstacionamiento() {
    try {
      const response = await axios.get('http://localhost:3000/api/estacionamientos');
      const data = response.data;
      ESTACIONAMIENTO_DATA = data; 
      pintarParking(); 
    } catch (error) {
      console.error('Error al cargar los datos de los parkings:', error);
    }
  }
  

  function pintarParking() {
    ESTACIONAMIENTO_DATA.forEach(espacio => {
        let idEspacio = 'p' + espacio.numero;
        let elementoEspacio = document.getElementById(idEspacio);

        if (elementoEspacio) {
            elementoEspacio.style.backgroundColor = espacio.disponible ? 'green' : 'red';
        }
    });
}

function generarMatriculaEspana() {
    const numeros = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const letrasExcluidas = ['A', 'E', 'I', 'O', 'U', 'Ñ'];
    let letras = '';
    while (letras.length < 3) {
        let letraAleatoria = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
        if (!letrasExcluidas.includes(letraAleatoria)) {
            letras += letraAleatoria;
        }
    }
    return numeros + ' ' + letras;
}


async function entradacoche() {
  
    { 
      const matricula = generarMatriculaEspana();
      console.log(matricula);
    }
  }