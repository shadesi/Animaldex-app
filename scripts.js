// Part 2: Implementing IIFE and Repository Pattern
let animalRepository = (function () {
  let animalList = [
    {
        name: "Lion",
        height: 7,
        types: ['grass', 'poison']
    },
    {
        name: "Sheep",
        height: 6,
        types: ['fire']
    },
    {
        name: "Dog",
        height: 5,
        types: ['water']
    }
  ];

  function add(animal) {
    animalList.push(animal);
  }

  function getAll() {
    return animalList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

// Part 1: Refactor to Use forEach
// Adding some sample Animals to the repository
animalRepository.add({ name: 'Cat', height: 2, types: ['tree', 'leaves'] });
animalRepository.add({ name: 'Rabbit', height: 3, types: ['wool'] });
animalRepository.add({ name: 'Mouse', height: 1, types: ['Cheese'] });

// Using forEach to iterate over animalList and print each Animal's details
animalRepository.getAll().forEach(function(animal) {
  if (animal.height >= 6) {
    document.write(animal.name + " [ height: " + animal.height + " ]" + " is classified as a big size animal!" + '<br><br>');
  } else if (animal.height >= 4 && animal.height < 6) {
    document.write(animal.name + " [ height: " + animal.height + " ]" + " is classified as a medium size animal!" + '<br><br>');
  } else if (animal.height >= 2 && animal.height < 4) {
    document.write(animal.name + " [ height: " + animal.height + " ]" + " is classified as a small size animal!" + '<br><br>');
  } else {
    document.write(animal.name + " [ height: " + animal.height + " ]" + " is classified as a tiny size animal!" + '<br><br>');
  }
});
