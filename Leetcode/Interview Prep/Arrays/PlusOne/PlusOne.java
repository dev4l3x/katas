import java.lang.*;
import java.util.*;
import java.util.stream.Collectors;

public class PlusOne{

    public static void main(String[] args){
        int[] testCase = new int[] {8, 5, 9};
        String value = Arrays.stream(PlusOneSolution.plusOne(testCase)).mapToObj(String::valueOf).collect(Collectors.joining(", "));
        value = "[" + value + "]";
        String expectedValue = "[8, 6, 0]";

        System.out.println("Expected value: " + expectedValue);
        System.out.println("Result: " + value);
    }

}

class PlusOneSolution{
    public static int[] plusOne(int[] digits){
        List<Integer> newDigits = new ArrayList<>();
        boolean addedCarry = false;
        for(int i = digits.length - 1; i >= 0; i--){
            int number = digits[i];
            if(!addedCarry){
                number = digits[i] == 9 ? 0 : digits[i] + 1;
                if(number != 0){
                    addedCarry = true;
                }
            }

            newDigits.add(0, number);
        }
        
        if(!addedCarry){
            newDigits.add(0, 1);
        }

        return listToArray(newDigits);
    }

    private static int[] listToArray(List<Integer> list){
        int[] toret = new int[list.size()];
        for(int i = 0; i < toret.length; i++){
            toret[i] = list.get(i);
        }
        return toret;
    }
}