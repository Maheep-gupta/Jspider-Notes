
// Criteria
/*
if male is travelling then charges will be 5/km
if female is travelling then charges will be 0/km
 */
public class BusTickets {
    public static void generateBusticket(char gender, double distance) {
        double price;
        if (gender == 'm') {
            price = 5 * distance;
            System.out.println("Your ticket is generated and your total fare is " + price);
        } else {
            price = 0 * distance;
            System.out.println("Your ticket is generated and your total fare is " + price);
        }
    }

    public static void main(String[] args) {
        generateBusticket('m', 5);
    }
}
