var number = [1,300,12,34,5];
var sum = 0;

// while(i < number.length){
//     sum += number[i];
//     i++;
// }

for(var i=0; i < number.length; i++){
    sum += number[i];
}

console.log(`total : ${sum}`);