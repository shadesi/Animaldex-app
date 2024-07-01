// This array will contain Animals 
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


// Iterate over each Animal in the animalList array
for (let i = 0; i < animalList.length; i++) {
    let animal = animalList[i];

    // Get the current Animal's name and height
    if(animalList[i].height < 7 && animalList[i].height > 5) {

        // Write the output to the website's DOM
        document.write(animal.name+ " [ height: " +animal.height + " ]"+" is classified as a medium size animal!" + '<br><br>');
    }else if (animalList[i].height < 6 && animalList[i].height > 4){

        // Write the output to the website's DOM
        document.write(animal.name+ " [ height: " +animal.height + " ]"+" is classified as a small size animal!" + '<br>');

    } else {

        // Write the output to the website's DOM
        document.write(animal.name+ " [ height: " +animal.height + " ]"+ " is classified as a big size animal!" + '<br><br>'); 
    }


}
