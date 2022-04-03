// 이렇게 쓰지말자.
let numbers = [1,2,3,4,5,6,7];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
console.log('-------------------------------');

// 이렇게 쓰도록 하자
numbers = [1,2,3,4,5,6,7];

numbers.map((value, i) => {
    console.log(value, i);
})
console.log('-------------------------------');

// 위와 같은 결과
numbers.map(function(value, i) {
    console.log(value, i);
})

