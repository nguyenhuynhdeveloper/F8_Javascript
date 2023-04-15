/**
 * https://www.youtube.com/watch?v=3MLhU1DrUxM&t=150s  
 * Hoisting : đưa lên trên kéo lên trên , Khai báo biến khai báo hàm được đưa lên trên ntn 
 * Đưa phần khai báo lên trên đầu phạm vi
 */

//Var :Được hoisting sẽ khởi tạo giá trị là undefined

// console.log(age)   //undefined  // Khai báo age ở dưới mà hoisting đưa lên chỉ đưa phần khai báo chứ k đưa phần gán nên ---> nên nó log râ undefined
// console.log(fullName)  // fullName is not defined   == Cái này nó chặn luôn chương trình 
// var age =16  //Đây là vừa khai báo vừa gán giá trị | mà hoisting chỉ đưa phần khai báo lên thôi , phần gán không đưa lên 


//Trong thực tế engine sẽ đọc 1 lượt chứ không phải đọc phát chạy ngay

console.log(sum(6, 9))  //Có thể sử dụng function bình thường trước khi nó được khai báo 


//function dececation   : Cả cụm hàm này chính là phần khai báo hàm luôn .nên được hoisting lên đầu
function sum(a, b) {
    return a+b
}

//Hoisting với "let", "const"

// {
//     console.log(fullName)   // sẽ log lỗi : Cannot access 'fullName' before initialization
//      let fullName = "nguyen huỳnh"
// }

//Let và const vẫn được hoisting : khi được hoisted không được tạo giá trị và được đưa vào "Temporal Dead Zone" :Vùng tạm thời không truy cập được 

const timeOut = setTimeout(()=> {
console.log("setTimeOut Đã chạy xong")
}, 3000)

// timeOut()

// console.log("let const đưa vào vùng Temporal Deal Zone", a_let)  // cannot access 'a_let' before initialization
// let a_let = 10

// console.log("let const đưa vào vùng Temporal Deal Zone", a_aconst)  // cannot access 'a_aconst' before initialization
// let a_const = 10