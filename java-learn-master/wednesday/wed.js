//Function Declaration
//The classic way. These are hoisted, meaning you can call them even before they appear in your code.

function greet(name) {
    return "Hello, " + name + "!";
}

//Function Expression
//Here, you store the function in a variable. These are not hoisted.
const greet = function (name) {
    return `Hello, ${name}!`;
};

//Arrow Functions (ES6+)
//The modern, sleek version. They are great for short,
// one-liner logic and handle the this keyword differently than traditional functions.
const greet = (name) => `Hello, ${name}!`;
/*


2. Parameters vs. ArgumentsPeople often use these terms interchangeably, 
but there's a slight difference:Parameters: The placeholders defined in the function (the "labels").
Arguments: The actual values you pass into the function when calling it



.3. Scope and ClosuresThis is where JavaScript gets
 interesting (and sometimes a bit trippy).Global Scope: Variables defined outside a function are accessible everywhere.
 Local Scope: Variables defined inside a function stay inside.
 Closures: A function "remembers" the environment in which it was created. 
 This allows an inner function to access variables from an outer function even after the outer function
  has finished executing




 .4. Why Use Functions?Don't Repeat Yourself (DRY): If you're writing the same code twice, 
 it belongs in a function.Organization: They break complex problems into smaller,
  manageable chunks.Abstraction: You don't need to know how Math.random() works to use it;
   you just need to know what it gives you.Comparison at a GlanceFeatureFunction
    DeclarationArrow FunctionHoistingYesNothis bindingDynamic (depends on caller)Lexical 
   (inherited from parent)SyntaxVerboseConciseUsageGeneral purposeCallbacks,
    short logicWould you like me to dive deeper into Closures, 
or should we look at how "Higher-Order Functions" like .map() and .filter() work? */


/*Feature,Function Declaration,Arrow Function
Hoisting,Yes,No
this binding,Dynamic (depends on caller),Lexical (inherited from parent)
Syntax,Verbose,Concise
Usage,General purpose,"Callbacks, short logic" */