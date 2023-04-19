/**
 * Arithmetic operators
 +    --> Cộng
 -    --> Trừ 
 *    --> Nhân 
 **   --> Chia
 /    --> Chia lấy phần nguyên 
 %    -->  Chia lấy phần dư
 ++   --> Tăng 1 giá trị số
 --   --> Giảm 1 giá trị số
 */

 
 
// Toán tử ++ --

// Tiền tố : Prefix 
 var a = 6;

// Việc 1: + cho a , a= a+1 => a =7
// Việc 2: Trả về a sau khi được +1
 
var output = ++a;
console.log ('output: ', output);  // Nhận được biến a=7
console.log ('a:' , a);            // Nhận được biến a=7             


// Hậu tố : Postfix
 var a = 6;

// Việc 1: Tạo 1 biến a copy , a copy =6
// Việc 2: + cho a , a= a+1 => a =7
// Việc 3: Trả về a copy
 
// var output = a++;
// console.log ('output: ', output);  // nhận được biến a copy =6
console.log(a++)
console.log ('a:' , a);           // Nhận được biến a =7


// var output = number++ + --number;

// 6+6 =12
// console.log ('output: ', output);  // Kết quả nhận được 12

  

// // Toán tử chuỗi - String operators

// var name = 'huỳnh'

// name += 'Nguyễn' 
//  console.log(name + 'huỳnh') ;

//  // Toán tử so sánh Comparition
//   ==    :Bằng
//   ===   :Bằng so sánh cả kiểu dữ liệu && và giá trị 
//   !=    :Không bằng
//   >     :Lớn hơn 
//   <     :Nhỏ hơn 
//   >=    :Lớn hơn hoặc bằng
//   <=    :Nhỏ hơn hoặc bằng

// // Kiểu dữ liệu Boolean
// var a =1;
// var b = 2;
// var isSuccess = a >b ;
// console.log(isSuccess) ;  // Kết quả trả về sẽ là false


// // Câu lệnh điều kiện If -Else
// Giá trị trong JavaScript có 6 giá trị sau khi convert sang Boolean Sẽ có giá trị false  Khác 6 giá trị đó luôn được hiểu là true
 
// 0
// false
// ''   or  ""      :Chuỗi Rỗng
// undefined : Không xác định 
// NaN      
// null       :Không chứa gì


// //Toán tử logical Sẽ đọc từ trái qua phải và lấy cái bên phải gán cho bên trái  và nếu gặp 1 trong 6 giá trị falsy thì nó sẽ đưa kết quả là giá trị đó luôn 
// && And 
// || Or 
// ! Not 

// // Kiểu dữ liệu trong JavaScript

// 1. Dữ liệu nguyên thuỷ - Primitive Data 
// -Number
// -String
// _Boolean
// -Undefined
// -Null 
// -Symbol 


//  // Number type
//  Viết số viết thẳng số  luôn k cần '' ""
// //String type 
// var fullName = 'Nguyễn \' Huỳnh '    // Để viết được dấu ' "" trong 2 dấu '' trong kiểu dữ liệu chuỗi thì phải dùng \'
// Trong JavaScript thì dấu '' "" Hoàn toàn giống nhau  Thường cộng đồng dùng '' Vì nó dễ nhìn hơn dễ bấm hơn 

// //Boolean type
// var isSuccess = true ;   // Thường kiểu dữ liệu boolean thì thường đặt biến có is đằng trước


// // Undefined Type 
// var age;                //Khi chúng ta cứ khai báo ra 1 biến mà không gán giá trị cho nó thì nó sẽ là kiểu undefined 


// // Null Type   
// var isNull = null   // Là kiểu dữ liệu không có gì. bên trong không có gì 

// //Symbol Type  kiểu dữ liệu mới nhất có tử ES 6
// Symbol có 1 đặc tính là tính  duy nhất Khó hơn và ít khi dùng tới nó 

// var id = Symbol('id'); // Đặc tính unique


// 2. Dữ liệu phức tạp - Complex Data
//  -Function    // Hàm Thực thi  
//  -Object       // Đối tượng     chia 2 kiểu . 1: Object   2: Array


//  // Function Type 
//   var myFunction = function () {
//       alert('xin chào các con vợ ')
//   }      // Chỉ thực thi khối code khi function được gọi ra 


//   // Object Type
//    var myObject = {  // Dùng nó để lưu rất nhiều dữ liệu sau này thao tác với JavaScript  Phải dùng dấu {}  phân định bằng dấu ,
//     name :  ' Nguyễn Huỳnh ' ,
//     age : 18,
//     adress : Hà Nội ,
//     myFunction: function(){
//     }                 //object còn có thể chứa function trong nó 
//    }


//    var myArray = ['a', 'b', 'c', 'd', 'e', 'f'];    // Phải dùng dấu [] phân định bằng dấu ,



//    Cách kiểm tra kiểu dữ liệu 
//     console.log( typeof myVariable)


// // l24 Toán tử so sánh tuyệt đối
 
// ==    :Bằng value
// !=     :Không bằng value



// ===   : Bằng cả về Kiểu dữ liệu && value
// !==   : Không bằng cả về kiểu dữ liệu && value 


// // l25 Truthy  and Falsy 
// Cách để chuyển bất kỳ kiểu dữ liệu nào sang kiểu Boolean  là đặt trước dư liệu đó !! 

//  console.log(!!1);
//  console.log(!!'F8');  
//  console.log (!!['Mercedes']);  // Tất cả đều ra true

//  Chỉ có 6 kiểu dữ liệu sẽ ra kết quả là false
//  1. false
//  2. 0 số không 
//  3. '' or "" Chuỗi Rỗng
//  4. null Không có gì cả
//  5. undefined Không Xác định 
//  6. NaN       Không biết là gì



//  !Ngoại lệ: Trong JavaScript có 1 đối tượng  document 
//  1. document.all chuyển sang boolean sẽ là false
//  2. document.all Khi là toán hạng của toán tử so sánh == or != sẽ là undefined
//  3. Khi typeof document.all sẽ trả về undefined



//  //l26 Toán tử logical và câu lệnh điều kiện If

//  var result = 'a' && 'b' && 'c' && 'd' && 'f';
//  console.log (result) // Sẽ trả về 'f' 
 
//  var result = 'a' && 'b' && null && 'd' && 'f';   // Cứ có falsy cái là lấy luôn 
//  console.log (result) // Sẽ trả về null khi gặp 1 trong 6 trường hợp falsy thì k cần đếm sỉa đến các giá trị sau , gán luôn vào   biến 
//  if (result) {
//      console.log ('Điều Kiện Đúng') 
//  }
//  else{
//      console.log('Điều Kiện Sai ')  // Kết quả sẽ ra điều kiện sai  vì nó có giá trị null
//  }



//  var result = 'a' || 'b' || 'c' || 'd' || 'f';
//  console.log (result) // Sẽ trả về 'a'      //Cứ có truthy cái là lấy luôn cái truthy đó k quan tâm cái sau 

