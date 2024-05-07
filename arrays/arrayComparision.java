class arrayComparision {
    public static void main(String[] args) {
        int num[] = { 1, 2, 3, 4, 5, 6 };
        int num2[] = { 1, 2, 3, 4, 5,6 };
        boolean identical = true;
        if (num.length == num2.length) {
            for (int index = 0; index < num.length; index++) {
                if (num[index] != num2[index]) {
                    identical = false;
                    break;
                }
            }
            if (identical) {
                System.out.println("The array are equal");
            } else {
                System.out.println("The array is not equal");
            }
        }
    }
}
