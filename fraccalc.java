import java.util.*;

public class FracCalc {
   private static String n1String;
   private static String n2String;
   private static String operator;
   private static int numerator;
   private static int numerator1;
   private static int numerator2;
   private static int denominator;
   private static int denominator1;
   private static int denominator2;
   private static int wholeNumber1;
   private static int wholeNumber2;
   private static int space;
   private static int wholeans;
   private static String answer;

   public FracCalc() {
      initializeVariables();
      System.out.println(produceAnswer(“5_3/4 + 6_5/8”));
      System.out.println(produceAnswer(“-3/7 – 20”));
   }
   public static void initializeVariables() {
      n1String = “”;
      n2String = “”;
      operator = “”;
      numerator = 0;
      numerator1 = 0;
      numerator2 = 0;
      denominator = 0;
      denominator1 = 0;
      denominator2 = 0;
      wholeNumber1 = 0;
      wholeNumber2 = 0;
      space = 0;
      answer = “”;
      wholeans = 0;
   }
   public static String produceAnswer(String input) {
      initializeVariables();
      space = input.indexOf(” “);
      n1String = input.substring(0,space);
      operator = input.substring(space + 1, space + 2);
      n2String = input.substring(space + 3);
      
      if (n1String.contains(“_”)) 
      {
         wholeNumber1 = Integer.parseInt(n1String.substring(0, n1String.indexOf(“_”)));
         numerator1 = Integer.parseInt(n1String.substring(1 + n1String.indexOf(“_”),n1String.indexOf(“/”)));
         denominator1 = Integer.parseInt(n1String.substring(1 + n1String.indexOf(“/”), n1String.length()));
      }else 
      {
         if (n1String.contains(“/”)) 
         {
            numerator1 = Integer.parseInt(n1String.substring(0, n1String.indexOf(“/”)));
            denominator1 = Integer.parseInt(n1String.substring(n1String.indexOf(“/”) + 1, n1String.length()));
         }else 
         {
            wholeNumber1 = Integer.parseInt(n1String);
            denominator1 = 1;
            numerator1 = 0;
         }
      }
      if (n2String.contains(“_”)) {
         wholeNumber2 = Integer.parseInt(n2String.substring(0, n2String.indexOf(“_”)));
         numerator2 = Integer.parseInt(n2String.substring(1 + n2String.indexOf(“_”), n2String.indexOf(“/”)));
         denominator2 = Integer.parseInt(n2String.substring(1 + n2String.indexOf(“/”)));
      }else {
         if (n2String.contains(“/”)) {
            numerator2 = Integer.parseInt(n2String.substring(0, n2String.indexOf(“/”)));
            denominator2 = Integer.parseInt(n2String.substring(n2String.indexOf(“/”) + 1));
         } else {
            wholeNumber2 = Integer.parseInt(n2String);
            denominator2 = 1;
            numerator2 = 0;
         }
      }
      if (wholeNumber1 > 0) {
         numerator1 = wholeNumber1 * denominator1 + numerator1;
      } else if (wholeNumber1 < 0) {
         numerator1 = wholeNumber1 * denominator1 – numerator1;
      } if (wholeNumber2 > 0) {
         numerator2 = wholeNumber2 * denominator2 + numerator2;
      }else if (wholeNumber2 < 0) {
         numerator2 = wholeNumber2 * denominator2 – numerator2;
      }
      if (operator.equals(“+”)) {
      numerator1 *= denominator2;
      numerator2 *= denominator1;
      denominator = denominator1 * denominator2;
      numerator = numerator1 + numerator2;
      answer = numerator + “/” + denominator;
      } else if (operator.equals(“-“)) {
      numerator1 *= denominator2;
      numerator2 *= denominator1;
      denominator = denominator1 * denominator2;
      numerator = numerator1 – numerator2;
      answer = numerator + “/” + denominator;
      }else if (operator.equals(“*”)) {
      numerator = numerator1 * numerator2;
      denominator = denominator1 * denominator2;
      answer = numerator + “/” + denominator;
      }else if (operator.equals(“/”)) {
      numerator = numerator1 * denominator2;
      denominator = denominator1 * numerator2;
      answer = numerator + “/” + denominator;
      }
      if (Math.abs(numerator) < Math.abs(denominator)) {
      for (int i = Math.abs(denominator); i > 1; i–) {
      if (numerator%i == 0 ) {
      if (denominator%i == 0) {
      numerator/= i;
      denominator/=i;
      i–;
      }
      }
      }
      }else {
      for (int i = Math.abs(denominator); i > 1; i–) {
      if (numerator % i == 0) {
      if (denominator % i == 0) {
      numerator/= i;
      denominator/=i;
      i–;
      }
      }
      }
      }
      if (Math.abs(numerator) > Math.abs(denominator)) {
      wholeans += numerator / denominator;
      numerator = numerator%denominator;
      answer = numerator + “/” + denominator;
      }else {
      answer = wholeans + “_” + Math.abs(numerator) + “/” + Math.abs(denominator);
      }
      if(wholeans != 0) {
      if (numerator != 0) {
      answer = wholeans + “_” + Math.abs(numerator) + “/” + Math.abs(denominator);
      } else {
      answer = wholeans + “”;
      }
      } else {
      if (numerator != 0) {
      answer = numerator + “/” + denominator;
      } else {
      answer = 0 + “”;
      }
      }
      if (numerator == denominator) {
      answer = 1 + “”;
      }
      if (denominator < 0) {
      numerator *= -1;
      }
      return answer;
   }
}
