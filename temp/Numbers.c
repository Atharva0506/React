/*
D. Rob a Bank
You are thief, trying to rob a bank. Upon entering the bank and pointing your gun at the manager, you demand the safe's PIN. However, the manager is scared but not dumb. Instead of revealing the exact PIN, he gives you a number (between 1 and 10 lakh) which is slightly less  than the actual PIN.
But you're no ordinary thief. You had a dream where a fairy gave you a valuable information – the PIN consists solely of the digits 8 and 9, with an equal number of each. Armed with this knowledge, your task is clear: determine the next smallest permutation of digits 8 and 9 that maintains an equal count of each, ensuring it is not less than the number provided by the manager.
If manager gives you the number n what's the PIN to the safe?
Note: The time constraint for the code to run is 2 seconds.

*/

#include<stdio.h>
#include <stdlib.h>
int arr[100];
int i=0;
int genPossValue(int val,int num9,int num8){
    if (val>99999999) return 400;
    if(num8==num9){ arr[i++]=val; }
    genPossValue(val*10+8,num9,num8+1);
    genPossValue(val*10+9,num9+1,num8);
}
int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}
int binSearch(int arr[], int size, int target) {
    int left = 0, right = size - 1;
    int result = -1; 
    
    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return arr[mid];  
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            result = arr[mid];  
            right = mid - 1;
        }
    }
    return result;
}
   


int main(){
    genPossValue(9,1,0);
    genPossValue(8,0,1);
    int n;
    scanf("%d", &n);
    int ns = sizeof(arr) / sizeof(arr[0]);
    qsort(arr, ns, sizeof(int), compare);
    printf("The closest greater number to %d is: %d\n", n, binSearch(arr,ns-1,n));
    return 0;
}