class TSA {
    public static void main(String[] args) {

        double length = 10;
        double breath = 23;
        double height = 15;

        double tsa;

        tsa = 2 * (length * breath + breath * height + height * length);
        System.out.println("Total Surface area is " + tsa);
    }
}
