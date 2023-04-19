
// lesson 123 : Destructring :Khái niệm phân rã trong JavaScrit ES 6  Sử dụng với object và array 
// ...rest là toán tử gon nhưng cái cong lại 

var array123 =['JavaScript ', 'PHP ', 'ReactNative']

var [d, b, c] = array123;  // [] Đây chính là phá bỏ lớp vỏ nhặt ra các phần tử bên trong của mảng
console.log(d,b,c);

var[d, ...rest] = array123; // Rest parametters cú pháp ... là những phần tử còn lại của mảng khi dùng destructuring 
console.log(rest);

var object123 ={
    name: 'JavaScript',
    price: 1000, 
    image: 'image-address',
    children :{
        name: 'ReactJS'
    }

}

var {name : parentName, price, children: {name: childrenName} } = object123;   // Khi destructuring object thì phải khai báo tên biến ở đâu trùng key của object 
console.log(parentName ,'\n', childrenName);  // có thể lấy ra và đổi tên biến luôn nếu các tên biến trùng nhau 

var{name, ...rest} = object123;
console.log(rest)  // Đây cũng là 1 cách mà khi đi phỏng vấn người ta hỏi xoá 1 key value của object mà k dùng cú pháp delete . rest ở đây chính là object mới đã xoá đi phần từ đầu tiên 

// Khi muốn lấy ra key  value mà object không có thì có thể điền thẳng dấu = để gán giá trị mặc định cho nó nếu nó không tồn tại 
//  var { name , description = ' default Value '} = object123;  // Chưa được hỗ trợ
console.log(name, description);


function logger123(...params)  // :: Rest chính là lấy ra các phần tử còn lại 
{
    console.log(params);
    console.log(arguments);
}

logger123(1, 2, 3, 4, 5, 6, 7, 8)   // Khi dùng toán tử Spread thì nó tạo ra 1 Array 



// Có thể truyền thẳng destructuring ở tham số để khỏi phải object.key

function logger124({name, price, ...rest}){   // Đây chính là dùng destructuring ở ngay trong tham số để phá object ra => Rồi bên trong hàm chỉ cần gọi key thôi , không cần Object.key
    console.log(name);
    console.log(price);
}

logger124({
    name: 'JavaScript',
    price: 1000,
    description: 'Description content'
});

// ==>  Dùng rest để làm tham số : Nhận tất cả những thằng còn lại 
// ==> Dùng Spread để truyền đối số : Dải tất cả những thằng trong Array or Object ra để làm đối số
