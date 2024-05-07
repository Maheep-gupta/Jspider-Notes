class evenIndex {
    public static void main(String[] args) {

        int num[] = { 1, 2, 3, 4, 5, 6 };
        for (int index = 0; index < num.length; index++) {
            if (index % 2 == 0) {
                System.out.println("even number Index  is " + num[index]);
            }
        }
    }
}
