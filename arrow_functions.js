var names = ["Piotr", "Jan", "John", "Antoni"]

// names.forEach(function(name){
//   console.log('name:', name)
// })
//
// names.forEach((name) => {
//   console.log('arrow function',name)
// });
//
// names.forEach((name) => console.log("simplified",name))

// var returnMe = (name) => name + '!';
// console.log(returnMe('Piotr'));

// var person = {
//   name: 'Andrew',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }
//
// person.greet()

//Challenge aeria
function add(a,b){
  return a + b
}

//addStatement

var addStatement =  (a,b) => {
  console.log(a + b)
}

//addExpression

var addExpression = (a,b) => a + b

addStatement(2,3)
addStatement(3,4)

console.log(addExpression(12,23))
