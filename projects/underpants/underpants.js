// This is the proper way to start a javascript library
(function() {
  
// This makes the arguments variable behave the way we want it to and a few
// other things. For more info: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// This allows us to use our "_" anywhere. In a web browser, properties of window
// are available everywhere without having to type "window."
/* global _ */
window._ = {};

/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/


_.identity = function(value){
    return value;
};



_.typeOf = function(value){
  if(Array.isArray(value)) return "array";
  if(value === null) return 'null';
  if(value instanceof Date) return 'date';
  return typeof value;
  
    
};

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first(["a","b","c"], 1) -> "a"
*   _.first(["a","b","c"], 2) -> ["a", "b"]
*   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/


// _.first = function(collection, number){
//     var newArray = [];
//     if (!Array.isArray(collection)){ 
//         return [];
//     } else if (isNaN(number || typeof number === undefined)){
//         return collection[0];
//     } else if(collection.length < number){
//         return collection;
//     } else {
//         for (var i = 0; i < number; i++)
//         newArray.push(collection[i]);}
//         return newArray;
// };

_.first = function(array, number){
    if(Array.isArray(array) === !true || number < 0) return [];
    if (number === undefined) return array[0];
    if(isNaN(number)){ 
        return array[0];
    } else {
        return array.slice(0, number);
    }
};

// go back with slice

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <nubmer> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last(["a","b","c"], 2) -> ["b","c"]
*   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
*/

_.last = function(array, number){
    if(Array.isArray(array) === !true || number < 0) return [];
    if (number === undefined) return array[array.length-1];
    if(array.length < number){
        return array;
    }
    if(isNaN(number)){ 
        return array[0];
    } else {
        return array.slice(-number);
    }
};

// prob go back with slice

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments: 
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)}); 
*      -> should log "a" "b" "c" to the console
*/


_.each = function(collection, action){
    if(Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++)
            action(collection[i], i, collection);
    } else {
        for (var key in collection){
            action(collection[key], key, collection);
        }
    }
}


/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/



_.indexOf = function(array, value){

for(var i = 0; i < array.length; i++){
 if (array[i] === value){
     return i;
}
} return -1;
};

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(collection, test){
    var filtered = [];
    _.each(collection, function(element, index, value){
        if (test(element, index, value)){
            filtered.push(element);
        }
    });
    return filtered;
};

/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(list, test){
    return _.filter(list, function (element, index, array){
    return(!test(element, index, array));

    });

};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


_.partition = function(array, test){
    var partitioned = [];
    var x = _.filter(array, function(el, index, collection){
    return test(el, index, collection);    
    }); 
    var y = _.reject(array, function(el, index, collection){
    return test(el, index, collection);    
    });
    partitioned.push(x, y);
    return partitioned;
};

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// CANT FIGURE OUT HOW TO DO WITHOUT LOOPS

_.unique = function(array){
    var oneEach = [];
    _.each(array, function(element, index, array){
        if (_.indexOf(oneEach, element) === -1){
            oneEach.push(element);
        } 
    });
    return oneEach;
};


/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


_.map = function(collection, action){
    var mapped = [];
    _.each(collection, function(value, index, collection){
        mapped.push(action(value, index, collection));
    });
    return mapped;
};


/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){
    return _.map(array, function(element, index, collection){
        return element[property];
    });
};


/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    var results = array.indexOf(value) > -1 ? true : false;
    return results;
};


/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/




_.every = function(collection, test){
    if (test === undefined){
        test = _.identity;
    }
  var value = _.map(collection, test);
     if (_.indexOf(value, false) < 0){
         return true;
     } else {
         return false;
     }
};

// _.every = function(collection, test){
//     var result = false;
//     if (test === undefined){
//         test = _.identity;
//     }
//   result = _.map(collection, function(element, index, collection){
//      return test(element, index, collection);
//   });
//   if (_.indexOf(result, false) === -1)
//      { 
//          return result = true;
//     };
// };


//   _.every= function (collection, evFunc) {
//     var watchOut = true;
//     if(evFunc === undefined){
//         evFunc = _.identity;
//     }
//     _.each(collection, function(element, index, collection) {
//         if (evFunc(element, index, collection) === false) {
//             return watchOut = false;
//         }
//     }); 
//     return watchOut;
// }


/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

// _.some = function(collection, test){
//     var mapped = _.map(collection, function(element, index, value){
//         test(element, index, value);
//     });
//     if(mapped.indexOf(true) > -1){
//         return true;
//     } else {
//         return false;
//     }
// }

_.some = function(collection, test){
     if (test === undefined){
        test = _.identity;
    }
    var value = _.map(collection, test);
    if (Array.isArray(value)){
        if (_.indexOf(value, true) > -1){
            return true;
        } else {
            return false;
        }
    }
}


/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
*/



_.reduce = function (array, action, seed){
    if (seed === undefined){
        seed = array[0];
        var i = 1;
    } else {
        i = 0;
    }
    for(i; i < array.length; i++){
      seed = action(seed, array[i], i); 
    }
    return seed;
};




/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


// _.extend = function(obj1, obj2){
//     _.each(arguments.length, function(value, index, collection){
//         _.each(arguments, function(value, index, collection){
//             arguments[index].value = arguments[0].value;
//         });
//     }); 
// };

// function extend(obj1, obj2){
//     for(var i = 1; i < arguments.length; i++){
//         _.each(arguments, function(value, index, collection){
//             arguments[index].value = arguments[0].value;
//         })
//     } 
// }

_.extend = function (object1, object2){
    for(var i = 1; i < arguments.length; i++){
        for (var keys in arguments[i]){
            object1[keys] = arguments[i][keys];
        }
    }
return object1;  
};


// This is the proper way to end a javascript library
}());
