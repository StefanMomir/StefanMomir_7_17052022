//---> RECEIVED FORM INPUTS AND TAGS
/* ************************************************************************ */
/*                           ELEMENTS FILTER                                */ 
/* ************************************************************************ */

/* **** CREATE FILTER ELEMENTS ******************************************** */
function createFilterElements(recipe, input, sentBy){
  clearAllElements()
  // Extract/Push - Ingredients //
  recipe.ingredients.find((result) => {
    let ingredients = normalizeData(result.ingredient).includes(input);
    if(ingredients && sentBy !== "main"){
      pushIngredients(result.ingredient)
    }
    else if(sentBy === "main" || sentBy === "filter"){
      pushIngredients(result.ingredient)
    }
  })
  // Appliances //
  let appliances = normalizeData(recipe.appliance).includes(input);
  if(appliances && sentBy !== "main"){
    pushAppliances(recipe.appliance)
  }
  else if(sentBy === "main" || sentBy === "filter"){
    pushAppliances(recipe.appliance)
  }
  // Ustensils //
  recipe.ustensils.find((ustensil) => {
    let ustensils = normalizeData(ustensil).includes(input);
    if(ustensils && sentBy !== "main"){
      pushUstensils(ustensil)
    }
    else if(sentBy === "main" || sentBy === "filter"){
      pushUstensils(ustensil)
    }
  });
}
/* **** end CREATE FILTER ELEMENTS -> SEND TO SORT ************************ */

/* **** -> RECEIVED TO SORT -> SEND ELEMENTS TO TEMPLATES ***************** */
function sortListElements(){
  // Filter/Sort Results - By Ingredients //
  let ingType = "byIngredient";
  ingredientsArray = [...new Set(ingredientsArray)].sort();
  ingredientsArray =  ingredientsArray.sort((a, b) => {
    return a.localeCompare(b);
  });
  // - By Appliances //
  let appType = "byAppliance";
  appliancesArray = [...new Set(appliancesArray)].sort();
  appliancesArray =  appliancesArray.sort((a, b) => {
    return a.localeCompare(b);
  });
  // - By Ustensils //
  let ustType = "byUstensil";
  ustensilsArray = [...new Set(ustensilsArray)].sort();
  ustensilsArray =  ustensilsArray.sort((a, b) => {
    return a.localeCompare(b);
  });
  // Send Results To Lists Templates //
  errorCheck()
  //console.log(ingredientsArray)
  sendResultToTemplates(ingredientsArray, appliancesArray, ustensilsArray,
    ingType, appType, ustType)
}
/* **** end SORT / SEND ELEMENTS TO TEMPLATES ***************************** */
//- EOF -//
//<--- SEND TO TEMPLATES
