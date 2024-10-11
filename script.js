// create loadCategories
const loadCategories = () => {


    // fetch the data
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch((error) => console.error(error));
}
// create loadCategories
const loadAllPets = () => {


    // fetch the data
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res => res.json())
    .then(data => displayPets(data.pets))
    .catch((error) => console.error(error));
}

const loadCategoryPets = (categoryName) =>{
    // alert(categoryName);
     // fetch the data
     fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
     .then(res => res.json())
     .then(data => {
        removeActiveClass();
        const activBtn = document.getElementById(`btn-${categoryName}`);
        activBtn.classList.add("active");
        console.log(activBtn)
        displayPets(data.data);
        console.log(activBtn);
     })
     .catch((error) => console.error(error));
}

const removeActiveClass = () =>{
    const buttons = document.getElementsByClassName("category-btn");
    console.log(buttons);
    for(let btn of buttons){
        btn.classList.remove("active");
    }
}

const loadDetails = async (petId) => {
  console.log(petId);
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(uri);
  const data = await res.json();
  console.log(data);
}
const displayDetails = (pet) => {
console.log(pet);
const detailsContainer = document.getElementById('modal-content');
detailsContainer.innerHTML = `<div class=" p-4 md:my-4 lg:my-0 rounded-xl shadow-md mb-2">
                    <img src="${pet.image}" alt="${pet.name}" class="w-[100%] h-[50%] object-cover mb-2 rounded-xl">
                    <h3 class="text-xl font-bold pl-3">${pet.pet_name}</h3>
                    <p class="text-[#1313139a] pl-3">Breed: ${pet.breed}</p>
                    <h3 class="text-[#1313139a] pl-3">Gender: ${pet.gender}</h3>
                    <h3 class="text-[#1313139a] pl-3">Date: ${pet.date_of_birth}</h3>
                    <h3 class="text-[#1313139a] pl-3">Price: $${pet.price}</h3>
                    <br>
                    <hr class="w-[98%] mx-auto">

                    <div class="mt-1 flex justify-between items-center px-2">
                        <button class="like-btn border border-[#0E7A81] pl-3 text-[#0E7A81] mt-2 rounded-lg px-2 py-1 mr-2">Like</button>
                    </div>
                </div>`;
// document.getElementById('customModal').showModal();
document.getElementById('showModalData').click();

}



  // create displayPets 
const displayPets = (pets) => {
const petContainer = document.getElementById('left-div');
petContainer.innerHTML = "";

if(pets.length == 0){
    petContainer.classList.remove("grid", "lg:grid-cols-3", "md:grid-cols-4");
    petContainer.innerHTML = `
    <div class="bg-[#F4F4F4] w-full">
    <div class="flex justify-center items-center"><img class="w-[50%] h-[40%]" src="./images/error.webp" /></div>
    <br>
    <p class="text-2xl font-bold">No Information Available</p>
    </div>
    `;
    return;
}else{
    petContainer.classList.add("grid", "lg:grid-cols-3", "md:grid-cols-4", "gap-4");
}

 pets.forEach((pet) => {
//   console.log(pet);
  const card = document.createElement('div');
  card.innerHTML = `<div class=" p-4 md:my-4 lg:my-0 rounded-xl shadow-md mb-2">
                    <img src="${pet.image}" alt="${pet.name}" class="w-[100%] h-[50%] object-cover mb-2 rounded-xl">
                    <h3 class="text-xl font-bold pl-3">${pet.pet_name}</h3>
                    <p class="text-[#1313139a] pl-3">Breed: ${pet.breed}</p>
                    <h3 class="text-[#1313139a] pl-3">Gender: ${pet.gender}</h3>
                    <h3 class="text-[#1313139a] pl-3">Date: ${pet.date_of_birth}</h3>
                    <h3 class="text-[#1313139a] pl-3">Price: $${pet.price}</h3>
                    <br>
                    <hr class="w-[98%] mx-auto">

                    <div class="mt-1 flex justify-between items-center px-2">
                        <button class="like-btn border border-[#0E7A81] pl-3 text-[#0E7A81] mt-2 rounded-lg px-2 py-1 mr-2">Like</button>
                        <button class="adopt-btn border pl-3 border-[#0E7A81] text-[#0E7A81] mt-2 rounded-lg px-4 py-1 mr-2">Adopt</button>
                        <button class="details-btn border pl-3 border-[#0E7A81] text-[#0E7A81] mt-2 rounded-lg px-4 py-1" onclick="loadDetails(${pet.petId})">Details</button>
                    </div>
                </div>`;
     petContainer.append(card);
 })
}

// create displayCategories
const displayCategories = (categories) => {
 const categoryContainer = document.getElementById("categories");


   categories.forEach((item) => {

    // // create a button
    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML = `
    
    <button id="btn-${item.category}" onclick="loadCategoryPets('${item.category}')" class="rounded-xl  lg:px-20 md:px-10 px-6 border border-[#0E7A81] bg-transparent lg:py-5 md:py-4 py-3 font-bold text-xl category-btn">
     ${item.category}
    </button> 
    
    `
    
    // // add button to category container
    categoryContainer.append(buttonContainer);

   });
   
}
loadCategories();
loadAllPets();
