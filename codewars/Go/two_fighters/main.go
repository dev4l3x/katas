package main

import (
  "fmt"
  "math"
)

type Fighter struct {
    Name            string
    Health          int
    DamagePerAttack int
}

func DeclareWinner(fighter1 Fighter, fighter2 Fighter, firstAttacker string) string {

  roundsToZero1 := math.Ceil(float64(fighter1.Health) / float64(fighter2.DamagePerAttack))
  roundsToZero2 := math.Ceil(float64(fighter2.Health) / float64(fighter1.DamagePerAttack))
  
  if roundsToZero1 < roundsToZero2 {
    return fighter2.Name
  } else if roundsToZero2 < roundsToZero1 {
    return fighter1.Name
  } else {
    return firstAttacker
  }
}

func main() {

  winner := DeclareWinner(Fighter{"Harald", 20, 5}, Fighter{"Harry", 5, 4}, "Harry")

  fmt.Println(winner)

}
