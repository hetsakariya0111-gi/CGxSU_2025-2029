#include <stdio.h>
int main()
{
        printf("Pattern 43 :-");
        printf("\n");
        printf("Enter your row number here : \n");
        int n; 
        scanf("%d",&n);

        printf("Enter your colum number here : \n");
        int m;
        scanf("%d",&m);
        
        for (int i=1; i<=n; i++) 
        {
            for(int j=1; j<=m; j++)
            {
                if(i==1 || i==n)
                {
                    printf("%d",j);
                }
                else if(j==1 || j==m)
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