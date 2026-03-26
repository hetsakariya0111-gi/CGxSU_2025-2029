#include <stdio.h>
int main()
{
    printf("Pattern 31 :-");
    printf("\n");
    printf("Enter your number here : \n");
        
    int n;
    scanf("%d",&n);
    for (int i = 1; i <= n; i++) 
    {
        for(int j=1; j<=n; j++)
        {
            if(i==1 || i==n || j==1 || j==n)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        } 
        printf("\n");
    }
        
    return 0;
}