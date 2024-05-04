class Homework {
    public static void main(String[] args) {
        int number = 22;

        if (number % 15 == 0) {
            System.out.println("FizzBuzz");
        } else if (number % 5 == 0) {
            System.out.println("Buzz");
        } else if(number%3==0){
            System.out.println("Fizz");
        }
    }
}

