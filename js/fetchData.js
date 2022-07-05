//---> RECEIVED FROM JSON FILE
/* ************************************************************************ */
/*          FETCH RETURN DATA From JSON File                                */ 
/* ************************************************************************ *

async function getData(){
    const fechResult = await fetch("data/recipes.json");
    const { recipes } = await fechResult.json();
    return recipes
}

getData()
.then(recipesResultData => {
    recipesResultData.map(resultMap =>{
    defaultRecipesArray.push(resultMap);
    defaultRecipesArray = [...new Set(defaultRecipesArray)];
    });
    new InputsFilters(recipesResultData);
});
*/
let defaultRecipesArray=[];

function getData(){
    recipes.map(resultMap =>{
        defaultRecipesArray.push(resultMap);
        defaultRecipesArray = [...new Set(defaultRecipesArray)];
    });
    new InputsFilters(recipes);
}
getData()
/* ************************************************************************ */ 
//- EOF -//
//<--- SEND TO INPUTS AND TAGS