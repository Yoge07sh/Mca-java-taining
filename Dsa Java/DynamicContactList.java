class Node {
    String name;
    String phone;
    String email;
    Node next;
}

class MyContactList {
    Node start = null;

    // insert contact in alphabetical order
    public void insertSorted(String name, String phone, String email) {
        Node p = new Node();
        p.name = name;
        p.phone = phone;
        p.email = email;

        // Case 1: empty list OR insert at beginning
        if (start == null || name.compareToIgnoreCase(start.name) < 0) {
            p.next = start;
            start = p;
            return;
        }

        // Case 2: insert in middle or end
        Node temp = start;
        while (temp.next != null &&
                name.compareToIgnoreCase(temp.next.name) > 0) {
            temp = temp.next;
        }

        p.next = temp.next;
        temp.next = p;
    }

    public void traverse() {
        Node temp = start;
        while (temp != null) {
            System.out.println(temp.name + " | " + temp.phone + " | " + temp.email);
            System.out.println("--------------------------------");
            temp = temp.next;
        }
    }
}

public class DynamicContactList {
    public static void main(String[] args) {
        MyContactList y = new MyContactList();
        y.insertSorted("ram", "1123", "ram@gmail.com");
        y.insertSorted("Shyam", "1123", "ram@gmail.com");
        y.insertSorted("ajay", "1123", "ram@gmail.com");
        y.insertSorted("yogi", "1123", "ram@gmail.com");
        y.insertSorted("mukul", "1123", "ram@gmail.com");
        y.insertSorted("sushant", "1123", "ram@gmail.com");
        y.traverse();
    }
}
