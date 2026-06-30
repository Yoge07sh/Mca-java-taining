#include <stdio.h>
#include <math.h>
void main()
{
    int p = 0, n, i;
    printf("enter the number");
    scanf("%d", &n);
    if (n == 1)
    {
        printf("not prime ");
        return;
    }
    for (i = 2; i <= (int)sqrt(n); i++)
    {
        if (n % i == 0)
        {
            p = 1;
            break;
        }
    }
    if (p == 0)
    {
        printf("is prime");
    }
    else
    {
        printf("not prime");
    }
}