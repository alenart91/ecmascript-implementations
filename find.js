// https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find

Array.prototype.myFind = function(predicate, thisArg) {
    
    // 1. Let O be ? ToObject(this value)
    let O = Object(this);

    // 2. Let len be ? LengthOfArrayLike(O)
    let len = O.length;
    
    // 3. If IsCallable(predicate) is false, throw a TypeError exception
    if(typeof predicate !== 'function') {
        throw new TypeError(`${callbackfn} is not a function`);
    }
    
    // 4. Let k be 0
    let k = 0;
    
    // 5. Repeat, while k < len
    while(k < len) {

        // a. Let Pk be ! ToString(𝔽(k))
        let Pk = k.toString();

        // b. Let kValue be ? Get(O, Pk)
        let kValue = O[Pk];
        
        // c. Let testResult be ToBoolean(? Call(predicate, thisArg, « kValue, 𝔽(k), O »))
        let testResult = Boolean(predicate.call(thisArg, kValue, Pk, O));
        
        // d. If testResult is true, return kValue
        if(testResult) {
            return kValue;
        }
        
        // e. Set k to k + 1
        k++;
    }
    
    // 6. Return undefined
    return undefined;
};