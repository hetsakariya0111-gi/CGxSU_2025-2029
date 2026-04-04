#include <stdio.h>
int main()
{
        printf("Pattern 39 :-");
        printf("\n");
        printf("Enter your number here : \n");
        
        int n;
        scanf("%d",&n);
        for (int i=n; i>=1; i--) 
        {
            int count=1;
            for(int j=n; j>=1; j--)
            {
                if(i<j)
                {
                    printf(" ");
                }
                else
                {
                    printf("%c",'A'+(count++)-1);
                }
            } 
            printf("\n");
        }
        
    return 0;
}