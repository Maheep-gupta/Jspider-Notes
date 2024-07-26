class SwitchEvenorOdd {
    public static void main(String[] args) {
        int number=10;
        int iseven=number%2;
//        One way
        switch(iseven){
            case 0:
                System.out.println("Even Number");
                break;
            default:
                System.out.println("odd number");
                break;
        }
        }
}