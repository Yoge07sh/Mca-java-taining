// check the order of a number
class Order {
    public void checkOrder() {
        int n = 12345;
        int last = n % 10;
        boolean increasing = true;
        while (n != 0) {
            int rem = n % 10;
            if (rem > last) {
                increasing = false;
                break;
            }
            last = rem;
            n = n / 10;
        }
        if (increasing) {
            System.out.println("it is in increasing order");
        } else {
            System.out.println("not ");
        }
    }
}

public class CheckOrder {
    public static void main(String[] args) {
        Order y = new Order();
        y.checkOrder();
    }
}