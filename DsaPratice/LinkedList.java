class Node {
    int n;
    Node next;
}

class MyList {
    Node head = null;

    public void doInsertAtHead(int value) {
        Node p = new Node();
        p.n = value;
        p.next = head;
        head = p;
    }

    public void doInsertAtTail(int value) {
        Node p = new Node();
        p.n = value;
        p.next = null;
        if (head == null) {
            head = p;
            return;
        }
        Node temp = head;
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = p;
    }

    public void print() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.n + " ");
            temp = temp.next;
        }
    }

}

public class LinkedList {

    public static void main(String[] args) {
        MyList y = new MyList();
        y.doInsertAtHead(1);
        y.doInsertAtHead(2);
        y.doInsertAtHead(3);
        y.doInsertAtHead(4);
        y.doInsertAtHead(5);
        y.print();
        y.doInsertAtTail(1);
        y.doInsertAtTail(2);
        y.doInsertAtTail(3);
        y.doInsertAtTail(4);
        y.doInsertAtTail(5);
        y.print();
    }
}