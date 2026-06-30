#include <stdio.h>
void main()
{
    int a = 0, b = 1;
    printf("%d", a);
    for (int i = 1; i <= 10; i++)
    {
        printf("\t");
        printf("%d", b);
        int t = b;
        b = a + b;
        a = t;
    }
}