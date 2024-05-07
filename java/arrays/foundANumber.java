class foundANumber {
    public static void main(String[] args) {
        int num[] = { 1, 2, 3, 4, 5, 6,5 };
        int numberToFind = 5;
        boolean found=false;
        for (int index = 0; index < num.length; index++) {
            if (num[index] == numberToFind) {
                found = true;
                break;
            }
        }
        if (found) {
            System.out.println("Number found in the array");
            
        } else {
            System.out.println("Number not found in the array");
            
        }
    }
}
