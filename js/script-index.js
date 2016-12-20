$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
    for (var i = 0 ; i < recipesArray.length ; i++){
        // verificar highlited = true
        if(recipesArray[i].highlighted === true ){
            renderRecipe(this.recipesArray);
           }
    }



    // ocultar flecha cuando se muestra index.html
    var locations = window.location.href;
    function hide (locations){
        if(locations.includes("index")){
            $(".js-back").hide();
        }
        else if(locations.includes("recipe")){
            $(".js-menu").hide();
        }
    }

    hide(locations);
    // pintar una noticia
    function printNews(){
        $(".callout-news").find($("p")).html("NUEVAS RECETAS");
    }
    printNews();

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
    var title = recipesArray.title;
    var author = recipesArray.source.name;
    $(".list-recipes").append($("<ul></ul>"));
    $(".list-recipes > ul").append($("<li>" + title + "</li>"));
    $(".list-recipes > ul ").append($("<li>" + author + "</li>"));
	//console.log('Voy a pintar la receta: ', recipe);

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


