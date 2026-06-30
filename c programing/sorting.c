// Bubble sort-----------------------
#include <stdio.h>

void bubbleSort(int a[], int size)
{
    for (int i = 0; i < size - 1; i++)
    {
        for (int j = 0; j < size - i - 1; j++)
        {
            if (a[j] > a[j + 1])
            {
                int temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
}
    void print(int a[], int size)
    {
        printf("array after sorting");
        for (int i = 0; i < size; i++)
        {
            printf("%d\t", a[i]);
        }
    }

int main()
{
    int a[100], size;
    printf("enter the size of array");
    scanf("%d", &size);
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &a[i]);
    }
    bubbleSort(a, size);
    print(a,size);
    return 0;
}

// insertion sort--------------------
#include <stdio.h>
void insertionSort(int a[], int size)
{
    for (int i = 1; i < size; i++)
    {
        int temp = a[i];
        int j;

        for (j = i - 1; j >= 0 && a[j] > temp; j--)
        {
            a[j + 1] = a[j];
        }

        a[j + 1] = temp;
    }
}
void print(int a[], int size)
{
    printf("array after sorting");
    for (int i = 0; i < size; i++)
    {
        printf("%d\t", a[i]);
    }
}

int main()
{
    int a[100], size;
    printf("enter the size of array");
    scanf("%d", &size);
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &a[i]);
    }
    insertionSort(a, size);
    print(a, size);
    return 0;
}

//Selection sort ------------------------
#include<stdio.h>
void selectionSort(int a[], int size) {
    for(int i = 0; i < size - 1; i++) {
        int minIndex = i;

        for(int j = i + 1; j < size; j++) {
            if(a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        int temp = a[i];
        a[i] = a[minIndex];
        a[minIndex] = temp;
    }
}
void print(int a[], int size)
{
    printf("array after sorting");
    for (int i = 0; i < size; i++)
    {
        printf("%d\t", a[i]);
    }
}

int main()
{
    int a[100], size;
    printf("enter the size of array");
    scanf("%d", &size);
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &a[i]);
    }
    selectionSort(a, size);
    print(a, size);
    return 0;
}