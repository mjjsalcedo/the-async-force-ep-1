
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

