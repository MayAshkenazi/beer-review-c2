let Petarray = [{petname: "lola", pet:"cat", age:"0-4"}]

let addPet = function (name, pet, age) {
    Petarray.push({petname: name, pet: pet, age: age});
    renderPets();
 }

let renderPets = function(){
    $("ul").empty();
    for(let i=0; i< Petarray.length; i++){
        $('.pets-list').append(Petarray[i].petname  + " is a " + Petarray[i].pet + " and " + Petarray[i].age + " years old" + "</br>");
    }
}

let addPetClicked = function(){
    addPet(($('.petname-input').val()), ($('.pet-input').val()),  ($('.age-input').val()))
 }
$('.post-pet').on('click', addPetClicked);

let sort = function(){

 }
$('.post-ageorder').on('click', sort);


