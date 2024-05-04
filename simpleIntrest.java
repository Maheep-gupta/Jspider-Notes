class simpleIntrest {
    public static void main(String[] args) {
        double principle = 10000;
        double rate = 5;
        double t = 5;
        double simpleIntrest;

        simpleIntrest = (principle * rate * t) / 100d;
        System.out.println("The simple Intrest for the Principle amount "+principle+" on annual rate of intrest of "+rate+"% for "+t+"year is "+simpleIntrest);
    }
}
