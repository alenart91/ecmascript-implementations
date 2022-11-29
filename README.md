# ecmascript-implementations
A repository for implementing the ECMAScript specs in JavaScript code.

The ECMAScript specifications can be confusing and ambiguous. This Repo aims to implement the code in the documentation as close as possible with vanilla JavaScript. Hopefully it can also serve as a good source for interpreting the often times overwhelming documentation.

What are abstract operations? 

Abstract operations are a notation spec that the document writers created so they don't have to repeat the same instructions throughout the documentation. The operations aren't actually exposed as functions / methods in JavaScript code. 

This repository actually implements all abstract operations into code:
https://github.com/ljharb/es-abstract


What is [[thisSyntaxInTheDocuments]]?

This particular syntax is used to describe multiple things depending on the context. It can represent Internal Slots, Internal Methods, or Records.

Internal Slots have a value. Internal methods have functionality. Records are an aggregation of fields (key value pairs) used to describe data in the specs.

What are Internal Slots?

Internal slots are not object properties and they are not inherited. Internal slots are data members of a JavaScript object or a specification type. They are used for storing the state of the object.


What are Internal Methods?

Internal Methods are member functions of a JavaScript object. People often confuse Internal Methods as actual functionality. These are simply used to describe the appropiate behavior and are not available in JavaScript.


Read more about internal methods and slots:
https://tc39.es/ecma262/#sec-object-internal-methods-and-internal-slots


What are Record Types?

A Record type value consists of one or more named fields. The value of each field is an ECMAScript language value or specification value. Field names are always enclosed in double brackets, for example [[Value]].

Commonly used Record field combinations are named. Such as PropertyDescriptor { [[Value]]: 42, [[Writable]]: false, [[Configurable]]: true }.

Read more about record types:
https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-list-and-record-specification-type



Other good sources for reading ECMAScript documentation:

https://timothygu.me/es-howto/#prelude

https://v8.dev/blog/understanding-ecmascript-part-1
