public class SumofArray {
    public static int SumofArray(int[] array) {
        int sum=0;
        for (int i = 0; i < array.length; i++) {
            sum = sum+array[i];
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        
        System.out.println(SumofArray(arr));
    }
}
