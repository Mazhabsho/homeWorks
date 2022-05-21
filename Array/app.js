                             //Array 
//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
  //The method of array
  //pop() adds an element to the end:

 let fruit1 =['apple', 'orange', 'pear', 'apricot'];
 let fruit2 =['Gooseberries','Guava','Grapefruit', 'Mandarin']
  
 fruit1.forEach(function(item, index, array){
    console.log(fruit1)
})
let  add = fruit1.push('Апельсин'); //add item in  the end
let deleteItem = fruit1.pop(); //delete item  ain the end
let deleteFirst = fruit1.shift() // delete first item
let addFirt = fruit1.unshift('cherry')  //add elem in the begginning
let fruit3 = fruit1.concat(fruit2) 
let result = fruit1.filter(fruit1 => fruit1.length > 4)
console.log(result);
//find()
  let users = [
      {id:1, name: 'Max'},
      {id:2, name: 'Guldona'},
      {id:3, name: 'Parivash'},
      {id:4, name: 'benazir'},
      {id:5, name: 'Nushin'}
  ];

  let user = users.find(item => item.id == 1);
  console.log(user.name);

//filter()
let letter = ['Pineapple', 'Persimmon','Quince', 'Strawberries', 'Watermelon']
 let spereteLetter = letter.filter((letter, index,arr) =>{
      arr.pop();
      return letter.length > 6
 })
console.log(letter);


//map()
let num = [1,5555,8,7,5,26,15,54,500];
let plusnum = num.map(function(elem){
    return elem + 10;
})
console.log(plusnum);

//reduce()
   let number= [22,5,4,8,84,65,699,9]
   let resultss = number.reduce(function(prev, curr){
       return prev + curr;
   })
console.log(resultss);

//join()
let nums = [22,122,555,33,8,880,252,25];
console.log(nums.join('+'));

//includes
let nume = ['Diliy', 'Devid', 'Sabir', 'Benazir']
console.log(nume.includes('Benazir'));