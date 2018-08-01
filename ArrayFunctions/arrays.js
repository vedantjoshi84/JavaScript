//printReverse function is printing your array elements backwards.

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
//isUniform function is gives you a true if all your elements in your array are identical.

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;

}

//sumArray functions adds all the elements inside of an array.
function sumArray(arr) {

    for (var i = 0, sum = 0; i < arr.length; i++) {
        sum = arr[i] + sum
    }

    return sum

}

//max function is showing the biggest element in an array.
function max(arr){
    var max = arr[0];

    for(var i = 1; i < arr.length; i++) {

        if ( arr[i] > max) {
            max = arr[i] 
        }
    }
    return max;
}