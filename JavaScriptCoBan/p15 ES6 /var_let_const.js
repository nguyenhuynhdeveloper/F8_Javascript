/**lesson 116 : ECMA Script6 là gì ?
 *
 *  Nó được tạo ra để tiêu chuẩn hoá Java script thực hiện độc lập công việc 
 * 1. Let , const 
 * 2. Template Literals
 * 3. Multi-line String
 * 4. Arrow function 
 * 5. Classes
 * 6. Default parameter values
 * 7. Destructuring
 * 8. Rest parameters(...)   : Lấy phần còn lại
 * 9. Spread  (...)   :Phá bỏ đi dấu [] or {}
 * 10. Enhanced object literals
 * 11. Tagged template literals
 * 12. Modules
 * 
 */

/**
 * lesson 117 : let const
 * 1. var/ lest const : Scope, Hosting
 * 2. Const/ var, let : Assignment 
 * 
 * Code Block : if else, loop . {}, ....
 */

 global = 'var là biến toàn cục có thể gán giá trị trước khi định nghĩa'
if (false){
    var global = 'var là biến toàn cục '
}
console.log(global);  // var có hỗ trợ hosting được phép gán giá trị trước khi định nghĩa  let với const thì không thể 



if (true){
    let local = 'let và const là biến cục  bộ trong cùng 1 khối block mới có thể truy cập được-- khai báo trùng biến trong cùng 1 cấp là lỗi , khác cấp thì được'
}

// console.log(local); // Không in ra được

// Assignment : const là biến không đổi k được phép thay đổi giá trị của biến 

const a = {
    name: 'JavaScript'

}
 a.name ='PHP '

 console.log(a.name)   // Thay đổi thuộc tính ở phía trong thì lại được phép 