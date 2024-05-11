public class square {
    public static int sqaure(int n) {
        return n * n;
    }
    public static void main(String[] args) {
        int res = sqaure(5) + sqaure(6) + 2 * 5 * 6;
        System.out.println(res);
    }
}