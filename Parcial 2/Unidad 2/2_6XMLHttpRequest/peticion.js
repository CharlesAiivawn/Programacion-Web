function request() {
    let peticion = new XMLHttpRequest();
    peticion.onload = function() {
        const imagenUrl = peticion.responseURL;
        const contenedorRespuesta = document.getElementById("rp");
        contenedorRespuesta.innerHTML = '';
        const imgElement = document.createElement('img');
        imgElement.src = imagenUrl;
        contenedorRespuesta.appendChild(imgElement);
    }
    peticion.open("GET", "https://picsum.photos/200", true);
    peticion.send();
};

//Eventos
document.getElementById("btn").addEventListener("click", request);