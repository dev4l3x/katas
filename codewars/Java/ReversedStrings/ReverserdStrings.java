import java.io.*;
import java.lang.*;

class ReversedStrings {
    public static void main(String[] args) {
        String word = args[0];
        StringBuilder builder = new StringBuilder();

        for(int i = word.length() - 1; i >= 0 ; i--) {
            builder.append(word.charAt(i));
        }

        System.out.println(builder.toString());
    }
}