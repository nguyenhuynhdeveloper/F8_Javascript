/**
 * Strict mode : chế độ nghiêm ngặt . giúp code js an toàn hơn Khi bật hcees độ này nên trong 1 số trường hợp khắc phục lỗi 
 *  
 */
"use strict";

// fullName = "nguyen huỳnh"   // Tạo ra biến fullName ở phạm vi global 
 function testFunc() {
    "use strict"   // Nếu có use strict thì sẽ báo age is not defined
    const age = 18 // Tạo ra biến age ở phạm vi global 
 }
  testFunc()   // khi không khai báo var let const không có bất cứ 1 lỗi nào bị văng ra 

//   console.log(fullName)
//   console.log(age)   // Biến viết trong body function nhưng phạm vi truy cập lại ở global Tiềm ẩn rò dỉ bộ nhớ 
  //Lỗi logic tiềm ẩn trùng tên với 1 biến nào đó bên ngoài phạm vi khác

  /**
   * Cách sử dụng 
   * 1. Thêm "use strict"; Vào đầu file.js
   * 2. Thêm "use strict"; vào ngay sau thẻ mở <script>
   * 
   * <script>
   * "use strict"
   * ----code------
   * </script>
   * 3. Têm "use strict"; vào đầu phạm vi hàm 
   * 
   * Đặc trưng không thể khai báo biến mà không sử dụng var let const
   * "use strict" phải đứng đầu ở phạm vi không được phép có dòng code nào đứng trước
   */

/**
 * Báo lỗi khi gán lại giá trị cho thuộc tính có writable : false
 * 
 * Báo lỗi khi hàm có tham số trùng tên 
 * Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi  code block 
 * Không đặt tên biến , tên hàm bằng một số từ khoá "nhạy cảm " của ngôn ngữ
 */
//Cố tình xoá những cái không được xoá cũng sẽ báo lỗi 
// const student ={
//     fullName : "nguyen huỳnh"
// }

const private = 12
 console.log(private)  // Đây là 1 từ khoá nhạy cảm , tương lai khả năng sẽ có thể được thêm vào ngôn ngữ

// delete student  // Không thể xoá 1 object 
delete student.fullName
console.log("first", student)
/**
 * Công dụng 
 * 1. Tránh "Quên"  từ khoá khai báo biến 
 * 2. Tránh trùng tên biến lẫn tới lỗi logic
 * 3. Sử dụng bộ nhớ hiệu quả tránh tạo biến global 
 */