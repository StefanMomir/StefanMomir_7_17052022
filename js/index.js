console.time("index.js");
/* ***************************************************************************** */
/*                            INIT GLOBAL VARIABLES                              */ 
/* ***************************************************************************** */ 
/**** INIT ELEMENTS LISTS *********** */
let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];
//-//
//let defaultRecipesArray=[];
let mainSearchArray = [];
let filterSearchArray = [];
let tagListNamesArray = [];
//-//
let recipeData;
let input="";
/* **** end INIT GLOBAL VARIABLES ********************************************** */


/* **** ERROR CHECK ************************************************************ */
function error(){
  document.getElementById("error").innerHTML=`
  Aucune recette ne correspond à votre critère ...vous pouvez, 
  par exemple, rechercher 'tarte aux pommes', 'poisson', etc. !`
  document.getElementById("error").classList.remove("hide");
}
function error_i(){
  document.getElementById("error").innerHTML=`
  Aucun ingrédient, appareil ou ustensile trouvé !`
  document.getElementById("error").classList.remove("hide");
}
function errorCheck(){
  if (document.querySelectorAll("figure").length === 0) error();
  else if (!ingredientsArray?.length) error_i();
  else  document.getElementById("error").classList.add("hide");
}
/* **** end ERROR CHECK ******************************************************** */


/* ***************************************************************************** */ 
/*                            MODALS LISTENER                                    */ 
/* ***************************************************************************** */
function modalsListener(){
document.querySelectorAll("button").forEach(click => {
  click.addEventListener("click", (button) =>{
    let returnButton = button.target.id;
    // Ingredients Listener //
    if(returnButton == "button_ingredients"){
      document.getElementById("closeIngredients").classList.remove("hide");
      document.getElementById("closeAppliances").classList.add("hide");
      document.getElementById("closeUstensils").classList.add("hide");
    }
    // Appliances Listener //
    else if(returnButton == "button_appliances"){
      document.getElementById("closeIngredients").classList.add("hide");
      document.getElementById("closeAppliances").classList.remove("hide");
      document.getElementById("closeUstensils").classList.add("hide");
    }
    // Ustensils Listener //
    else if(returnButton == "button_ustensils"){
      document.getElementById("closeIngredients").classList.add("hide");
      document.getElementById("closeAppliances").classList.add("hide");
      document.getElementById("closeUstensils").classList.remove("hide");
    }
    // Global List Listener //
    else if(returnButton == "close-ingredients" 
    || returnButton == "close-appliances" 
    || returnButton == "close-ustensils"){
      closeModalOnClick()
    }
  })
})
}
modalsListener();

// Global Close Listener //
function closeModalOnClick(){
  document.getElementById("closeIngredients").classList.add("hide");
  document.getElementById("closeAppliances").classList.add("hide");
  document.getElementById("closeUstensils").classList.add("hide");
}
/* ****** end MODAL LISTENER *************************************************** */ 


/* ***************************************************************************** */ 
/*                          ELEMENTS MANAGEMENT                                  */ 
/* ***************************************************************************** */ 

/* **** CLEAR LISTS ELEMENTS *************************************************** */ 
function clearAllElements(){
  document.getElementById("ingredient-list").innerHTML ="";
  document.getElementById("appliance-list").innerHTML ="";
  document.getElementById("ustensil-list").innerHTML ="";
}
/* **** end CLEAR LISTS ELEMENTS *********************************************** */


/* **** CLEAR ELEMENTS ARRAYS ************************************************** */ 
function clearArrays(){
  ingredientsArray = [];
  appliancesArray = [];
  ustensilsArray = [];
}
/* **** end CLEAR ELEMENTS ARRAYS ********************************************** */ 


/* **** CLEAR RECIPES ********************************************************** */ 
function clearRecipes(){
  document.getElementById("recipes").innerHTML ="";
}
/* **** end CLEAR RECIPES ****************************************************** */ 


/* **** CLEAR ALL ************************************************************** */ 
function clearAll(){
  clearRecipes();
  clearAllElements();
  clearArrays();
}
/* **** end CLEAR ALL ********************************************************** */ 


/* **** NORMALIZE TEXT ********************************************************* */ 
function normalizeData(type){
  type = type.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]|\s/g, "")
  return type
}
/* **** end NORMALIZE TEXT ***************************************************** */


/* **** PUSH ELEMENTS ********************************************************** */ 
function pushIngredients(element){ ingredientsArray.push(element); }
function pushAppliances(element){ appliancesArray.push(element); }
function pushUstensils(element){ ustensilsArray.push(element); }
function pushFiltered(recipe){ 
  filterSearchArray.push(recipe);
  filterSearchArray = [...new Set(filterSearchArray)];
}
function pushTags(tagName){
  tagListNamesArray.push(tagName);
  tagListNamesArray = [...new Set(tagListNamesArray)];
}
function pushMain(recipe){ 
  mainSearchArray.push(recipe);
  mainSearchArray = [...new Set(mainSearchArray)];
}
function extractIngredient(recipeIngredients, inputName){
  byIngredient = recipeIngredients.find((ingredients) => normalizeData(ingredients.ingredient).includes(inputName));
return byIngredient
}
/* **** end PUSH ELEMENTS ****************************************************** */ 

/* **** SEND TO TEMPLATES ****************************************************** */ 
function sendResultToTemplates(ingredientsArray, appliancesArray, 
  ustensilsArray, ingType, appType, ustType ){
  new IngredientsListTemplate(ingredientsArray, ingType)
  new AppliancesListTemplate(appliancesArray, appType)
  new UstensilsListTemplate(ustensilsArray, ustType)
  new TagsFilters();
}
/* **** end SEND TO TEMPLATES ************************************************** */ 

// TIMER
console.timeEnd("index.js");

