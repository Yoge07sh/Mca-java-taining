#include <stdio.h>
#include <math.h>

int main()
{
    int n, c = 0;
    double sum =0;
    printf("enter the number: ");
    scanf("%d", &n);

    int temp = n;-
    int r = n;

    while (n != 0)
    {
        n = n / 10;
        c++;
    }

    while (temp != 0)
    {
        int rem = temp % 10;
        sum = sum +pow(rem, c);
        temp = temp / 10;
    }

    if ((int)sum == r)
    {
        printf("number is armstrom");
    }
    else
    {
        printf("not");
    }

    return 0;
}
