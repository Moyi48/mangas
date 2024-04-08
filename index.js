const mangas = [
    { id: 1, titulo: "Naruto", precio: 10 },
    { id: 2, titulo: "One Piece", precio: 12 },
    { id: 3, titulo: "Attack on Titan", precio: 15 },
    { id: 4, titulo: "Death Note", precio: 8 },
    { id: 5, titulo: "Dragon Ball", precio: 10 }
];

const mangasListContainer = document.getElementById("mangas-list");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalContainer = document.getElementById("cart-total");

// Función para cargar el carrito desde el almacenamiento local
function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        mostrarCarrito();
    }
}

// Función para guardar el carrito en el almacenamiento local
function guardarCarritoEnLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Arreglo para almacenar los mangas seleccionados en el carrito
let carrito = [];

// Función para mostrar los mangas en el DOM
function mostrarMangas() {
    mangasListContainer.innerHTML = "";
    mangas.forEach(manga => {
        const mangaDiv = document.createElement("div");
        mangaDiv.innerHTML = `
            <h3>${manga.titulo}</h3>
            <p>Precio: $${manga.precio}</p>
            <button onclick="agregarAlCarrito(${manga.id})">Agregar al Carrito</button>
        `;
        mangasListContainer.appendChild(mangaDiv);
    });
}

// Función para agregar un manga al carrito
function agregarAlCarrito(mangaId) {
    const manga = mangas.find(manga => manga.id === mangaId);
    if (manga) {
        carrito.push(manga);
        mostrarCarrito();
        guardarCarritoEnLocalStorage();
    }
}

// Función para sacar un manga del carrito
function sacarDelCarrito(mangaId) {
    carrito = carrito.filter(manga => manga.id !== mangaId);
    mostrarCarrito();
    guardarCarritoEnLocalStorage();
}

// Función para mostrar el carrito en el DOM
function mostrarCarrito() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    carrito.forEach(manga => {
        const listItem = document.createElement("li");
        listItem.textContent = `${manga.titulo} - $${manga.precio}`;

        // Botón para sacar el manga del carrito
        const removeButton = document.createElement("button");
        removeButton.textContent = "Quitar";
        removeButton.addEventListener("click", () => sacarDelCarrito(manga.id));

        listItem.appendChild(removeButton);

        cartItemsContainer.appendChild(listItem);
        total += manga.precio;
    });
    cartTotalContainer.textContent = total.toFixed(2);
}

// Cargar el carrito desde el almacenamiento local al cargar la página
cargarCarritoDesdeLocalStorage();

// Mostrar los mangas al cargar la página
mostrarMangas();