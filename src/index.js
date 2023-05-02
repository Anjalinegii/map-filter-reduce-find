import React from "react";
import emojipedia from "./emojipedia";
const shortArray =emojipedia.map(function(emoji){
  var meaning=emoji.meaning;
  return meaning.substring(0,100)
})
console.log(shortArray)
// below is the theory about map,find,findIndex,reduce,filter
// var numbers = [3, 56, 2, 48, 5];
//Map -Create a new array by doing something with each item in an array.
// var newNumbers= numbers.map(function(x){
//   return x*2;
// })
// console.log(newNumbers)
//Filter - Create a new array by keeping the items that return true.
// const newNumbers=numbers.filter(function(x){
//   return x<10;
// })
// console.log(newNumbers)
// we can do that using foreach also
// const newNumbers=[]
// numbers.forEach(function(x){
//   if(x>10){
//     newNumbers.push(x);
//   }
// })
// console.log(newNumbers)
//Reduce - Accumulate a value by doing something to each item in an array.
// var result =0;
// numbers.forEach(function(currentNumber){
//   result+=currentNumber
// })
// console.log(result)
// we can do the same using reduce function
// const result=numbers.reduce(function(accumulator,currentNumber){
//   return accumulator+currentNumber;
// })
// console.log(result)
//Find - find the first item that matches from an array.
// const newNumber=numbers.find(function(x){
//   return x>10;
// })
// console.log(newNumber)
//FindIndex - find the index of the first item that matches.
// const newIndex=numbers.findIndex(function(x){
//   return x==5;
// })
// console.log(newIndex)