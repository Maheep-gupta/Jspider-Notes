class triangle {
    public static void main(String[] args) {
        double base = 10;
        double height = 22;
        double side1 = 10;
        double side2 = 20;
        double side3 = 30;
        double area, perimeter;
        area = (1 / 2d) * (base * height);
        perimeter = side1 + side2 + side3;
        System.out.println("Area of triangle is "+area);
        System.out.println("Perimeter of triangle is "+perimeter);
    }
}