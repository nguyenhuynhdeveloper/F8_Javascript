
// lesson 124: Spread: Toán tử Dải 

// Bài toán là nối Array 1 vào Array2 ngoài dùng concat thì có thể dùng toán tử dải spread

var array124_1 = ['JavaScript', 'ReactNative', 'Dart'];

 var array124_2 =['ReactJs', 'Fuluter'];

 var array124_3 = [...array124_1, ...array124_2];   // Phá bỏ đi dấu [] Dải các phần tử của nó ra thì được gọi là Spread 

 console.log(array124_3);   

 // Tương tự với object  : Trong thực tế sử dụng rất là nhiều 

 var object124_1 = {
     name : 'JavaScript'
 };

 var object124_2 = {
     price: 1000
 }

 var object124_3 = {
     ...object124_1,
     ...object124_2
 }

 console.log(object124_3);


 //Sử dụng toán tử Spread truyền tham số cho hàm 

 var array124_4 = ['JavaScript', 'ReactJS', 'ReactNative', 'abc'];  

 function logger124_4 (a, b, c) {
     console.log(a, b, c)
 }


 function logger124_1 (...rest) {   //Dùng Rest để có thể nhận tất cả các tham số :: rest chính là tất cả các phần tử còn lại 
    console.log(rest )
}
 logger124_4 (...array124_4)   // Dải hết các phần tử của mảng ra bên ngoài đâu [] để làm tham số   // Mảng thừa phần từ thì cũng k sao  k in ra ngoài vì hàm chỉ gọi 3 tham số
logger124_1 (...array124_4)  // Đã dùng hàm rest để có thể sẵn sàng nhận tất cả các tham số được truyền vào 

