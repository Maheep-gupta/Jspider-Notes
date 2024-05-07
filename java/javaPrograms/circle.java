class circle {
    public static void main(String[] args) {
        double radius = 2.1;
        final double pi = 3.14;

        double area, dia, circum;
        area = pi * radius * radius;
        dia = radius * 2;

        circum = 2 * pi * radius;
        System.out.println("Radius: " + radius);
        System.out.println("Diameter: " + dia);
        System.out.println("Area: " + area);
        System.out.println("Circumference: " + circum);
    }
}