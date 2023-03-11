//Ejercicio 1:

// Obtener los botones y el cuerpo de la página
const blueButton = document.createElement('button');
blueButton.textContent = 'Azul';
const greenButton = document.createElement('button');
greenButton.textContent = 'Verde';blueButton
const purpleButton = document.createElement('button');
purpleButton.textContent = 'Morado';
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
const body = document.body;

// Añadir los botones al DOM
document.body.appendChild(blueButton);
document.body.appendChild(greenButton);
document.body.appendChild(purpleButton);
document.body.appendChild(resetButton);

// Añadir event listeners a los botones
blueButton.addEventListener('click', () => {
  body.style.backgroundColor = 'rgb(64, 163, 255)';
  descripcion.style.backgroundColor = 'lightblue';
  body.style.color = 'rgb(13, 133, 246)';
});

greenButton.addEventListener('click', () => {
  body.style.backgroundColor = 'green';
  descripcion.style.backgroundColor = 'lightgreen';
  body.style.color = 'lightgreen';
});

purpleButton.addEventListener('click', () => {
  body.style.backgroundColor = 'purple';
  descripcion.style.backgroundColor = 'pink';
  body.style.color = 'pink';
});

resetButton.addEventListener('click', () => {
  body.style.backgroundColor = 'rgb(16, 16, 16)';
  body.style.color = 'white';
});


//este ejercicio 1, sale los botones al final de la página y no al inicio



//Ejercicio 2:





//Ejercicio 3:



