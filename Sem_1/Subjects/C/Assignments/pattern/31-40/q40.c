#include <stdio.h>
int main()
{
        printf("Pattern 40 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        for (int i=1; i<=n; i++) 
        {
            for(int j=1; j<=2*n-1; j++)
            {
                if(i+j==n+1 || i==n || j-i==n-1)
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