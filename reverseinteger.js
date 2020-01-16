/* Algo practice, coding along with Stephen Grider's Udemy course */

// Given an integer, return an integer that is the reversed ordering of numbers
// Examples
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

function reverseInt(n){
    const reversed = n.toString().split('').reverse().join('');

    if(n < 0) {
        return parseInt(reverse) * -1;
    }
    return parseInt(reversed);
    
}
