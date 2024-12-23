// Seleccionar la pantalla y los botones
const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

// Añadir eventos a cada botón
botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const valorBoton = boton.textContent;

    // Acción del botón "C" (borrar todo)
    if (valorBoton === 'C') {
      pantalla.textContent = '0'; // Limpia la pantalla
      return;
    }

    // Acción del botón "←" (borrar un carácter)
    if (valorBoton === '←') {
      if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR') {
        pantalla.textContent = '0';
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    // Acción del botón "=" (calcular)
    if (valorBoton === '=') {
      try {
        pantalla.textContent = eval(pantalla.textContent.replace('×', '*').replace('−', '-'));
      } catch {
        pantalla.textContent = 'ERROR';
      }
      return;
    }

    // Agregar números y operadores a la pantalla
    if (pantalla.textContent === '0' || pantalla.textContent === 'ERROR') {
      pantalla.textContent = valorBoton;
    } else {
      pantalla.textContent += valorBoton;
    }
  });
});