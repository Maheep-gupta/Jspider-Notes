public class score {
    public static void main(String[] args) {
        double attempt1 = 130;
        double attempt2 = 120;
        double attempt3 = 100;

        double average, totalScore;
        
        totalScore = attempt1 + attempt2 + attempt3;
        average = totalScore / 3;

        System.out.println("Total Score is "+totalScore);
        System.out.println("Average score is "+average);
    }
}
