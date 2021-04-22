//in html File
//<!-- <script type = "text/javascript" src= "arrow.js"></script>  -->
////<!-- <script type = "text/javascript" src= "spread.js"></script>  -->
//<!-- <script type = "text/javascript" src= "arrow.js"></script>  -->
//!-- <script type = "text/javascript" src= "arrow.js"></script>  -->

//<!-- <script type = "text/javascript" src= "arrow.js"></script>  -->
//
res => res.json
//difference between function defs and invocatiion is super important
//func defs can be passed from object to object
function funcName(){
    return "Hello"
}
//any function can be invoked with the use of () -IIFE (iffy)
// we have to talk abou callbacks - 3 imp array methods - Map n Filter

// ****** MAP
    // 
    arrayOfNumbers.map(function(num){return num + 1})
    //so if
    let higherNumbers = arrayOfNumbers.map(function(num){return num + 1})
    // map is non destructive. always returns the new transformation with the same number of elements
    let wordCount = arrayOfStrings.map((animalStr) => animalStr.length)

    //APPLICATION   get notes!! just transforms the array but can have different elements
    //LISTS ETC - GOING FROM ARRAY OF POJOS TO 

    //********* Filter - if filter down array of dogs gives an array of dogs - smaller or filtered downarray
    let evenNumbers = arrayOfNumbers.filter(function(num){return num % 2 === 0}) //its a true or false
    // filter reduces the array down - use it for going for an array of POJOS to a smaller array of POJOS
    // callback of filter returns array of same element html element




    // ******* SORT --- destructive - mutates - 2 arguments in callback parameters - representing elements of that array
    //localeCompare - returns 0, -1 or 1 - in strings - alphabetized
    // read spread operator
    // For strings - locale.compare, numbers - uses a subtract, objects - locale.compare
    //{} and functions - allows to use more logic

    
