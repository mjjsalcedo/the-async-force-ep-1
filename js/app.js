/*jshint esversion: 6 */

fetch('http://swapi.co/api/people/4/')
.then(function(response) {
  return response.json();
}).then(function(myBlob) {
  person4Name.innerHTML = myBlob.name;
});


fetch('http://swapi.co/api/planets/1/')
.then(function(response) {
  return response.json();
}).then(function(myBlob) {
  person4HomeWorld.innerHTML = myBlob.name;
});


fetch('http://swapi.co/api/people/14/')
.then(function(response) {
  return response.json();
}).then(function(myBlob) {
  person14Name.innerHTML = myBlob.name;
});


fetch('http://swapi.co/api/species/1/')
.then(function(response) {
  return response.json();
}).then(function(myBlob) {
  person14Species.innerHTML = myBlob.name;
});


fetch('http://swapi.co/api/films/')
.then(function(response) {
  return response.json();
}).then(function(myBlob){
  myBlob.results.map((c,i) => {
  var titleLi = document.createElement("li");
  var titleh2 = document.createElement("h2");
      titleLi.innerHTML = myBlob.results[i].title;
      titleh2.appendChild(titleLi);
      document.getElementById("filmList").appendChild(titleh2);
  var planets = myBlob.results[i].planets;
    for (var j = 0; j < planets.length; j++){
          fetch(planets[j]).then(function(res){
            return res.json();
          }).then(function(res){
            var planetLi = document.createElement("li");
            var planetH6 = document.createElement("h6");
                planetLi.innerHTML = res.name;
                planetH6.appendChild(planetLi);
                titleLi.appendChild(planetH6);
             });
    }
  });
});
    /*var planetLi = document.createElement("li");
    var planetH6 = document.createElement("h6");
    var planetParse = JSON.parse(this.response);
        planetLi.innerHTML = planetParse.name;
        planetH6.appendChild(planetLi);
        titleLi.appendChild(planetH6);*/

