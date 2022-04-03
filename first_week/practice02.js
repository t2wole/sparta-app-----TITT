//옛날방식
// let a = function() {
//     console.log("function");
// }
// a();

//최신방식
// let b = () => {
//     console.log("arrow function");
// }
// b();

let blog = {
    owner : "noah",
    url : "noahlogs.tistory.com",
    getPost() {
        console.log('ES6 문법 정리');
    }
};

// 기존 할당 방식
//let owner = blog.owner
//let getPost = blog.getPost()

// 비구조 할당 방식
// let { owner, getPost } = blog;
// console.log(owner);
// console.log(getPost());


// 앞으로 많이 사용할 방식
let blogFunction = ({owner, url, getPost}) => {
    console.log(owner);
    console.log(url);
    console.log(getPost());
}
blogFunction(blog);