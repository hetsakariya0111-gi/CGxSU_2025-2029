#include <stdio.h>
int main()
{
    printf("Pattern 21 :-");
    printf("\n");
    printf("Enter your number here : \n");

    int n;
    scanf("%d",&n);
    
    for(int i=n; i>=1; i--)
    {
        for(int j=n; j>=1; j--)
        {
            if(i<j)
            {
                printf(" ");
            }
            else
            {
                printf("*");
            }
        }
        printf("\n");
    }

    return 0;
}