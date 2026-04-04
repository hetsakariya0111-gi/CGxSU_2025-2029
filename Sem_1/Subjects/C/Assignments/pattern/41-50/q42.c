#include <stdio.h>
int main()
{
        printf("Pattern 42 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        for (int i=1; i<=n; i++) 
        {
            for(int j=1; j<=2*n-1; j++)
            {
                if(i==1 || j==1 || i==n || j==2*n-1)
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