// let umBeloArray =
// [
//     {
//         nome: "Gabriel",
//         idade: 0, // deveria ser 10
//     },
//     {
//         nome: "Lais",
//         idade: 0, // deveria ser 20
//     },
//     {
//         nome: "Vitrola",
//         idade: 0, // deveria ser 30
//     },
//     {
//         nome: "qual_das_anas",
//         idade: 0, // deveria ser 40
//     },
// ];
// let i = 10;
// umBeloArray.forEach( function(p1){
//     p1.idade = i;
//     console.log(p1);
//     i += 10;
// });

// console.log( umBeloArray );

let array = ["a","b","c"];
let i = 0;
array.forEach(function(p1){
    p1 = i;
    console.log(p1);
    i++;
});
console.log(array);