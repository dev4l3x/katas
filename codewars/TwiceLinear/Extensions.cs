using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;

namespace TwiceLinear {
    public static class Extensions 
    {
        public static void Print(this IEnumerable collection){
            foreach(var elem in collection){
                Console.Write(elem + " - ");
            }
        }
    }
}