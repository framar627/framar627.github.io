init();

function init() {
    console.log("Iniciando el INIT");
    /* genera_tabla(); */
    loadJSON(function (response) {
        // Parse JSON string into object
        var actual_JSON = JSON.parse(response);
        console.log({
            actual_JSON
        });
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
readTextFile("json/guides.json", function (text) {
    var data = JSON.parse(text);
    console.log('DATA:', data);

    fetch(dataSourceURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObj) {
            const guides = jsonObj['guides'];
            for (let i = 0; i < towns.length; i++) {
                if (['Adrian Lasorte', 'James S. Zervos', 'Randy Jones'].indexOf(guides[i].name) > -1) {
                    let town = document.createElement('section');

                    if (guides[i].name == "Adrian Lasorte") {
                        guide.style.order = "1";
                    } else if (guides[i].name == "James S.Zervos") {
                        guide.style.order = "2";
                    } else if (guides[i].name == "Randy Jones") {
                        guide.style.order = "3";
                    }

                    let info = document.createElement('div');
                    let name = document.createElement('h2');
                    let email = document.createElement('h3');
                    let certificationLevel = document.createElement('div');
                    let yearsofExperience = document.createElement('div');
                    let image = document.createElement('img');
                    let biograpghy = document.createElement('div');

                    image.setAttribute('src', 'images/' + guides[i].photo);
                    image.setAttribute('alt', 'Image of ' + guides[i].name);
                    image.setAttribute('title', guides[i].name);
                    image.classList.add('image');
                    name.textContent = guides[i].name;
                    name.classList.add('guide');
                    email.textContent = guides[i].email;
                    email.classList.add('email');
                    yearsofExperience.textContent = 'Years of Experience: ' + guides[i].yearsofExperience;
                    yearsofExperience.classList.add('Years');
                    certificationLevel.textContent = 'Certification Level: ' + guides[i].certificationLevel;
                    certificationLevel.classList.add('certification');
                    biograpghy.textContent = 'Biography: ' + guides[i].biograpghy;
                    biograpghy.classList.add('Biography of');
                    info.classList.add('info');
                    info.appendChild(name);
                    info.appendChild(email);
                    info.appendChild(yearsofExperience);
                    info.appendChild(certificationLevel);
                    info.appendChild(biograpghy);
                    info.appendChild(history);
                    town.appendChild(info);
                    town.appendChild(image);
                    document.querySelector('div.displayguides').appendChild(town);
                }
            }
        });
});