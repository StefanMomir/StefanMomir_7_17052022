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
  

  /* **** LIST ALL RECIPES ************************************************ *
  listAllElementsAndRecipes(){
    if(!mainSearchArray?.length) recipeData = defaultRecipesArray;
    else if(filterSearchArray?.length) recipeData = filterSearchArray;
    else recipeData = mainSearchArray; 

    // Version FOR //
    //let numbersOfRecipes = parseInt(recipeData.length)-1;
    let numbersOfRecipes = 50;
    //clearRecipes();
    let recipe =""
    for (let i=0; i < numbersOfRecipes; i++) {
      recipe = recipeData[i];
      let input = "";
      createFilterElements(recipe, input)
      new RecipesTemplate(recipe);
    } 
    // end Version FOR //
    sortListElements()
  }
  /* ********************************************************************** */



    /* **** LIST ALL RECIPES ************************************************ */
    listAllElementsAndRecipes(){
      if(!mainSearchArray?.length) recipeData = defaultRecipesArray;
      else if(filterSearchArray?.length) recipeData = filterSearchArray;
      else recipeData = mainSearchArray; 
  
      let numbersOfRecipes = recipeData.length;
      let recipe =""
      for (let i=0; i < numbersOfRecipes; i++) {
        recipe = recipeData[i];
        let input = "";
        createFilterElements(recipe, input)
        new RecipesTemplate(recipe);
      }
      /*
      recipeData.filter(recipe => {
        let input = "";
        createFilterElements(recipe, input)
        new RecipesTemplate(recipe);
      })
      */
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


    /* **** MAIN INPUT SEARCH FILTER **************************************** *
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
    /* **** end MAIN SEARCH FILTER  ***************************************** *




  /* **** MAIN INPUT SEARCH FILTER **************************************** */
  // Version FOR //
  mainInputSearchFilter(inputName){
  let recipeData = this.dataRecipes;
  let numbersOfRecipes = parseInt(this.dataRecipes.length);
  let recipes;
  for(let i=0; i < numbersOfRecipes; i++){
      recipes = recipeData[i];
    // byName //
    let byName = normalizeData(recipes.name).includes(inputName);
    // byDescription //
    let byDescription = normalizeData(recipes.description).includes(inputName);
    let byIngredient = recipes.ingredients.find((ingredients) => 
      normalizeData(ingredients.ingredient).includes(inputName));
    if(byName || byDescription || byIngredient){
      pushMain(recipes);
      let byInput = "main";
      createFilterElements(recipes, inputName, byInput)
      new RecipesTemplate(recipes);
     }
  }// end While //
  sortListElements()
  }
  /* **** end MAIN SEARCH FILTER  ***************************************** */



  /* **** MAIN INPUT SEARCH FILTER **************************************** *
  // Version FOR //
  mainInputSearchFilter(inputName){
  let recipeData = this.dataRecipes;
  let numbersOfRecipes = parseInt(this.dataRecipes.length);
  let recipes;
  let byIngredient = [];
  for(let i=0; i < numbersOfRecipes; i++){
    recipes = recipeData[i];
    // byName //
    let byName = normalizeData(recipes.name).includes(inputName);
    // byDescription //
    let byDescription = normalizeData(recipes.description).includes(inputName);
    /*
    let byIngredient = recipes.ingredients.find((ingredients) => 
      normalizeData(ingredients.ingredient).includes(inputName));



    for (let i = 0; i < recipes.ingredients.length; i++) {
      if (normalizeData(recipes.ingredients[i].ingredient).includes(inputName)) {
        byIngredient.push(recipes.ingredients[i]);
      }
    }
*
    if(byName || byDescription || byIngredient){
      pushMain(recipes);
      let byInput = "main";
      createFilterElements(recipes, inputName, byInput)
      new RecipesTemplate(recipes);
     }
  }// end While //
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