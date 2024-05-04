public class occurance {
    public static void main(String[] args) {
        int num[] = { 1, 3, 3, 3, 5, 6 };
        int givenNum = 3;
        int occurance = 0;
        for (int index = 0; index < num.length; index++) {
            if (num[index] == givenNum) {
                occurance++;
            }
        }
        System.out.println("Number occured " +occurance+ " times");
    }
}
