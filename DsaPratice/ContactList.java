class Contact {
    String name;
    String mobNum;
    String email;
    Contact next;
}

class MyContactList {
    Contact start = null;

    public void create(String name, String mobNum, String email) {
        Contact p = new Contact();
        p.name = name;
        p.mobNum = mobNum;
        p.email = email;
        p.next = null;
        if (start == null) {
            start = p;
        } else {
            Contact temp;
            temp = start;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = p;
        }
    }

    public void traverse() {
        if (start == null) {
            System.out.println("list is empty");
        } else {
            Contact temp = start;
            int total = 0;
            while (temp != null) {
                total++;
                System.out.println(temp.name+"\t"+temp.mobNum+"\t"+temp.email);
                System.out.println("________________________________________________");
                temp = temp.next;
            }
            System.out.println("number of contacts are " + total);
        }
    }
}

public class ContactList {
    public static void main(String[] args) {
        MyContactList y = new MyContactList();
        y.create("ram", "12345", "ram@gmail.com");
        y.create("shyam", "166454", "shyam@gmail.com");
        y.create("yogesh", "86757575", "yogesh@gmail.com");
        y.create("ganesh", "04853593", "ganesh@gmail.com");
        y.create("mukul", "1331764", "mukul@gmail.com");
        y.traverse();
    }
}