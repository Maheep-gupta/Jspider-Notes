# Why main Function is Necessary?
    Ans: We need main function to begun the execution as the command "java className" calls the JVM and the JVM     calls the main function if the function is found then it starts the exectuion otherwise it gives an RunTime   error as "Main function is not define"  

    java ClassName
     |
     |
     |
     1.command to start jvm
     2. jvm calls the main() method of the class mentioned in cmd ---> if finds main(),call it ,if not  found, thows the error  
     before Calling, JVM takes all the Commnd line arguments and create a String array,that array is passes to main()
     - Main method is known as entry point for execution.                                     