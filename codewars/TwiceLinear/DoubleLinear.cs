using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;

namespace TwiceLinear {
    public class DoubleLinear 
    {
        public static int DblLinear (int n)
        {

            int[] sequence = new int[n+1];
            sequence[0] = 1;
            
            int x = 0, y = 0;

            for (int i = 1; i <= n; i++)
            {
                var newX = CalculateX(sequence[x]);
                var newY = CalculateY(sequence[y]);
                if (newX <= newY)
                {
                    sequence[i] = newX;
                    x++;
                    if (newX == newY)
                    {
                        y++;
                    }
                }
                else if (newY < newX)
                {
                    sequence[i] = newY;
                    y++;
                }
            }

            sequence.Print();
            Console.WriteLine(sequence[n]);

            return 0;
        }

        public static void AddIfNotContains(IList<int> list, int toAdd){
            if(!list.Contains(toAdd))
                list.Add(toAdd);
        }

        public static int CalculateX(int n) => n * 2 + 1;
        public static int CalculateY(int n) => n * 3 + 1;
    }
}