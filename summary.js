// The following APIs are available in Peddy:

// Fetch All Pets

// Endpoint: https://openapi.programming-hero.com/api/peddy/pets
// Description: Retrieves a list of all available pets for adoption. The data includes details like pet name, type, age, and adoption status.
// Fetch Pet Details by ID

// Endpoint:https://openapi.programming-hero.com/api/peddy/pet/pet-id

// Example: https://openapi.programming-hero.com/api/peddy/pet/1

// Description: Fetches detailed information for a specific pet based on its ID. This can be used to view additional information about the pet such as vacination history, description

// Fetch All Pet Categories

// Endpoint: https://openapi.programming-hero.com/api/peddy/categories

// Description: Fetches a list of all pet categories available in the platform, such as dogs, cats, rabbit , bird, etc.

// Fetch Pets by Category

// Endpoint: https://openapi.programming-hero.com/api/peddy/category/categoryName

// Example: https://openapi.programming-hero.com/api/peddy/category/dog

// Description: Fetches data of pets under a specific category, in this case, dogs. This can be used to filter pets based on their category.

// Key Requirements
// 1. Navbar
// Implement the navbar as per the Figma design.
// Ensure it is responsive across Desktop, Tablet, and Mobile devices.
// The navbar should collapse into a mobile menu on smaller screens.
// 2. Banner Section
// Design the banner section as per Figma design.
// Include a "View More" button that, when clicked, scrolls down to the “Adopt Your Best Friend” section.
// Ensure the banner is fully responsive.
// 3. Adopt Your Best Friend Section
// Left Side:
// Display 4 dynamic categories below the section title and subtitle, fetched from the provided API.
// Add a "Sort By Price" button on the right, with a subtitle on the left, as per the design.
// By default, show all available pets, with the active category styled according to Figma.
// After clicking on a category, fetch and display pets from that category in a grid layout.
// If no pets are available for a category, show a meaningful message.
// Each card must display the following:
// Thumbnail/Image
// Pet Name
// Breed
// Birth Date
// Gender
// Price
// Buttons: "Like", "Adopt", and "Details"
// If any field is missing from the API response, handle it by displaying a placeholder or meaningful message.
// Right Side:
// Clicking the "Like" button should add the pet's thumbnail to the right-side grid.
// Display a 2-column layout for liked pet thumbnails.


// Fetch Pet Details by ID

// Endpoint:https://openapi.programming-hero.com/api/peddy/pet/pet-id

// Example: https://openapi.programming-hero.com/api/peddy/pet/1

// Description: Fetches detailed information for a specific pet based on its ID. This can be used to view additional information about the pet such as vacination history, description
// 4. Modal Window
// When the "Details" button is clicked, open a modal that displays all pet information like figma
// The modal should close when the user clicks close button.
// 5. Footer
// Implement the footer as per the Figma design.
// Ensure it is responsive.
// 6. Responsive Design
// The entire platform must be responsive and functional on Desktop, Tablet, and Mobile devices.
// Use Tailwind CSS breakpoints for responsiveness.
// Challenges
// 1. Loading Spinner
// Display a loading spinner for at least 2 seconds when fetching data from the API.
// 2. Sort by Price
// Implement sorting functionality for pets. When the "Sort by Price" button is clicked, sort pets in descending order based on price . sorting on active category is recommended but if you can sort all the data you will get full mark for this requirement.
// 3. Adopt Button Behavior
// Implement an adoption process. When the "Adopt" button is clicked, show a countdown (3, 2, 1) and then change the button text to "Adopted."
// 4. Handle Null or Undefined Values
// If any values from the API (e.g., pet breed, birth date) are null or undefined, display a placeholder or relevant message instead of leaving it blank.
// 5. A beautiful README.md File
// Ensure the final project includes a README.md file with the following details:

// Project name.
// Short description of the project.
// 5 key features of the project.
// ES6 features used.
// Live link to the deployed project.


// okay  first requirment is the view more btn when clicked it takes me in the main section . and second is to fetch all the pets in a card and every information will be in this card about the perticular pet when you fetch all the card it will be show in this div this the id (id="left-div" ) of the div .and one more  and in those card will be desigend as same as in the design image i provide you but it's okay i will say again in the card there will be a image and there will three button(like, adopted and  details) in the card and the button has some functionality that is  when we cliked the like button the card imgae will be showed in the right div here is the right div id(id="right-div") and it works when cliked the like button it will show the  in the div   and the when the adopted button will cliked it will be opend a modal in this modal there would be a congratulation title with a imge congrats imge and count down like 321 and the modal will be closed and the adopted button will be disabled and the details button cliked it will be opened a modal and in this modal the card image will be show and when you worked in modal look at once the image and also give a close button int the modal and important must ensure everything worked and also same as the designed also implement the tailwind css for style in this each thing . and one more thing in the first you will do  the four category button and those button are dog cat rabbit bird as same as the designed when clicked the cat button it show every cat card the all button will be same and the four button will be in the section top as same as the design . when you do this must check everything are okay .the functionality will worked properly make sure this and also make sure the style .