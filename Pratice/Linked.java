class Node {
    String name;
    String mobile;
    String email;
    Node next;
}

class Mylist {
    Node head = null;

    public void doInsert(String name, String mobile, String email) {
        Node p = new Node();
        p.name = name;
        p.mobile = mobile;
        p.email = email;
        p.next = null;
        if (head == null) {
            head = p;
        } else {
            Node temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = p;
        }
    }

    public void traverse() {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.name + " " + temp.mobile + " " + temp.email);
            System.out.println("===================================");
            temp = temp.next;
        }
    }
}

public class Linked {
    public static void main(String[] args) {
        Mylist y = new Mylist();
        y.doInsert("ram", "1234", "ram@gmail.com");
        y.doInsert("ram", "1234", "ram@gmail.com");
        y.doInsert("ram", "1234", "ram@gmail.com");
        y.doInsert("ram", "1234", "ram@gmail.com");
        y.doInsert("ram", "1234", "ram@gmail.com");
        y.traverse();
    }
}
