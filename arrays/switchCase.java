class swtichCase{
    public static void main(String[] args) {
        char garde='B';
        switch(garde){
            case 'A':
                System.out.println("Your marks is between 90-100");
                break;
            case 'B':
                System.out.println("Your marks is between 75-89");
                break;
            case 'C':
                System.out.println("Your marks is between 60-74");
                break;
            case 'D':
                System.out.println("Your marks is between 45-59");
                break;
            case 'E':
                System.out.println("Your marks is between 35-44");
                break;
            case 'F':
                System.out.println("Your marks is between 0-34");
                break;
            default:
                System.out.println("Invalid grade");
                break;
        }
    }
}