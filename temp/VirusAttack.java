import java.util.Scanner;

public class VirusAttack {

    public static int virusAttack(int number, int spikes) {
        // Convert the decimal number to binary
        String binaryRepresentation = Integer.toBinaryString(number);

        // Calculate the final binary result after virus attack
        String finalBinary = binaryRepresentation.substring(0, binaryRepresentation.length() - spikes)
                + "0".repeat(Math.max(0, spikes));

        // Convert the binary result back to decimal
        int finalDecimal = Integer.parseInt(finalBinary, 2);

        return finalDecimal;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input
        int N = scanner.nextInt();
        int[] values = new int[N];
        for (int i = 0; i < N; i++) {
            values[i] = scanner.nextInt();
        }
        int nSpikes = scanner.nextInt();

        // Calculate the final situation for each number in the array
        for (int i = 0; i < N; i++) {
            int finalValue = virusAttack(values[i], nSpikes);
            System.out.print(finalValue + " ");
        }
    }
}
