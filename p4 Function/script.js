/**
 * lesson 31: Khái niệm hàm (function )
 * 1. Hàm ?
 * -Một khối mã
 * -Làm 1 việc cụ thể
 * 
 * 2. Loại hàm 
 * -Built -in 
 * -Tự định nghĩa
 * 
 * 3.Tính chất 
 * -Không thực thi khi định nghĩa
 * -Sẽ thực thi khi được gọi ( Không truyền đủ tham số không sao )
 * -Có thể nhận tham số 
 * - Có thể trả về 1 giá trị 
 * 4. Tạo hàm đầu tiên 
 */
/** 
 * 
 * Đặt tên hàm tên biến được phép a-z A-Z _ $ 
 * 1 lưu ý duy nhất là KÝ TỰ ĐẦU TIÊN KHÔNG ĐƯỢC ĐẶT SỐ
 * 
 * 
 * 
 */
// lesson 34 : Tham số trong function 
/**
 * 1. Tham số ?
 * -Định nghĩa 
 * -Kiểu dữ liệu?
 * -Tính private?
 *   1 tham số 
 *  Nhiều tham số
 * 
 * 2. Truyền tham số
 *  -Truyền 1 tham số 
 * - Truyền nhiều tham số
 *  
 * 3. Arguments?
 * -Đối tượng arguments
 * Giới  thiệu vòng for
 */
// tham số được truyền vào hàm để sử lý 1 tính toán xử lý nào đó




function writeLog(){
    console.log(arguments)  // arguments là đối tượng có thể nhận 0 hoặc vô số tham số 

    for( var param of arguments){
        console.log(param)   // Viết các tham số trên 1 dòng 
    }
}
 
writeLog('log1','log2');

/**
 * lesson 35: return trong function 
 * 
 * 
 */

 function tinhtong (a, b ){   // Có thể truyền bất cứ kiểu dữ liệu gì // Biến là privite chỉ được dùng và gọi trong hàm đó 
    return a+ b;
    console.log('SẼ');
    console.log('KHÔNG ĐƯỢC ');
    console.log('THỰC THI');     // Dòng code mà viết phía sau return sẽ bị bỏ qua không được thực thi

}

var sum = tinhtong(5, 10); // Khi gọi tới 1 function thì được gọi là đối số

console.log(sum);

function cong(a,b){
    return a.toString() + b.toString();
}
 var result = cong(2, 8);
 console.log(result)    // Sẽ in ra chuôi 28


 /** 
  * lesson 40 : Hiểu hơn về function 
  * Một số điều biết về function 
  *  1.Khi function đặt trùng tên ?  ==> Function sau sẽ đè function trước. 
  * 2. Khai báo biến trong hàm ?   ==> Khai báo và thao tác thoải mái : phạm vị chỉ được sử dụng ở trong function đó thôi
  * 3.Định nghĩa hàm trong hàm ?   ==> Khai Báo và thao tác thoải mái : Phạm vị chỉ được gọi trong hàm đó thôi . bên ngoài không gọi được
  */

 /**
  * lesson 41: Các loại hàm 
  * 1. Declaration function 
  * 2. Expression function 
  * 3. Arrow function 
  */

 function declaration (){  // Bắt buộc phải đặt tên -- Khai báo bằng chữ function -- Chỉ duy declaration có thể gọi hàm trước khi định nghĩa

 }

 // Expression function 

 var expression = function autoLogin (){  // Xuất hiện toán tử gán -- có thể đặt tên OR không cần -- tên biến có thể gọi hàm 

 }

expression()   // Đây cũng là gọi hàm 

 setTimeout(function(){

 })

 var expression1 = {
     myFunction : function(){
     }
 }