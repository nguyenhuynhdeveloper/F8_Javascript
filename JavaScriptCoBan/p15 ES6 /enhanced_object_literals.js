
// lesson 122: Enhanced object literals : 
/**
 * 1. Khái niệm giúp định nghĩa key : value cho object bằng cách ngắn gọn hơn 
 * 2.Định nghĩa method cho object 
 * 3. Định nghĩa key cho object dưới dạng biến 
 * Trường hợp key và value của object dưới dạng biến
 */ 


 var name122 = 'JavaScript ';
 var price122 = 1000;
 
 var course122 ={
     // name122 : name122,   // name122 đầu tiên là key của object . name122 thứ 2 là value = biến toàn cục được tạo ở trên 
     // price122 : price122
 
     // Cách 2: Bỏ luôn key đi nếu key với value tên trùng nhau 
     name122,
     price122, 
     
     // Cách viết Bt: Định nghĩa Method
     //  getName: function(){
     //      return name122;
     //  }
 
     //Cách viết Enhanced object literals có thể bỏ luôn từ khoá function 
      getName() {
         return name122;
     }
 
 
 };
 
 console.log(course122);
 // console.log(getName())   // Chưa được hỗ trợ 
 
 // Định nghĩa key và value của object dưới dạng biến 
 
 var fieldName ='name';
 var filedPrice ='price';
 
 const fieldCourse = {
     [fieldName]: 'JavaScript',   // Tức ở đây chính là name : 'JavaScript '   // Biến ở trên thay đổi thì key ở object cũng thay đổi
     [filedPrice]: 1000
 
 };
 
 console.log(fieldCourse);
 