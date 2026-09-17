//debugger;
const dataSourceURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
readTextFile("json/towndata.json", function(text){
    var data = JSON.parse(text);
    console.log('DATA:', data);
});

fetch(dataSourceURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObj) {
        const towns = jsonObj['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (['Preston', 'Soda Springs', 'Fish Haven'].indexOf(towns[i].name) > -1) {
                let town = document.createElement('section');

                if (towns[i].name == "Preston")
                {
                    town.style.order = "1";
                }
                else if (towns[i].name == "Soda Springs")
                {
                    town.style.order = "2";
                }
                else if (towns[i].name == "Fish Haven")
                {
                    town.style.order = "3";
                }
                          
                let info = document.createElement('div');
                let name = document.createElement('h2');
                let motto = document.createElement('h3');
                let founded = document.createElement('div');
                let population = document.createElement('div');
                let rainfall = document.createElement('div');
                let image = document.createElement('img');
                let history = document.createElement('div');

                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', 'Image of ' + towns[i].name);
                image.setAttribute('title', towns[i].name);
                image.classList.add('image');
                name.textContent = towns[i].name;
                name.classList.add('town');
                motto.textContent = towns[i].motto;
                motto.classList.add('motto');
                founded.textContent = 'Founded in: ' + towns[i].yearFounded;
                founded.classList.add('founded');
                population.textContent = 'Population: ' + towns[i].currentPopulation;
                population.classList.add('population');
                rainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
                rainfall.classList.add('rainfall');              
                info.classList.add('info');
                info.appendChild(name);
                info.appendChild(motto);
                info.appendChild(founded);
                info.appendChild(population);
                info.appendChild(rainfall);
                info.appendChild(history);
                town.appendChild(info);
                town.appendChild(image);
                document.querySelector('div.displaytowns').appendChild(town);
            }
        }
    });