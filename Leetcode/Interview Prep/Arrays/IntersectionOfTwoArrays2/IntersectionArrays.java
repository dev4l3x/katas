
import java.util.*;
import java.util.stream.Collectors;

public class IntersectionArrays {

    public static void main(String args[]){
        int array1[] = new int[] { 1, 2, 2, 1 };
        int array2[] = new int[] { 2, 2 };
        String elementsCount = Arrays.stream(Solution.intersect(array1, array2)).mapToObj(String::valueOf).collect(Collectors.joining(" - "));
        System.out.println(elementsCount);
    }

}

class Solution {
    public static int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer, Integer> elementsCountOfFirstArray = getElementsCountFromArray(nums1);
        List<Integer> result = new ArrayList<>(nums1.length);
        
        
        for(int num : nums2){
            int count = elementsCountOfFirstArray.containsKey(num) ? elementsCountOfFirstArray.get(num) : 0;
            if(count > 0){
                result.add(num);
                elementsCountOfFirstArray.put(num, --count);
            }
        }
        
        return mapListToArray(result);
    }

    private static Map<Integer, Integer> getElementsCountFromArray(int[] nums){
        Map<Integer, Integer> elementsCount = new HashMap<>();
        for(int num : nums){
            if(!elementsCount.containsKey(num)){
                elementsCount.put(num, 0);
            }
            elementsCount.put(num, elementsCount.get(num) + 1);
        }
        return elementsCount;
    }

    private static int[] mapListToArray(List<Integer> numbers){
        int[] array = new int[numbers.size()];
        for(int i = 0; i < array.length; i++){
            array[i] = numbers.get(i);
        }
        return array;
    }
}