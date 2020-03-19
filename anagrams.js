/* Directions

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces or punctuation.
Consider capital letters to be the same as lower case.
*/

function anagrams(stringA, stringB){
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}







// function anagrams(stringA, stringB) {
//     let charMapA = {};
//     let charMapB = {};

//     for(let char of stringA.toLowerCase()){
//         if(!charMapA[char]){
//             charMapA[char] = 1;
//         }else{
//             charMapA[char] += 1;
//         }
//     }
//     console.log(charMapA);

//     for(let char of stringB.toLowerCase()){
//         if(!charMapB[char]){
//             charMapB[char] = 1;
//         }else{
//             charMapB[char] += 1;
//         }
//     }
//     console.log(charMapB);

//     return charMapA == charMapB;
// }

// Called this with anagrams("abba", "baba") and it didn't 
// work because it was missing the sort() step 