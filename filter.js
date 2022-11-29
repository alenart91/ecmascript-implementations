// https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.filter

Array.prototype.myFilter = function(callbackfn, thisArg) {

    // 1. Let O be ? ToObject(this value)
    let O = Object(this);

    // 2. Let len be ? LengthOfArrayLike(O)
    let len = O.length;

    // 3. If IsCallable(callbackfn) is false, throw a TypeError exception
    if(typeof callbackfn !== "function") {
        throw new TypeError(`${callbackfn} is not a function`);
    }

    // 4. Let A be ? ArraySpeciesCreate(O, 0)
    let A = new Array(0);
    
    // 5. Let k be 0
    let k = 0;

    // 6. Let to be 0
    let to = 0;
    
    // 7. Repeat, while k < len
    while(k < len) {

        // a. Let Pk be ! ToString(𝔽(k))
        let Pk = k.toString();
        
        // b. Let kPresent be ? HasProperty(O, Pk)
        let kPresent = O.hasOwnProperty(Pk);
        
        // c. If kPresent is true, then
        if(kPresent) {

            // i. Let kValue be ? Get(O, Pk)
            let kValue = O[Pk];
            
            // ii. Let selected be ToBoolean(? Call(callbackfn, thisArg, « kValue, 𝔽(k), O »))
            let selected = Boolean(callbackfn.call(thisArg, kValue, k, O));
            
            // iii. If selected is true, then
            if(selected) {
                
                // 1. Perform ? CreateDataPropertyOrThrow(A, ! ToString(𝔽(to)), kValue)
                Object.defineProperty(A, to.toString(), {
                    value: kValue,
                    writable: true,
                    enumerable: true,
                    configurable: true
                  });

                // 2. Set to to to + 1
                to++;
            }
        }
       
        // d. Set k to k + 1
        k++;
    }
    
    // 8. Return A
    return A;
};