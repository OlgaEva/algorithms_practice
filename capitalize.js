/* Directions

Write a function that accepts a string. The function should capitalize the first letter of each word
then return the capitalized string.

*/

function capitalize(str) {
    var splitzville = str.split(' ');
    var newString = [];
  
    for(elem of splitzville){
      newString.push(elem[0].toUpperCase() + elem.slice(1))
    }
  
    return newString.join(' ');
  }