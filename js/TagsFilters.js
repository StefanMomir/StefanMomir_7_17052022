//---> RECEIVED FROM FETCH AND INPUTS
/* ************************************************************************ */
/*                                 TAGS                                     */ 
/* ************************************************************************ */
class TagsFilters {
   /* **** MAIN CONTROLLER ************************************************ */
   constructor (){
   this.tagSet();
   }
   /* ********************************************************************* */

   
   /* **** TAG ADD ON THE BAR (Listener) ********************************** */
   tagSet(){
      // Target/Click List Buttons //
      document.querySelectorAll(".tag-list").forEach(clickData => {
         clickData.addEventListener("click", (outputButton) => {
            closeModalOnClick(); //
            clearArrays();
            let tagName = outputButton.target.dataset.name
            let elementType = outputButton.target.dataset.type;
            // Prevent Double Entry //
            let checkIfNameExist = tagListNamesArray.indexOf(tagName);
            // Create TagList //
            if(checkIfNameExist < 0){
               pushTags(tagName)
               new TagListTemplate(tagListNamesArray, tagName, elementType);
               //console.log("<-- TAG TARGET <<< WAIT/ADD TAGNAME TO BAR");
               this.filterRecipesByTags();
            };
         });
      });
   };
   /* **** end TAG ADD ON THE BAR  ******************************************* */


   /* **** TAG REMOVE FROM THE BAR (Listener) ******************************** */
   tagRemove(){
      // Target/Click List Buttons //
      document.querySelectorAll("#tags li").forEach(clickData => {
         clickData.addEventListener("click", (outputButton) => {
            let tagName = outputButton.target.dataset.name;
            let tagId = outputButton.target.id;
            // If Exist Remove Tag From Array //
            if(tagListNamesArray.includes(tagName)){
               tagListNamesArray.splice(tagListNamesArray.indexOf(tagName),1);
            }
            // If Exist Remove Tag Element From The Bar //       
            let removeSelectedElement = document.getElementById(tagId);
            if(removeSelectedElement !== null){
               removeSelectedElement.parentNode
               .removeChild(removeSelectedElement);
               filterSearchArray=[]; //
               this.filterRecipesByTags();
               //console.log("<< DEL ARRRAY FROM TAGREMOVE >>")
            }
         })
      })
   }
   /* **** end TAG REMOVE FROM THE BAR (Listener) **************************** */


   /* **** FILTER RECIPES **************************************************** */
   filterRecipesByTags(){
      //console.clear()
      //console.log("----> FILTER ACTIVATED <<< START TAGS LOOP")
      // If No Tag Use Last Main Input Search //
      if(!tagListNamesArray?.length){
         clearRecipes();
         if(!filterSearchArray?.length){
            if(!mainSearchArray?.length)
            recipeData = defaultRecipesArray;
            else recipeData = mainSearchArray;
          }
          recipeData.map(recipe => {
            let sentBy = "filter"
            createFilterElements(recipe, input, sentBy);
            new RecipesTemplate(recipe);
            //console.log("<-- NO MORE TAGS >> RESET TO MAIN")
         });
      }    
      console.log(mainSearchArray)
      // Loop Tags For Filtering //
      tagListNamesArray.forEach(tagName => {
         clearAllElements();//
         clearArrays(); //
         clearRecipes(); //
         if(!filterSearchArray?.length){
           if(!mainSearchArray?.length)
           recipeData = defaultRecipesArray;
           else recipeData = mainSearchArray;
         }
         else if(!tagListNamesArray?.length){
            recipeData = mainSearchArray;
            clearArrays(); //
         }
         else {
            recipeData = filterSearchArray;
            filterSearchArray=[]; //
         }
         recipeData.filter(recipe => {
            // Filter By Ingredient //
            let ingredients = recipe.ingredients.find(extract => 
               normalizeData(extract.ingredient).includes(normalizeData(tagName)));
            // Filter By Appliance //
            let appliances = 
               normalizeData(recipe.appliance).includes(normalizeData(tagName));
            // Filter By Ustensils //
            let ustensils = recipe.ustensils.find(ustensil => 
               normalizeData(ustensil).includes(normalizeData(tagName)));
            if(ingredients || appliances || ustensils){
               pushFiltered(recipe)
               //console.log("<-- SEND FILTERED RECIPES DATA TO TAG LIST")
               let sentBy = "filter"
               createFilterElements(recipe, input, sentBy);
               new RecipesTemplate(recipe);
            }
         })
         this.tagRemove();
      })
      sortListElements()
   }
   /* **** end FILTER RECIPES ************************************************ */

}
//- EOF - // - //<--- SEND TO TAG LISTS
