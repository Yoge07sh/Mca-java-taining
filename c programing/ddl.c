#include <stdio.h>
#include <malloc.h>
#include <math.h>
struct node
{
    int no;
    struct node *prev, *next;
};
struct node *start;
void create(int n)
{
    struct node *p;
    p = (struct node *)malloc(sizeof(struct node));
    p->no = n;
    p->prev = NULL;
    p->next = NULL;
    if (start == NULL)
    {
        start = p;
    }
    else
    {
        struct node *temp = start;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = p;
        p->prev = temp;
    }
}
void traverse()
{
    if (start == NULL)
    {
        printf("linked list is empty");
    }
    else
    {
        struct node *temp = start;
        printf("numbers in forward direction");
        while (temp->next != NULL)
        {
            printf("\t%d", temp->no);
            temp = temp->next;
        }
        printf("\t%d\n", temp->no);
        printf("numbers in backward direction");
        while (temp != NULL)
        {
            printf("\t%d", temp->no);
            temp = temp->prev;
        }
    }
}
void insertAtBegin(int n)
{
    struct node *p;
    p = (struct node *)malloc(sizeof(struct node));
    p->no = n;
    p->next = NULL;
    p->prev = NULL;
    if (start == NULL)
    {
        start = p;
    }
    else
    {
        p->next = start;
        start->prev = p;
        start = p;
    }
}
void insertAtEnd(int n)
{
    struct node *p;
    p = (struct node *)malloc(sizeof(struct node));
    p->no = n;
    p->next = NULL;
    p->prev = NULL;
    if (start == NULL)
    {
        start = p;
    }
    else
    {
        struct node *temp = start;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = p;
        p->prev = temp;
    }
}
void insertAtAnyLocation(int n, int loc)
{
    struct node *p;
    p = (struct node *)malloc(sizeof(struct node));
    p->no = n;
    p->prev = NULL;
    p->next = NULL;
    if (loc <= 0)
    {
        printf("invalid location");
        free(p);
        return;
    }
    if (loc == 1)
    {
        if (start == NULL)
        {
            start = p;
        }
        else
        {
            p->next = start;
            start->prev = p;
            start = p;
        }
    }
    else
    {
        struct node *temp = start, *temp1 = start->next;
        for (int i = 0; i < loc - 2 && temp1 != NULL; i++)
        {
            temp1 = temp1->next;
            temp = temp->next;
        }
        if (temp1 == NULL)
        {
            printf("invalid location");
            free(p);
            return;
        }
        temp->next = p;
        p->next = temp1;
        p->prev = temp;
        temp1->prev = p;
    }
}
void deleteFromBegin()
{
    if (start == NULL)
    {
        printf("linked list is empty");
    }
    else
    {
        struct node *temp = start;
        printf("\ndeleted item %d\n", temp->no);
        start = start->next;
        if (start != NULL)
        {
            start->prev = NULL;
        }
        free(temp);
    }
}
void deleteFromEnd()
{
    if (start == NULL)
    {
        printf("linked list is empty");
        return;
    }
    if (start->next == NULL)
    {
        printf("\ndeleted item %d\n", start->no);
        free(start);
        start = NULL;
        return;
    }
    else
    {
        struct node *temp = start, *temp1 = start->next;
        while (temp1->next != NULL)
        {
            temp1 = temp1->next;
            temp = temp->next;
        }
        temp->next = NULL;
        printf("\ndeleted item %d\n", temp1->no);
        free(temp1);
    }
}
void deleteFromAnyLocation(int loc)
{
    if (start == NULL)
    {
        printf("linked list is empty");
        return;
    }
    if (loc <= 0)
    {
        printf("invalid loc");
        return;
    }
    if (loc == 1)
    {
        struct node *temp = start;
        printf("\ndeleted item %d\n", temp->no);
        start = start->next;
        if (start != NULL)
        {
            start->prev = NULL;
        }
        free(temp);
        return;
    }
    struct node *temp = start, *temp1 = start->next;
    for (int i = 0; i < loc - 2 && temp1 != NULL; i++)
    {
        temp1 = temp1->next;
        temp = temp->next;
    }
    if (temp1 == NULL)
    {
        printf("invalid location");
        return;
    }
    printf("\ndeleted number %d\n", temp1->no);
    temp->next = temp1->next;
    if (temp1->next != NULL)
    {
        temp1->next->prev = temp;
    }
    free(temp1);
}
int isprime(int n)
{
    if (n <= 1)
    {
        return 0;
    }
    for (int i = 2; i * i <= n; i++)
    {
        if (n % i == 0)
        {
            return 0;
        }
    }
    return 1;
}
void frequencyOfPrime()
{
    int count = 0;
    struct node *temp = start;
    while (temp != NULL)
    {
        if (isprime(temp->no))
        {
            count++;
        }
        temp = temp->next;
    }
    printf("\nfrequency of prime is %d\n", count);
}
void countNodes()
{
    int count = 0;
    if (start == NULL)
    {
        printf("linked list is empty");
        return;
    }
    struct node *temp = start;
    while (temp != NULL)
    {
        count++;
        temp = temp->next;
    }
    printf("total nodes in linked list are %d", count);
}
int main()
{
    int choice, no, loc;
    char ch;
    start = NULL;

    do
    {
        printf("\nEnter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter number: ");
            scanf("%d", &no);
            create(no);
            break;

        case 2:
            traverse();
            break;

        case 3:
            printf("Enter number: ");
            scanf("%d", &no);
            insertAtBegin(no);
            break;

        case 4:
            printf("Enter number: ");
            scanf("%d", &no);
            insertAtEnd(no);
            break;

        case 5:
            printf("Enter number: ");
            scanf("%d", &no);
            printf("Enter location: ");
            scanf("%d", &loc);
            insertAtAnyLocation(no, loc);
            break;

        case 6:
            deleteFromBegin();
            break;

        case 7:
            deleteFromEnd();
            break;

        case 8:
            printf("Enter location: ");
            scanf("%d", &loc);
            deleteFromAnyLocation(loc);
            break;

        case 9:
            frequencyOfPrime();
            break;

        case 10:
            countNodes();
            break;

        default:
            printf("Invalid choice");
        }

        printf("\nDo you want to continue (y/n)? ");
        scanf(" %c", &ch);

    } while (ch == 'y' || ch == 'Y');

    return 0;
}
