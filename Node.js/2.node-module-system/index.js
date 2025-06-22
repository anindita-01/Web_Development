


const firstModule= require ('./first-module');

console.log(firstModule.divide(2,5));

try {
    console.log('trying to divide by zero');
   let result = firstModule.divide(0,10);
   console.log(result);
} catch (error) {
    console.log("caught an error,", error.message);
}

//module wrapper

(
    function(exports, require, module, _filename, _dirname){
        //code 
    }
)

