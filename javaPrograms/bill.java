class bill {
    public static void main(String[] args) {
        double productPrice = 130;
        final double discount = 0.10;
        final double gst = 0.18;

        double discountPrice= (discount * productPrice);
        double withoutGST = productPrice - discountPrice;
        
        double gstAmount = gst * withoutGST;
        double withGST = withoutGST + gstAmount;

        System.out.println("With Gst "+withGST);
        System.out.println("Without Gst "+withoutGST);
    }
}
