//Kata https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript


function cakes(recipe, available) {
    let max = Infinity;
    for(var ingredient in recipe){
        if(available[ingredient] === undefined || available[ingredient] === 0)
        {
            return 0;
        }
        let numberOfCakes = Math.floor(available[ingredient] / recipe[ingredient]);
        if(numberOfCakes < max)
            max = numberOfCakes;
    }

    return max;
} 

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));