class simpleIntrest {
    public static void CalculateSimpleIntrest() {
        double principleAmount = 10000;
        double rate = 0.5;
        double time = 5;
        double simpleIntrest = (principleAmount * rate * time) / 100;
        System.out.println("The simple Intrest for the Principle amount "+principleAmount+" on annual rate of intrest of "+rate+" % for "+time+" year is "+simpleIntrest);

        
    }

    public static void main(String[] args) {
        CalculateSimpleIntrest();
    }
}
