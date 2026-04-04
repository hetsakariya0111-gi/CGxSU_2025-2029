#include <stdio.h>
int main()
{
        printf("Pattern 45 :-");
        printf("\n");
        printf("This pattern is only for odd numbers. If you will enter even number than pattern will not show perfectly.\n");
        printf("Enter only odd number here : \n");
        
        int n;
        scanf("%d",&n);
        for (int i=1; i<=n; i++) 
        {
            for(int j=1; j<=n; j++)
            {
                if(i==j || i+j==n+1)
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