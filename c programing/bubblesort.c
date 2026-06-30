#include <stdio.h>
void main()
{
    int a[6] = {1, 8, 6, 9, 4, 2};
    int n = 6;
    for (int i = 0; i < n-1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (a[j] >a[j+1])
            {
                int temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    for (int i = 0; i < n; i++)
    {
        printf("%d", a[i]);
    }
}