/* ******************************************************************************* */
/*                              RECIPES CARDS TEMPLATE                             */ 
/* ******************************************************************************* */
class RecipesTemplate {
    //- MAIN CONTROLLER -//
    constructor(recipe, set){
        this.recipe = recipe;
        this.selected = set;
        this.recipesCardTemplate();
        errorCheck();
    }
    //- RECIPES TEMPLATE -//
    recipesCardTemplate(){
        // Create Ingredient Block //
        let ingredientList = this.recipe.ingredients.map(ingredient => {
         // Customize Ingredients Block //
         if(!ingredient.unit){ingredient.unit = ""}
         if(ingredient.quantite){ingredient.quantity = ingredient.quantite}
         if(!ingredient.quantity){ingredient.quantity = "1"; ingredient.unit = ""}
         ingredient = `
         ${ingredient.ingredient}: ${ingredient.quantity} ${ingredient.unit}<br>`
         return ingredient
        })
        ingredientList = (ingredientList.join(' '));
        // Target ID for Template Creation // 
        let recipesCardContainer = document.getElementById('recipes');
        // Create Template Cards //
        let recipesContainer = document.createElement('figure');
        recipesContainer.setAttribute("data-type","recipes");
    //    recipesContainer.setAttribute("data-set",this.selected);
        recipesContainer.innerHTML =
        `<figcaption data-appliance='${this.recipe.appliance}'>
         <h1>${this.recipe.name}</h1>
          <p class='recipe-time'>${this.recipe.time} min</p>
         <div>
           <h2 class='recipe-ingredients'>${ingredientList}</h2>
         </div>
          <span class='recipe-description'>${this.recipe.description}</span>
        </figcaption>`
        recipesCardContainer.appendChild(recipesContainer);
    }// end Template //
}
/* **** end RECIPES CARDS TEMPLATE ********************************************** */


/* ****************************************************************************** */
/*                       INGREDIENTS LIST DATA ARRAY                              */ 
/* ****************************************************************************** */
class IngredientsListTemplate {
    //- MAIN CONTROLLER -//
    constructor(ingredientsArray, elementType, elementSet){
        this.ingredientsArray = ingredientsArray;
        this.elementType = elementType;
        this.elementSet = elementSet;
        this.ingredientsListTemplate()   
        
    }
    //- INGREDIENTS LIST TEMPLATE -//
    ingredientsListTemplate(){
        let templateSection = "ingredient-list";
        createTemplates(ingredientsArray, templateSection, this.elementType,
             this.elementSet)
    }
} 
/* **** end INGREDIENTS LIST DATA ARRAY ***************************************** */


/* ****************************************************************************** */
/*                       APPLIANCES LIST DATA ARRAY                               */ 
/* ****************************************************************************** */
class AppliancesListTemplate {
    //- MAIN CONTROLLER -//
    constructor(appliancesArray, elementType, elementSet){
        this.appliancesArray = appliancesArray;
        this.elementType = elementType;
        this.elementSet = elementSet;
        this.ingredientsListTemplate()
    }
    //- APPLIANCES LIST TEMPLATE -//
    ingredientsListTemplate(){
        let templateSection = "appliance-list";
        createTemplates(appliancesArray, templateSection, this.elementType,
             this.elementSet)
    }
} 
/* **** end APPLIANCES LIST DATA ARRAY ****************************************** */


/* ****************************************************************************** */
/*                          USTENSILS LIST DATA ARRAY                             */ 
/* ****************************************************************************** */
class UstensilsListTemplate {
    //- MAIN CONTROLLER -//
    constructor(ustensilsArray, elementType, elementSet){
        this.ustensilsArray = ustensilsArray;
        this.elementType = elementType;
        this.elementSet = elementSet;
        this.ingredientsListTemplate()
    }
    //- USTENSILS LIST TEMPLATE -//
    ingredientsListTemplate(){
        let templateSection = "ustensil-list";
        createTemplates(ustensilsArray, templateSection, this.elementType,
             this.elementSet)
    }
}
/* **** end USTENSILS LIST DATA ARRAY ******************************************* */


/* ****************************************************************************** */
/*                           CREATE TAG LIST TEMPLATES                            */ 
/* ****************************************************************************** */
function createTemplates(filteredData, templateSection, elementType, elementSet){
    filteredData.forEach(returnElement => {
      // Capitalize Result //
      returnElement = returnElement[0].toUpperCase() + returnElement.slice(1);
      // Itinerate Data //
      let targetListContainer = document.getElementById(templateSection);
      let listContainer = document.createElement('li');
      for (const [key, value] of Object.entries({
        class: "tag-list",
        'data-name': returnElement,
        'data-type': elementType,
        'data-set': "tag",
        'data-selected': elementSet
        }))
        listContainer.setAttribute(key, value); 
        listContainer.innerText = `${returnElement}`;
      targetListContainer.appendChild(listContainer);
    })
    
}
/* **** end CREATE LIST TEMPLATE ************************************************ */
  

/* ****************************************************************************** */
/*                          CREATE TAG BAR TEMPLATE                               */ 
/* ****************************************************************************** */
class TagListTemplate {
    //- MAIN CONTROLLER -//
    constructor(tagListNamesArray, outputValue, elementType, elementSet){
        this.tagNameArray = tagListNamesArray;
        this.tagName = outputValue;
        this.tagType = elementType;
        this.tagSet = elementSet
        this.tagListTemplate()
    }
    //- USTENSILS LIST TEMPLATE -//
    tagListTemplate(){
        let targetListContainer = document.getElementById('tags');
        let listContainer = document.createElement('li');
        for (const [key, value] of Object.entries({
            id: this.tagName,
            class: "tag-element "+this.tagType,
            'data-name': this.tagName,
            'data-type': this.tagType,
            'data-set': "tag-line",
            'data-selected': this.tagSet
            }))
        listContainer.setAttribute(key, value); 
        listContainer.innerHTML =`${this.tagName}`
        targetListContainer.appendChild(listContainer);
    }
}
/* **** end USTENSILS LIST DATA ARRAY ******************************************* */