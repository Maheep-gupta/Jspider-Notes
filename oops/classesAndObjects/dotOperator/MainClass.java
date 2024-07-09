class Demo{
    static  int x=100;
    static  void test(){
        System.out.println("Test() method Started");
    }
}
class MainClass {
    public static void main(String[] args) {
        System.out.println("main method started");
        System.out.println(Demo.x);
        Demo.test();
        System.out.println("main method ended");
    }
}