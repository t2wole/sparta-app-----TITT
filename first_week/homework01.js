let fruit_list = ['사과','감','감','배','포도','포도','딸기',
'포도','감','수박','딸기'];

let count = 0;
fruit_list.map((fruit) => {
    if(fruit === "딸기") count++;
})

console.log(count);

