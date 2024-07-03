const url = "http://localhost:3000";

//The endpoints you may need are:
//- GET `/ramens`
//- GET `/ramens/:id`

const ramenMenuDiv = document.getElementById("ramen-menu");
const ramenDetailDiv = document.getElementById("ramen-detail");
const detailImage = document.getElementsByClassName("detail-image")[0];
const detailName = document.getElementsByClassName("name")[0];
const detailRestaurant = document.getElementsByClassName("restaurant")[0];
const detailRating = document.getElementById("rating-display");
const detailComment = document.getElementById("comment-display");

document.addEventListener("DOMContentLoaded", (event) => {
//console.log("DOM fully loaded and parsed");
});


//addSubmitListener
const newRamenForm = document.getElementById("new-ramen");
newRamenForm.addEventListener('submit', addSubmitListener);

const editForm = document.getElementById("edit-ramen");
editForm.addEventListener('submit', updateForm);

fetch(`${url}/ramens`)
    .then((res)=> {    
         if(res.ok){
             return res.json();
         }else{
             throw "no";
   }
   })
    .then(mainRamen);


function mainRamen(ramens){
      ramens.forEach(displayRamens)
};

function displayRamens(ramen){
    const ramenMenuDiv = document.getElementById("ramen-menu");
    const ramenImage = document.createElement("img");
    ramenImage.src = ramen.image;
    ramenMenuDiv.append(ramenImage); 

    //handleClick
    ramenImage.addEventListener("click", e => displayDetails(ramen));   
};

function displayDetails(ramen){
    const ramenDetailDiv = document.getElementById("ramen-detail");
    const detailImage = document.getElementsByClassName("detail-image")[0];
    const detailName = document.getElementsByClassName("name")[0];
    const detailRestaurant = document.getElementsByClassName("restaurant")[0];
    const detailRating = document.getElementById("rating-display");
    const detailComment = document.getElementById("comment-display");

    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    detailName.textContent = ramen.name;
    detailRestaurant.textContent = ramen.restaurant;
    detailRating.textContent = ramen.rating;
    detailComment.textContent = ramen.comment;

};

//addSubmitListener
function addSubmitListener(e){
  e.preventDefault();
    
    const newRamenForm = document.getElementById("new-ramen");
    const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  };
  displayDetails(newRamen);
};

//advanced deliverables
//image is async
//undefined

function updateForm (e){
  e.preventDefault();
  const editForm = document.getElementById("edit-ramen");
  const newUpdate = {
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  };
  displayDetails(newUpdate);
}

// Export functions for testing
// export{
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
//}
