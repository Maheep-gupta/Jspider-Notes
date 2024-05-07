class Array1 {

    public static void main(String[] args) {
        int[] arr1 = { 10, 20, 30, 40, 50 };
        int index = 0;
        System.out.println("Size of array" + arr1.length);
        System.out.println("Printing the array elements");
        // Normal printing of an Array

        while (index < arr1.length) {
        System.out.println(arr1[index++]);
        }

        // Reverse Printing of an array using while loop
        index = arr1.length - 1;
        while (index >= 0) {
            System.out.println(arr1[index--]);
        }
    }
}