const mangas = [
    { titulo: "Naruto", precio: 10 },
    { titulo: "One Piece", precio: 12 },
    { titulo: "Attack on Titan", precio: 15 },
    { titulo: "Death Note", precio: 8 },
    { titulo: "Dragon Ball", precio: 10 }
];

const mangasListContainer = document.getElementById("mangas-list");

// Función para mostrar la lista de mangas en el DOM
function mostrarMangas() {
    mangasListContainer.innerHTML = "";
    mangas.forEach(manga => {
        const mangaDiv = document.createElement("div");
        mangaDiv.classList.add("manga");
        mangaDiv.innerHTML = `
            <h3>${manga.titulo}</h3>
            <p>Precio: $${manga.precio}</p>
            <button onclick="comprarManga('${manga.titulo}', ${manga.precio})">Comprar</button>
        `;
        mangasListContainer.appendChild(mangaDiv);
    });
}

// Función para simular la compra de un manga
function comprarManga(titulo, precio) {
    const confirmacion = confirm(`¿Deseas comprar "${titulo}" por $${precio}?`);
    if (confirmacion) {
        alert(`¡"${titulo}" comprado con éxito!`);
    } else {
        alert("Compra cancelada.");
    }
}

// Mostrar la lista de mangas al cargar la página
mostrarMangas();