/* Directions:

Write a program that console logs the numbers from 1 to n. 
But for multiples of three, print "fizz" instead of the number
and for multiples of five, print "buzz". For multiples of both 
three and five, print "fizzbuzz"

*/

function fizzBuzz(n) {
    for(let i = 1; i <= n; i++){
        //check if n multiple of both 3 and 5
        if(i%15===0){
            console.log("fizzbuzz");
        //check if n is multiple of 3
        }else if(i%3===0){
            console.log("fizz");
        //check if n is multiple of 5
        }else if(i%5===0){
            console.log("buzz");
        }else{
            console.log(i);
        }
    }
}