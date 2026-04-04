#include <stdio.h>
int main()
{
        printf("Pattern 49 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        int count=1;
        for (int i=1; i<=n; i++) 
        {   
            for(int j=1; j<=n; j++)
            {
                printf("%c ",'A'+(count++)-1);
                
            } 
            printf("\n");
        }
        
    return 0;
}