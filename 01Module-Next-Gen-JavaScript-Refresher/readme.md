## Refresher Notes on JavaScript ES6

### Declaring Variables

#### let vs const

let- if you want to create a variable if you want to create a variable.

const- is used for constant values. 

#### Arrow Functions

```
normal JavaScript Function:
    function myFNC() {
        .... statement
    }
```
```
arrow JavaScript Function:
    const myFNC = () => {
        .... statement
    }
```
    The arguments for an arrow function go between the paranthesis, If there is only one argument, you are able to omit the parathensis. ``` = name => ```
    If there is no argument, you should still include paranthesis as shown in the arrow function above. ``` = () => ```
    If there are multiple arguments you need to use paranthesis and separate the arguements with commas. ``` = (name, age, location) => ```

If you are writing an arrow function and you only have one line in your statment area, you are able to omit the curly braces and write the code on one line, for example:

```
const multiply = (number) => return number * 2;

console.log(multiply(2));
```


#### Exports & Imports (Modules)

The idea behind export and import statements and modules, is that you are able to import code from other files. You are able to name default import files whatever you would like. The most important part is the file path that the import name refers to. 

```
import person from './utility.js';

import prsn from './utility.js';

import person1 from './utility.js';
```

However if you are importing non default code, you name the imported code by the name of what it is you are importing within curly braces. 
```
import {smth} from './utility.js';
```
You can also assign an alias within the curly braces if you would like to reassign the name 
```
import {smth} from './utility.js';

import {smth as Smith} from './utility.js';
```
```
import * as bundled from './utility.js';
```

Because not all browsers will support the JavaScript features used in this course, we need to use a JavaScript Preprocessor to make sure the code can be accessed from different browsers without breaking. It compiles the next generation javascript into current javascript code so that we can still use it.

#### Classes

Classes are blueprints for objects, JavaScript Objects.

Classes can have both properties and methods. The property would be considered 'Max' while the Method would be the call arrow function shown below.
```
class Person {
    name = 'Max';  
    call = () => {...}
}
```


