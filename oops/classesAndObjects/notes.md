# Classes And objects

< accessSpecifier > < Modifer > class ClassName{  
    define variables;  
    define variables;  
    define variables;       
    define Functions;  
    define Functions;  
    define Functions;  

}
## Points to be remembered 
- Variables are known as member variables.
- Functions are known as member Functions.
- The combine of both variables and functions are known as members of class
- class declaration:- `< accessSpecifier > < Modifer > class ClassName`
- Member of class contains of two type of member
  1. Static member
  2. Non-Static member
- In java there are only two types of variable :- 
    1. Local variable
    2. Member Variable
        1. Static variable
       2. Non-Static variable 
### Local variable
- `Definition`: Variables that are declared inside a method, constructor, or block.
- `Scope`: Only accessible within the method, constructor, or block where they are declared.
- `Lifetime`: Created when the method, constructor, or block is entered, and destroyed when it is exited.
- `Initialization`: Must be explicitly initialized before they are used.

### Member variable
- `Definition`: Variables that are declared with the static or no keyword inside a class but outside any method, constructor, or block.
- `Scope`: Accessible throughout the class and shared among all instances of the class
- `Lifetime`: Created when the class is loaded into memory and destroyed when the class is unloaded.
- `Initialization`: Automatically initialized to default values.

# Variables in java
1. Based on Declaration Type
   1. primitive Type Variable 
      - 8 type of data types   
   2. Non primitive Type variable
      1. class type variable
      2. interface type variable
      3. enum type variable
2.  Based on place of declaration (Scope)
    1. Local variable
    2. Member Variable
        1. Static variable
       2.  Non-static variable

## Examples of Class
1. Empty class

        class Example1 {
        }
2. Class with only Static members

        class Example2 {
        static int x=10;
         static void f1(){ ------ }
         }
3. Class with only instance member

         class Example3 {
          int x=10;
          void f1(){ ------ }
         }
4. class with both static and Non-static member
   
          class Example4 {
          static int x=10; 
          int y;
          void f1(){ ------ }
         }
### Notes
- Member of one class can be accessed in another class by using dot(.) operator
  - Static variables can be reinitialized.   
  j