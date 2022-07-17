let addIngredient = document.getElementById('.addIngredient');
let ingredientList = document.querySelector('.ingredientList');
let ingredientSection = document.querySelectorAll('.ingredientSection');

addIngredientButton.addEventListener('click', function(){
    let newIngredient = ingredientSection.cloneNode(true);
    let input = newIngredient.getElementByTagName('input')[0];
    input.value = '';
    ingredientList.appendChild(newIngredients);
});