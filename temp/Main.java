import java.util.*;
/**
 * Main
 */
public class Main {

    public static void main(String[] args) {
        int arr[] = new int[10];
        int sum=0;
        System.out.println("Enter The Numbers");
        Scanner sc = new Scanner(System.in);
        for(int i=0;i<arr.length;i++){
            int x = sc.nextInt();
            arr[i]=x;
        }
        
        for(int i=0;i<arr.length;i++){
            if(arr[i] % 2 ==0 ){
                sum = arr[i]+sum;
            }
        }
        System.out.println("sum of even num: is " + sum);
        sc.close();

    }
}