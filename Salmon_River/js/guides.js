init();
    
    function init() {
        console.log("Iniciando el INIT");
        /* genera_tabla(); */
        loadJSON(function (response) {
            // Parse JSON string into object
            var actual_JSON = JSON.parse(response);
            console.log({ actual_JSON });
            const objetoGuides = actual_JSON['guides'];
            console.log("Objeto Guides:", objetoGuides);
            for (let i = 0; i < objetoGuides.length; i++) {
                console.log(objetoGuides[i]);
                document.getElementById('cont1').innerHTML = Object.values(objetoGuides[i]);

            }
            // Obtener la referencia del elemento body
            var body = document.getElementsByTagName("body")[0];
            // Crea un elemento <table> y un elemento <tbody>
            var tabla = document.createElement("table");
            var tblBody = document.createElement("tbody");
            for (var i = 0; i < objetoGuides.length; i++) {
                // Crea las hileras de la tabla
                var hilera = document.createElement("tr");
                for (var j = 0; j < 1; j++) {
                    // Crea un elemento <td> y un nodo de texto, haz que el nodo de
                    // texto sea el contenido de <td>, ubica el elemento <td> al final
                    // de la hilera de la tabla
                    var celda = document.createElement("td");
                    var name = document.createTextNode("name:" + objetoGuides[i].name +" ");
                    var photo = document.createTextNode("photo:" + objetoGuides[i].photo +" ");
                    var email = document.createTextNode("email:" + objetoGuides[i].email +" ");
                    var certificationLevel = document.createTextNode("certificationLevel" + objetoGuides[i].certificationLevel +" ");
                    var yearsofExperience = document.createTextNode("yearsofExperience: " + objetoGuides[i].yearsofExperience +" ");
                    var events = document.createTextNode("events: " + Object.values(objetoGuides[i].events));
                    celda.appendChild(name);
                    celda.appendChild(photo);
                    celda.appendChild(email);
                    celda.appendChild(certificationLevel);
                    celda.appendChild(yearsofExperience);
                    celda.appendChild(events);
                    hilera.appendChild(celda);
                }
                // agrega la hilera al final de la tabla (al final del elemento tblbody)
                tblBody.appendChild(hilera);
            }
            // posiciona el <tbody> debajo del elemento <table>
            tabla.appendChild(tblBody);
            // appends <table> into <body>
            body.appendChild(tabla);
            // modifica el atributo "border" de la tabla y lo fija a "2";
            tabla.setAttribute("border", "2");
        });
    }

    function loadJSON(callback) {
        /* debugger; */
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        /* xobj.open('GET', 'personas.json', true); */
        xobj.open('GET', 'json/guides.json', true);
        // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState === 4 && xobj.status === 200) {
                // Required use of an anonymous callback 
                // as .open() will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }