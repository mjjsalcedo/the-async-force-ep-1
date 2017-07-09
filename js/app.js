var aReq = new XMLHttpRequest();

function areqListener(){
  var data = JSON.parse(this.responseText);
  person4Name.innerHTML = data.name;
}

aReq.addEventListener("load", areqListener);
aReq.open("GET", "http://swapi.co/api/people/4/");
aReq.send();

var bReq = new XMLHttpRequest();

function breqListener(){
  var data = JSON.parse(this.responseText);
  person4HomeWorld.innerHTML = data.name;
}

bReq.addEventListener("load", breqListener);
bReq.open("GET", "http://swapi.co/api/planets/1/");
bReq.send();

var cReq = new XMLHttpRequest();

function creqListener(){
  var data = JSON.parse(this.responseText);
  person14Name.innerHTML = data.name;
}

cReq.addEventListener("load", creqListener);
cReq.open("GET", "http://swapi.co/api/people/14/");
cReq.send();

var dReq = new XMLHttpRequest();

function dreqListener(){
  var data = JSON.parse(this.responseText);
  person14Species.innerHTML = data.name;
}

dReq.addEventListener("load", dreqListener);
dReq.open("GET", "http://swapi.co/api/species/1/");
dReq.send();


var eReq = new XMLHttpRequest();

function ereqListener(){
  var holder = document.createElement("li");
  var planets;
  var data = JSON.parse(this.responseText);

  data.results.map( (c,i) => {

    var titleLi = document.createElement("li");
    var titleh2 = document.createElement("h2");
    titleLi.innerHTML = data.results[i].title;
    titleh2.appendChild(titleLi);
    document.getElementById("filmList").appendChild(titleh2);
    var planets = data.results[i].planets;

    for (var j = 0; j < planets.length; j++) {
        var fReq = new XMLHttpRequest();

        fReq.addEventListener('load', function() {
          var planetLi = document.createElement("li");
          var planetH6 = document.createElement("h6");
          var planetParse = JSON.parse(this.response);
          console.log(planetParse);
          planetLi.innerHTML = planetParse.name;
          planetH6.appendChild(planetLi);
          titleLi.appendChild(planetH6);
        });

        fReq.open("GET", planets[j]);
        fReq.send();
      }

  });

}

eReq.addEventListener("load", ereqListener);
eReq.open("GET", "http://swapi.co/api/films/");
eReq.send();