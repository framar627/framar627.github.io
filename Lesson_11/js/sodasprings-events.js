const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response)
  {
    return response.json();   
  })
    .then(function (jsonObject)
  {
    console.table(jsonObject);
    const towndata = jsonObject['towns'];
    for (let i = 0; i < towndata.length; i++ )
    {
        if (towndata[i].name != "Soda Springs")
        {
            continue;
        }
        let townEventDiv = document.getElementById("town-events");
        for (let j =0; j < towndata[i]['events'].length; j++)
        {
            let eventDetailsDiv = document.createElement('div');
            var eventStringArray = towndata[i]['events'][j].split(':')
            eventDetailsDiv.innerHTML = eventStringArray[0] + ":";
            let eventDescriptionSpan = document.createElement('span');
            eventDescriptionSpan.innerHTML = eventStringArray[1];
            eventDetailsDiv.appendChild(eventDescriptionSpan);
            eventDetailsDiv.className = "town-events-list-item";
            townEventDiv.appendChild(eventDetailsDiv);
        }
    }
  });