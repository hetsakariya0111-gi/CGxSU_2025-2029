#include <stdio.h>
int main()
{
        printf("Pattern 52 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        int count=n*(n+1)/2;
        for (int i=1; i<=n; i++) 
        {   
            for(int j=1; j<=n; j++)
            {
                if((i+j)%2==0)
                {
                    printf("1");
                }
                else
                {
                    printf("0");
                }
            } 
            printf("\n");
        }
        
    return 0;
}