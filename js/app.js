
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
dReq.open("GET", "http://swapi.co/api/planets/22/");
dReq.send();