

// object trong JavaScript
var myInfo = {
    name : 'huỳnh',   // Key cần đảm bảo tên hàm tên biến của java script
    age : 18 ,
    address : 'Hà nội'
};

    var myKey ='address'

 // Thêm key và value cho object
 // Cách 1
  myInfo.email = ' Nguyenhuynh.developer@gmail.com';

//Cách 2
  var emailKey  = 'email'

  var myInfo = {
    name : 'Huỳnh ',   // Key cần đảm bảo tên hàm tên biến của java script
    age : 18 ,
    address : 'Hà nội',
    [emailKey] : 'nguyenhuynh.evelopers@gmail.com'
};


// Cách  Lấy giá trị ra 
   console.log(myInfo.name);   // Cách 1 Lấy giá trị ra 
   console.log(myInfo['address']); // Cách 2
   console.log(myInfo[myKey]); // Cách 3   cách gián tiếp đưa chuỗi address vào trong


   // Cách xoá giá trị 
    delete myInfo.address;


    // Lưu trữ value là 1 function
    //Cách 2
  var emailKey  = 'email'

  var myInfo = {
    name : 'Huỳnh ',   // Key cần đảm bảo tên hàm tên biến của java script
    age : 18 ,
    address : 'Hà nội',
    getName: function() {
        return this.name ;   // this ở đây chính là myInfo Để đở sửa nhiều sau nếu thay đổi tên object
    }
};

console.log(myInfo.getName);  // Hiện xem key chứa gì
console.log(myInfo.getName());  //Cho chạy function trong getName


//function nằm trong object --> phương thức /method
// Orther --> Thuộc tính / property 


//l44 Object Contructor -- Bản thiết kế object
// Cách 1 
 function User( firstName , lastName , avatar) {  // Bản thiết kế cho Object  . String, Number, Array,Date ... chính là những Object constructor . nó không phải đối tượng  mà nó chỉ mô tả đối tượng thôi 
     this.firstName = firstName;                 // Nhớ viết hoa chữ đầu tiên
     this.lastName = lastName;
     this.avatar = avatar;
    this.getName = function() {
      return `${this.firstName} ${this.lastName}`;
    }

 } 

//  Cách 2
 var  UserAdmin = function( firstName , lastName, avatar) {  // Bản thiết kế cho Object  . String, Number, Array,Date ... chính là những Object constructor . nó không phải đối tượng  mà nó chỉ mô tả đối tượng thôi 
    this.firstName = firstName;                 // Nhớ viết hoa chữ đầu tiên
    this.lastName = lastName;
    this.avatar = avatar;
}

var userTeacher = new User(' huynh' , 'developer', 'dẹp trai')  // Sử dụng new nameContructor để khai báo object mới 
  var userAuthor = new User('nguyen ' , 'fesher', 'dẹp trai')  // 


  console.log(userTeacher.constructor) ; // Trả ra Object constructor  
  console.log(userTeacher)   // Cái này mới là trả ra object

  // Thêm 2 giá trị cho object   Thêm thuộc tính cho 2 đối tượng cùng được tạo bởi 1 object Cóntructor  hoàn toàn k bị ảnh hưởng lẫn nhau 

  userTeacher.comment = 'Giảng Viên'
   userAuthor.title = 'sinh viên '
   
   //l49 Object prototype  -- Thêm thuộc tính cho mọi  object đã được tạo bởi 1 object Contructor
   
   User.prototype.className = 'F8' ;     // Tất cả các object được tạo bởi contructor User đều được thêm 1 thuộc tính là học lớp F8
                                         // Tất cả thuộc tính được tạo bởi hàm prototype đều được thể hiện ở __proto__
                                         // Và nó vẫn dùng dấu chấm để truy cập vào object đó
  console.log(userTeacher.className);


  // prototype còn có thể khai báo thêm phương thức cho object 
  User.prototype.diemDanhClassName = function() {
    return this.className;
  }


  //l50 object Date

  // keyWord JavaScript Date moZilla
  var day1 = Date();   // Như gọi  một hàm đơn thuần , Kết quả trả về là một String
                        // Date() Cũng chính là 1 object Contructor
  var day =new Date();  // Kết quả là một object
    document.write(day);
    document.write(day.getFullYear());
    document.write(day.getMonth());
    document.write(day.getDate());
    document.write(day.getDay());
    document.write(day.getTime());
    document.write(day.getHours());
    document.write(day.getMinutes());
    document.write(day.getSeconds());


    var year = day.getFullYear()
     document.write(`${day.getFullYear()}/${day.getMonth()}`);

//l51 Math object  // Lưu ý Math Không phải là 1 object Contructor
/**
 * Math.PI
 * Math.round()
 * Math.abs()
 * Math.ceil()
 * Math.floor()
 * Maht.random()
 * Math.min()
 * Math.max()
 * 
 */

document.write(Math.PI +'</br>');
document.write(Math.round(1.8));  // Làm tròn số
document.write(Math.abs(1.8));   // Giá trị tuyệt đối 
document.write(Math.ceil(1.8));  // Làm tròn trên 
document.write(Math.floor(1.8));  // Làm tròn dưới 
document.write(Math.random());   //Trả về số thập phân ngẫu nhiên nhỏ hơn 1

var  dapdo = Math.ceil(Math.random() * 100);
 if (dapdo < 50) {
   document.write('Đập đồ thành công')
 }



