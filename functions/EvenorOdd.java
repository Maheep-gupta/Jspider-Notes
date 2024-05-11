/**
 * EvenorOdd
 */
public class EvenorOdd {    
    public static boolean checkEven(int number) {
        boolean isEven = false;
        if (number % 2 == 0) {
            isEven = true;
        }
        return isEven;
    }
    public static void main(String[] args) {
        boolean isEvenOrOdd = checkEven(3);
        System.out.println(isEvenOrOdd);
    }
}