#include <stdio.h>
int main()
{
        printf("Pattern 58 :-");
        printf("\n");
        printf("This pattern is only for odd numbers. If you will enter even number than pattern will not show perfectly.\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        for (int i=1; i<=n; i++) 
        {
            for(int j=1; j<=n; j++)
            {
                if(j==(n/2)+1)
                {
                    printf("%d",(n/2)+1);
                }
                else if(i==(n/2)+1)
                {
                    printf("%d",j);
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