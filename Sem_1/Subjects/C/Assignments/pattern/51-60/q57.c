#include <stdio.h>
int main()
{
    printf("Pattern 57 :-");
    printf("\n");
    printf("Enter your number here :\n");

    int n;
    scanf("%d",&n);

    for (int i=1; i<=n; i++)
    {
        for (int j=1; j<=n; j++)
        {
            int top = i-1;
            int left = j-1;
            int bottom = n-i;
            int right = n-j;

            if(left<=right && left<=top && left<=bottom)
            {
                printf("%d",left+1);
            }
            else if(right<=left && right<=top && right<=bottom)
            {
                printf("%d",right+1);
            }
            else if(top<=left && top<=right && top<=bottom)
            {
                printf("%d",top+1);
            }
            else if(bottom<=left && bottom<=right && bottom<=top)
            {
                printf("%d",bottom+1);
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