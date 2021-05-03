//1)
const upperName = name => name.toUpperCase();
const myFunction = (p1, p2) => p1 * p2;
const toCelsius = fahrenheit => (5 / 9) * (fahrenheit - 32);

//2)
function handleMouseMove(clientX, clientY) {
    console.log(clientX, clientY);
}

//3)
const obj = { first: 'Jane', last: 'Doe' };
const {first} = obj;

//4)
const company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };
const [a,b] = [company.name, company.products.shirts.colors];

//5 e 6)
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };
const newClothes = {...clothes, shoes: {colors: ['yellow', 'purple']}}

//7)
const numbers = [4, 9, 16, 25];
const squad = numbers.map(value=>value*value);

//8)
const numbers = [65, 44, 12, 4];
const mult = numbers.forEach((value,i)=>{
    numbers[i] = value*10;
})
mult;

//9)
const ages = [32, 33, 16, 40];
const newAge = ages.filter(value=>value>17)

//10 e 11)
data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];
let soma = 0;
const newData = data.filter((value)=>{
    if(value.type=='dog'){
        soma += value.age;
        return value;
    }
})

newData;
newData.push({'age(all)':soma, type:'dog'})

//12)
var getShirtsColorsAmount = company => {
    const { colors } = company.producst.shirts.colors;
    return colors.length;
  };

//13)
const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};
const {pants,...rest} = clothes

//14)
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
[, ...arr3] = arr;
[, ...arr4] = arr2;
const array5 = [...arr3, ...arr4];

//15)
const persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
  ];

const completeName = [];
persons.forEach((value)=>{
    completeName.push(`${value.firstname} ${value.lastname}`);
})
