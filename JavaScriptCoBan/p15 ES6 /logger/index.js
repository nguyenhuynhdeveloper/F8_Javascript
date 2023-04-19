export {default} from './logger.js' ;  // File index này đứng trung gian để thằng module nào mà gọi hàm default ra thì chỉ cần ./folder/index.js thôi , k cần ./folder/file.js
// Cách viết thông thường 
//  import logger from './logger.js';
//  export default logger125 ; 


 // Trong thực tế có dùng cách này để có thể export {default} của 1 module.js khác 

 //Bây giờ lại k muốn export default nữa thì có thể đổi tên luôn ở trong {} bằng toán tử as để trở thành export thường không phải default nữa

//  export {default as loggerAs} from './logger.js'