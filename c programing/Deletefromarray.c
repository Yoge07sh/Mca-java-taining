#include <stdio.h>
void main()
{
    int a[5] = {1, 3, 4, 5, 2};
    int n = 5;
    int pos;
    printf("enter the  pos");
    scanf("%d", &pos);
    for (int i = pos ; i < n - 1; i++)
    {
        a[i] = a[i + 1];
    }
    n--;
    for (int i = 0; i < n; i++)
    {
        printf("%d", a[i]);
    }
}