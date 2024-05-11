public class reverseArray {
    public static int[] reverseArray(int[] array) {
        int[] reverseArray = new int[5];
        int j = 0;
        for (int i = array.length - 1; i >= 0; i--) {
            reverseArray[j] = array[i];
            j++;
            // System.out.println(array[i]);
        }
        return reverseArray;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        int[] returnedArray = reverseArray(arr);
        for (int i = 0; i < returnedArray.length; i++) {
            System.out.println(returnedArray[i]);
        }
    }
}
