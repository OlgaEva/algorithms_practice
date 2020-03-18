/* Directions:

Given a string, return the character that is most commonly 
used in the string
Examples:
maxChar("aaabbbcccccccccd") === "c"
maxChar("hello") === "l"

*/


function maxChar(str){
    let max = 0;
    let charMap = {};
    let maxChar = '';

    for(let char of str){
        if(!charMap[char]){
            charMap[char] = 1
        } else {
            charMap[char] += 1
        }
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}