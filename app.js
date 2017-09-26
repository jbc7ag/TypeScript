var req = new XMLHttpRequest();

//Escuchar para capturar la respuesta de la solicitud
req.onload = function (e) {
    var respuesta = JSON.parse(JSON.stringify(req.response));
    var leg = respuesta.routes[0].legs[0];
    var steps = respuesta.routes[0].legs[0].steps;

    //obtenemos la distancia y la duraccion
    var distancia = JSON.stringify(leg.distance.text);
    var duracion = JSON.stringify(leg.duration.text);

    //la mandamos al HTML
    document.getElementById("divInfo").innerHTML = "<h1>Ir de Wizeline a Casa</h1><br/>";
    document.getElementById("divInfo").innerHTML += "<b>Distancia: </b>" + distancia;
    document.getElementById("divInfo").innerHTML += "<br/><b>Duración: </b>" + duracion;

    //Pasos para llegar al destino
    document.getElementById("divPasos").innerHTML = "<h1><b>Pasos para llegar </h1><br/>";

    for (var i in steps) {
        document.getElementById("divPasos").innerHTML += "<b>Paso " + i + "<b/><br/>";
        document.getElementById("divPasos").innerHTML += steps[i].html_instructions;
    }
};

req.open("GET", "https://maps.googleapis.com/maps/api/directions/json?origin=20.6724372,-103.3710238&destination=20.6767831,-103.3777703&key=AIzaSyBAvGj8Asdi5OVQpxZAsk5TBOPzBB54WiQ");
req.responseType = "json";
req.send();
