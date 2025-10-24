$(document).ready(function () {
        
    $('#fetch').on('click', function (event) {
        event.preventDefault();

        const formElement = document.getElementById('idform');
        const datosForm = new FormData(formElement);
        const iframe = document.getElementsByName('resultadoPOST')[0];

        iframe.contentDocument.body.innerHTML = "<pre>Enviando...</pre>";

        fetch("https://httpbin.org/post", {
            method: "POST",
            body: datosForm
        })
        .then(response => response.json())
        .then(data => {
            iframe.contentDocument.body.innerHTML = 
                "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
        })
        .catch(error => {
            console.error("Error:", error);
            iframe.contentDocument.body.innerHTML = "<pre>Error: " + error.message + "</pre>";
        });
    });

});

