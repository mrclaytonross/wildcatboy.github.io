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
        console.log(i);
        if (animalName == animals[i].name){
            return animals[i];
        } 
    } return null;
}
    
console.log(search("Jerome"));
