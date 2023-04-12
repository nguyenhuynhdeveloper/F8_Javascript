//17/7/2022

// **
//  * 1. IIFE
//  * 2. closures
//  * 3.Hoisting
//  * 4.Strict mode
//  * 5.This keyword
//  * 6.Bind method
//  * 7.Call method
//  * 8.Apply method
//  * 9. Catching, throwing errors
//  * 10 , Promise
//  * 11. Async function , await 
//  * 
    // IIFE - Immediately Invoked Function Expression : hàm gọi ngay lập tức 

     
        //  * IIFE trông như nào 
        //  * 2. Dùng dấu ; trước IIFE
        //  * 3. IIFE là hàm "private"
        //  * 4. Sử dụng IIFE khi nào  
        //  * 5. Các cách t ạo ra một IIFE
        //  * 6. Ví dụ sử dụng IIFE
     


//// Trường hợp Expression function 
;(function xinchao() {
    console.log("Expression Function ")
})()   // -> Đây là 1 hàm gọi ngay 

//Trường hợp : Arrow function 
;((message)=> {
    console.log("Arrow function ", message)
})("chào bạn")   // -> Đây cũng là 1 hàm gọi ngay   Chỉ được phép 1 hàm IIFE chạy nếu có 2 cái liền nhau Nếu không cho dấu ; trước 1 IIFE

let i = 0 
;(function myFunc(){
    console.log("Private")
    i++
    console.log(i)
    while (i<5) {
        myFunc()
    }
})()

myFunc()  //-> Sẽ ăn ngay 1 lỗi myFunc không phải là 1 hàm => IIFE là private không truy cập được phạm vi của nó đâu 
// Nhưng có thể gọi ngay trong chính nó bằng hàm đệ quy 

//IIFE không có tính sử dụng lại : sẽ thường dùng cho viết thư viện 
// Tránh quá nhiều biến : Che dấu đi tên hàm tên biến 
// Đoạn code bên trong thư việc tên hàm tên biến không ảnh hưởng gì tới dự án gốc


const app = (function() {
    const  cars = []  // Biến này là biến lưu trữ dữ liệu     Nó đã thuộc 1 hàm khác trong 1 hàm được trỏ ra bên ngoài , nên k thể truy cập tới nó 
  return {  
  add(car) {
      cars.push(car)
  },
  edit(index, car) {
      cars[index] = car
  },
  delete(index) {
      cars.splice(index, 1)
  }}
})()

//-Để đảm bảo tính đóng gọi như lập trình hướng đối tượng thì dùng IIFE
// Bên ngoài không thể trỏ vào thuộc tính bên trong 


//===>Dùng khi muốn viết thư viện muốn đảm bảo tính toàn vẹn của dữ liệu 