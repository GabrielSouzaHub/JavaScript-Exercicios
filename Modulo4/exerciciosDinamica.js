//Exercício 1
const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

const sum = ((...valores) =>  valores.reduce((acc, next) => acc + next));

sum(...array)

//Exercício 2

const fetch = require("node-fetch");

async function requisic(){
const req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
let dados = await req.json();
dados = dados.meals[0];
console.log(
    `
    Id:${dados.idMeal}
    Nome:${dados.strMeal}
    Área:${dados.strArea}
    Ingredientes:${dados.strIngredient1},${dados.strIngredient2},${dados.strIngredient3},${dados.strIngredient4},${dados.strIngredient5},${dados.strIngredient6},${dados.strIngredient7},${dados.strIngredient8},${dados.strIngredient9}
    Instruções:${dados.strInstructions}
    `);
}

requisic();

//Exercício 3

async function list (){
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
')
    const json = await res.json();
    const meals = json.meals
    const result = meals.slice(0,10);
   //  const result2 = meals.filter(prato => prato.slice(0,10))
    console.log(result)
 }
 list()