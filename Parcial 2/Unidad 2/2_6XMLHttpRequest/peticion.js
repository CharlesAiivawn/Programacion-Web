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
function requestFetch(){
fetch('https://api.chucknorris.io/jokes/random')
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
};

async function requestFetchAsync(){
respuesta = await fetch ('https://api.chucknorris.io/jokes/random');
datojson = await respuesta.json();
console.log (datojson);
}
//Eventos
document.getElementById("btn").addEventListener("click", request);
document.getElementById("btn2").addEventListener("click", requestFetch);
document.getElementById("btn3").addEventListener("click", requestFetchAsync);