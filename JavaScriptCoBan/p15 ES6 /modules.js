// lesson 126: Modules : Tư tưởng  khi bóc tách 1 thành phần sử lý 1 việc cụ thể , tách 1 phần chức năng riêng ở 1 file JavaScript riêng biệt 
 // Import/ Export 
 /**
  * Import ra cái gì thì có thể Export ra cái đó 
  * Thằng nhận import bản thân nó cũng phải là 1 module . thì phải thêm type ='module' ở ngoài file html 
  */
 //Cách 1: import hàm từ file gốc viết nó
 // import logger125 from './logger/logger.js';  // Tức import hàm logger tử file logger.js trong folder logger
 
 //Cách 2: import từ 1 file trung gian chứa các import và export sẵn 
 import logger125 from './logger/index.js';  //Sử dụng file trung gian 
 
 console.log(logger125);
 logger125('Message...','error')
 
 import {
     TYPE_LOG,
     TYPE_WARN,
     TYPE_ERROR
 } from './logger/logger.js'
 
 logger125('Message... Sử dụng import biến từ bên ngoài ', TYPE_LOG)
 
 
 // Có thể tạo ra 1 file biến không đổi constants vào 1 file riêng rồi import vào các file khác nhau để dùng 1 loạt
 // import {
 //     TYPE_LOG_CONSTANTS,
 //     TYPE_WARN_CONSTANTS,
 //     TYPE_ERROR_CONSTANTS
 // }            // {}  Đây chính là destructuring để phá ra khỏi object 
 // from './constants.js'  // Nhớ rằng biến không đổi chỉ được duy nhất 1 giá trị , k thể import từ 2 file cùng 1 biến 
 
 // Cách 2: Nếu có destructuring {} thì phải hiểu là đó là import không phải là import default mà chỉ là import các phần tử nhỏ nhỏ thôi .Nếu k muốn dùng destruturing có thể dùng cú pháp 
 
 import * as constantsConst from './constants.js'   // Nghĩa là import tất cả những phần tử nhỏ nhỏ không phải là export default  và đưa vào object có tên là constantsConst
 console.log(constantsConst);
 logger125('Message... Sử dụng import biến từ bên ngoài ', constantsConst.TYPE_ERROR_CONSTANTSTYPE_LOG);
 
 
 // Giả dụ đưa logger.js và trong 1 folder logger
 //Trong trường hợp không muốn import trực tiếp từ file logger.js
 
 // import { loggerAs } from './logger';  // Cách import ra một hàm mà dùng 1 file trung gian và đổi tên để không phải là import default 
 