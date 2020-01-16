/* Algo practice, coding along with Stephen Grider's Udemy course */

// Given a string, return true if the string is a palindrome or 
// false if it is not.

function palindrome(str){
    const rev = str.split('').reverse().join('');

    return str === rev;
}

