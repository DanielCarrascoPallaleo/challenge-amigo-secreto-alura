// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

// Agregar un nuevo nombre a la lista de amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); // Elimina espacios en blanco alrededor

    // Validación: Verifica si el campo está vacío
    if (!nombre) {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Validación: Verifica si el nombre ya existe en la lista
    if (nombres.includes(nombre)) {
        alert("Este nombre ya está en la lista. Por favor, ingresa un nombre diferente.");
        return;
    }

    // Agregar el nombre a la lista
    nombres.push(nombre);

    // Actualiza la lista en el DOM
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    listaAmigos.appendChild(nuevoAmigo);

    // Limpia el campo de entrada
    inputAmigo.value = "";
}

function sortearAmigo() {
    // Validar que la lista de nombres no esté vacía
    if (nombres.length === 0) {
        document.getElementById('resultado').innerHTML = "La lista de amigos está vacía. Añade amigos antes de sortear.";
        return;
    }

    // Seleccionar un elemento aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const premiado = nombres[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: <strong>${premiado}</strong>`;
}
