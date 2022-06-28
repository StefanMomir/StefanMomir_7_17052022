//---> RECEIVED FROM FETCH
/* ************************************************************************ */
/*                                 RECIPES                                  */ 
/* ************************************************************************ */
class InputsFilters {
  /* **** MAIN CONTROLLER ************************************************* */
  constructor (returnData) {
    this.dataRecipes = returnData;
    this.searchByInput();
    this.listAllElementsAndRecipes();
    this.mainInputSearchFilter()
  }
  /* ********************************************************************** */
  

  /* **** LIST ALL RECIPES ************************************************ */
  listAllElementsAndRecipes(){
    if(!mainSearchArray?.length) recipeData = defaultRecipesArray;
    else if(filterSearchArray?.length) recipeData = filterSearchArray;
    else recipeData = mainSearchArray; 
    recipeData.filter(recipe => {
      let input = "";
      createFilterElements(recipe, input)
      new RecipesTemplate(recipe);
    })
    sortListElements()
  }
  /* ********************************************************************** */


  /* **** SEARCH LISTENER BY INPUT **************************************** */
  searchByInput(){
    // Target/Input Search Bars //
    document.querySelectorAll("input").forEach(inputData => {
      inputData.addEventListener("input", (outputData) => {
        let outputTargetId = outputData.target.id;
        let outputName = outputData.target.value;
        let inputName = normalizeData(outputName)
        clearAllElements(); //
        clearArrays(); //
        // ---------- Input By Main Search ------- //
        if(!mainSearchArray?.length) error();
        if(outputTargetId == "main-search" && 
        (!tagListNamesArray?.length)){
          clearRecipes(); //
          this.mainInputSearchFilter(inputName, outputTargetId)
        }
        else if(outputTargetId !== "main-search"){
          this.listInputSearchFilter(inputName, outputTargetId);
        }
      })
    })
  }
  /* **** end SEARCH LISTENER BY INPUT ************************************ */ 


  /* **** MAIN INPUT SEARCH FILTER **************************************** */
  mainInputSearchFilter(inputName){
    this.dataRecipes.filter((recipe) => {
      let byName = normalizeData(recipe.name).includes(inputName);
      let byDescription = normalizeData(recipe.description)
      .includes(inputName);
      let byIngredient = recipe.ingredients.find((ingredients) => 
      normalizeData(ingredients.ingredient).includes(inputName));
      if(byName || byDescription || byIngredient){
        pushMain(recipe);
        let byInput = "main";
        createFilterElements(recipe, inputName, byInput)
        new RecipesTemplate(recipe);
      }
    });
    sortListElements()
  }
  /* **** end MAIN SEARCH FILTER  ***************************************** */


  /* **** TAG INPUT SEARCH FILTER ***************************************** */
  listInputSearchFilter(inputName){
    if(!mainSearchArray?.length) recipeData = defaultRecipesArray;
    else if(filterSearchArray?.length) recipeData = filterSearchArray;
    else recipeData = mainSearchArray;
    recipeData.filter(recipe => {
        createFilterElements(recipe, inputName)
      })
      sortListElements()
    }
  /* **** end LIST SEARCH FILTER  ****************************************** */
}
//- EOF - // - //<--- SEND TO TAG LISTS