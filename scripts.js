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

  function addListItem(animal) {
    let animalListElement = document.querySelector(".animal-list");
    let listAnimal = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = animal.name;
    button.classList.add("button-class");
    listAnimal.appendChild(button);
    animalListElement.appendChild(listAnimal);

    // Adding event listener to the button
    button.addEventListener('click', function() {
      showDetails(animal);
    });
  }

  function showDetails(animal) {
    console.log(animal);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// Part 1: Refactor to Use forEach
// Adding some sample Animals to the repository
animalRepository.add({ name: 'Cat', height: 2, types: ['tree', 'leaves'] });
animalRepository.add({ name: 'Rabbit', height: 3, types: ['wool'] });
animalRepository.add({ name: 'Mouse', height: 1, types: ['cheese'] });

// Using forEach to iterate over animalList and print each Animal's details
animalRepository.getAll().forEach(function(animal) {
  animalRepository.addListItem(animal);
});
