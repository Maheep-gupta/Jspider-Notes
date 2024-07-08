# Functions:
----------
- it is block of satement/code written to perform a task/operation  
 - to achive reusebility -(write one use many time ) and Modulaity  
 - functons are basic block of any language  

 In java functions and methods are one and same   


 ## Syntax :-
 <access_specifier> <access_modifier> returntype functionName(<parameter list>){  
    ---------------------  
    code to operation  
    ---------------------  
    return value;  
 }  

## Method/Function has 2 parts
1.Method Declarartion  
2.Method body  

## Questions
 ### Q. How to define a function?  
 Ans. follow the syntax

 ### Q. where to define the function?  
Ans. anywhere inside tthe class body,before main method or after main mehod

 ### Q. How to execute the function?  
 Ans. call the function

### Q. How to call a function?  
 Ans. functionName(); --> function calling statement

## e.g
// function declaration  
public static void test(){   
    SOP("Function run");  
}  

PSVM(String[] args){  
    test() ---> Function calling  
}  

## Regulations
- function name should indiacte the operation
- be careful about local variable

## Local Variable:
------------------
A variable declare inside the function body   

### Q what is the scope of Local variable?
The scope is limited to function body,meaning it cannot be access outside the function body   


## Function Return Type
 The function return type indicates the type of value returned by the function
## return statement 
This is used to return thr value to the caller function

### Syntax
return value;

### e.g.
1. 
public static void f1(){  
    return '' ;  
}  
the function returns nothing  
2.  
public static int f1(){  
    ---  
    ---  
    return int value;   
}  
3. 
public static String f1(){  
    ----  
    ---  
    return String Value;  
}  

- if we haven't given the return type then it shows the <b> error : missing return type</b>
- if we have given int the return type, and we are returning the float value then it gives <b>error :
 type mismatch or not compatible</b>
- we can call a function inside an expression, if it is returning some value,e.g  <b>int res=squar(a)+square(b)</b>
- we shouldn't write anything after the return statement since the control will never go to that statement, and it will cause error and that code will become an unreachable code.