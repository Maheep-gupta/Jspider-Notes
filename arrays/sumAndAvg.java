class sumAndAvg {
    public static void main(String[] args) {
        int num[] = { 1, 2, 3, 4, 5, 6 };
        double sum = 0;
        double avg = 0.0;
        for (int index = 0; index < num.length; index++) {
            sum += num[index];
        }
        avg = sum / num.length ;
        System.out.println("Sum :- "+sum);
        System.out.println("Average :- "+avg);
    }
}
