// https://262.ecma-international.org/5.1/#sec-15.4.4.19
// https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map

Array.prototype.myMap = function(callbackfn, thisArg) {
  
    // 1. Let O be ? ToObject(this value)
    let O = Object(this);
  
    // 2. Let len be ? LengthOfArrayLike(O)
    let len = O.length;
  
    // only objects with internal method [[call]] are treated as functions
    // 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
    if(typeof callbackfn !== 'function') {
      throw new TypeError(`${callbackfn} is not a function`);
    }
    
    // 4. Let A be ? ArraySpeciesCreate(O, len).
    let A = new Array(len);
  
    // 5. Let k be 0.
    let k = 0;
    
    // 6. Repeat, while k < len
    while(k < len) {
      // a. Let Pk be ! ToString(𝔽(k)).
      let Pk = k.toString();
  
      // b. Let kPresent be ? HasProperty(O, Pk).
      let kPresent = O.hasOwnProperty(Pk);
      
      // c. If kPresent is true, then
      if(kPresent) {
        
        // i. Let kValue be ? Get(O, Pk).
        let kValue = O[Pk];
  
        // ii. Let mappedValue be ? Call(callbackfn, thisArg, « kValue, 𝔽(k), O »).
        let mappedValue =  callbackfn.call(thisArg, kValue, k, O);
        
        // iii. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
        Object.defineProperty(A, Pk, {
          value: mappedValue,
          writable: true,
          enumerable: true,
          configurable: true
        });
  
      }
  
      // d. Set k to k + 1.
      k++;
    }
    
    // 7. Return A
    return A;
  };