#include <stdio.h>
void main()
{
    int a[5] = {1, 4, 5, 6, 7};
    int i = 0, j = 4;
    while (i < j)
    {
        int temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }
    for (int i = 0; i < 5; i++)
    {
        printf("%d", a[i]);
    }
}