class averageSpeed {
    public static void main(String[] args) {
        double speedBLRtoMYS = 100;
        double speedMYStoBLR = 60;

        double averageSpeed;
        
        averageSpeed = (2 * speedBLRtoMYS * speedMYStoBLR) / (speedBLRtoMYS + speedMYStoBLR);
         System.out.println("The average speed is "+averageSpeed);
    }
}
