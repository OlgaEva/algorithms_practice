/* Directions

Given an array and a chunk size as arguments, divide the 
array into many sub-arrays where each sub-array is of length size
*/

function chunk(array, size) {
    const chunked = [];

    for (let elem of array){
        const last = chunked[chunked.length - 1];

        if(!last || last.length === size){
            chunked.push([element]);
        }else{
            last.push(element);
        }
    }
    return chunked;
}