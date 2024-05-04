class profitLossCal {
    public static void main(String[] args) {
        double sellingPrice = 120;
        double costPrice = 100;
        double profit, loss;
        
        profit = ((sellingPrice - costPrice) / costPrice) * 100;
        loss = ((costPrice - sellingPrice) / costPrice) * 100;

        System.out.println("profit "+profit+"%");
        System.out.println("Loss "+loss+"%");
    }
}
