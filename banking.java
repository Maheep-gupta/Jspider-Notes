
public class banking {
    public static void main(String[] args) {
        double BankBalance = 10000;
        double minimumBalance = 1000;
        double winthdrwalAmount;
        int originalPin = 1234;
        int enteredPin = 1234;

        winthdrwalAmount = 10000;

        if (enteredPin == originalPin) {

            if (winthdrwalAmount <= BankBalance) {
                // double useableAmount = ;
                
                if (winthdrwalAmount>=(BankBalance - minimumBalance)) {
                    System.out.println("You must maintain minimum balance");
                } else {
                    BankBalance -= winthdrwalAmount;

                    System.out.println("The account Balance after Withdrwal is " + BankBalance);
                }
            } else {
                System.out.println("Insufficeint Balance ");
            }
        } else {
            System.out.println("Entered Wrong pin");
        }

    }
}
