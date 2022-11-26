let encabezados = "";

window.onclick = function() {
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("Quieres ser mi morrita");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}

