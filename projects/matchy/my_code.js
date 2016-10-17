var animal = {};
animal.species = "bird";
animal["name"] = "chris";
animal.noises = [];

var noises = [];

noises[0] = "chirp";
noises.push("cheep");
noises.unshift("tweet");
noises[noises.length] = ("teet");

// console.log(noises.length);
// console.log(noises[noises.length - 1]);
// console.log(noises);

animal["noises"] = noises;
animal.noises.push("chee-yirp");

// console.log(animal);

// dot and bracket notation
// bracket notation

var animals = [];
animals.push(animal);
// console.log(animals);

var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
animals.push(duck);

// console.log(animals);

var dog = {species: 'dog', name: 'Hal', noises: ["woof", "hello"]};
var sheep = {species: 'sheep', name:'Barrack', noises: ["bah", "yaba yaba"]};

animals.push(dog);
animals.push(sheep);

// console.log(animals.length);

// I chose an array, because friends will be a basic list

var friends = [];

function getRandanimal(min, max){
    var x = Math.random() * (max - min) + min;
    x = Math.round(x);
    return friends.push(animals[x].name);
}

//getRandanimal(0, animals.length - 1);

//console.log(friends);

duck.friends = friends;

//console.log(duck);

function search(animalName){
    for (var i = 0; i < animals.length - 1; i++){
        if (animalName == animals[i].name){
            return animals[i];
        } 
    } return null;
}
    
//console.log(search("Jerome"));

function edit(animalName, object){
     for (var i = 0; i < animals.length - 1; i++){
        if (animalName === animals[i].name){
            console.log(animals[i].name);
            animals[i] = object;
            //console.log(animals[i])
        } 
    } 
}

//edit("Jerome", {species : "duck", name : "mr. quackers", noise : "cookaroo"});

//console.log(animals[1]);

function remove(animalName){
     for (var i = 0; i < animals.length - 1; i++){
        if (animalName === animals[i].name){
            //console.log(animals[i].name);
            animals.splice(i, 1);
            //console.log(animals[i])
        } 
    } 
}



//remove("Hal");
//console.log(animals);


function create(objet){
    if(objet.name.length > 0 && objet.species.length > 0){
        for (var i = 0; i < animals.length; i++){
        if (objet.name == animals[i].name){
            return }
            }
        } debugger; animals.push(objet);
    }


create({species : "duck", name : "mr. quackers", noise : "cookaroo"});

console.log(animals);
