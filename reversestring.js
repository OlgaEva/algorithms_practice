/* Algo practice, coding along with Stephen Grider's Udemy course */

// Given a string, retuns a new string with the reversed order of characters

function reverse(str) {
    const rev = str.split('').reverse().join('');

    return rev;
}