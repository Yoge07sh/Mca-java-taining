class Sol {
    public void moveZero() {
        int a[] = { 1, 2, 0, 4, 3, 0, 5, 0 }; // -->{1,2,4,3,5,0,0,0}
        int j = 0;
        /*
         * for (int i = 0; i < a.length; i++) {
         * if (a[i] != 0) {
         * a[j++] = a[i];
         * }
         * }
         * while (j < a.length) {
         * a[j++] = 0;
         * }
         */
        for (int i = 0; i < a.length; i++) {
            if (a[i] != 0) {
                int t = a[i];
                a[i] = a[j];
                a[j] = t;
                j++;
            }
        }
        for (int k = 0; k < a.length; k++) {
            System.out.println(a[k]);
        }
    }
}

public class Dsa {
    public static void main(String[] args) {
        Sol y = new Sol();
        y.moveZero();
    }
}
