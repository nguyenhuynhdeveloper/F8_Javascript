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

 // lesson 118 : Template literals

 const myName = 'Java Script '
 const description = ' Course name' + myName;

 console.log(description);


 // Template String dùng kiểu nội suy biến vào trong String

 const descriptionNoiSuy = `Course name ${myName}  \\ \${} `   // Nối nhiều biến cứ thêm vào đây thôi 
 console.log(descriptionNoiSuy) 


 // Multiline String : Viết trên nhiều dòng

 const lines = `
 Line 1 
 Line 2 
 Line 3 
 Line 4
 `
// Bình thường nếu dùng '' phải dùng \n để có thể xuống dòng 
 console.log(lines);   // Sử dụng Template String Xuống dòng sao viết y như vậy in ra y như vậy 


 // lesson 119 Arrow function   : Hàm mũi tên 


 function logger1(log){    // Đây là Decration function 
     console.log(log)
 }


 const logger2 = function(log){     // Đây là Exreption function 
     console.log(log)
 }



 logger1('Message1......')
 logger2('Message2......')

 const logger3 = (log) => {    // Mục đích sinh ra để viết ngắn gọn hơn 
     console.log(log);
 }

 logger3('Message3......')

//  const sum = (a,b) => {
//      return a+b;
//  }

//  console.log(sum(2,2));

// Có thể bỏ luôn dấu ngoặc , bỏ luôn return 
const sum = (a,b) =>  a+b;    // Viết bất kể cái gì đằng sau mũi tên được hiểu là return luôn trừ khi viết dấu {} thì phải dùng từ khoá return 
  
// Để return ra 1 object thì thêm dấu ()  
const object = (a,b )  => ({a: a, b: b})
     console.log(sum(2,2));
     console.log(object(2, 2));

// Khi Arrow function có duy nhất 1 parameter thôi thì có thể bỏ luôn dấu ()

const logger119 = log => console.log(log);
logger119("Message.. có thể bỏ dấu () ở parameter khi có duy nhất 1 parameter ")



const context = {
    name: 'JavaScript ',
    getName: function(){
        return this.name;  // this ở đây được gọi là context, nó sẽ trả lại thằng mà gọi nó .=> Arrow function không có context
    }
}

console.log(context.getName());    


const objectConstructer = function(name, price) {    // Arrow function không hỗ trợ Object Constructer 
    this.name =name;
    this.price= price;
}

const objectElement = new objectConstructer( 'JavaScript', '1000coin ')
 console.log(objectElement)



//lesson 120 : Classes : chỉ là cách viết khác của contructer function 
  
class classConstructer {    // Class có thuộc tính constructer dùng để tạo ra 1 bản thiết kế object 
 constructor (name , price){
     this.name = name ; 
     this.price = price;
 }
getName(){
    return this.name;
}
 getPrice(){
     return this.price;
 }

 // Viết rất gọn và tường minh 
}

const objectClassConstructer = new classConstructer( 'JavaScript', '1000coin ')
console.log(objectClassConstructer)


//lesson 121: Default parameter values  : Có thể định nghĩa ra các giá trị mặc định cho các tham số

function logger121(log) {

    if (typeof log === 'undefined'){
        log = ' Giá trị mặc định '
    }
    console.log(log)
}

logger121()   //Khi mà không truyền bất kỳ 1 tham số nào cho hàm thì nó sẽ cho chạy giá trị mặc định 

// Cách viết khác với ES6 sử dụng cho các trường hợp tham số không bắt buộc phải nhập 

function logger121_Orther(log = ' Giá trị mặc định viết luôn ở phần khai báo tham số  ') {
    console.log(log)
}

logger121_Orther()

function loggerDefault (log, type='log'){
    console[type](log)
}

loggerDefault('Message ....', 'warn');


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

// lesson 123 : Destructring :Khái niệm phân rã trong JavaScrit ES 6  Sử dụng với object và array 

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


// lesson 125 Tagged template literals : Sử dụng 1 function và có thể gọi tới function đó qua cú pháp tagged literals 

function highlight([first, ...strings], ...values){    //Sử dụng destructuring để có thể phá Array đầu tiên chứa các thành phần không phải là giá trị nội suy ra 
   return values.reduce(function(acc, curr){           // acc là biến tích trữ . curr là giá trị hiện tại 
     return [...acc,`<span>${curr} </span>`,strings.shift()]   // Ý tưởng bao trùm return ra 1 mảng . trong đó Phần tử thứ nhất:  ...acc là biến tích trữ đã được phá mảng . phần tử thứ 2 của mảng : giá trị hiện tại được thêm vào với thẻ <span> .phần từ 3 của mảng là : phần từ đầu tiên của mảng được cắt ra bởi shift()
   },[first])   // Thằng first ở đây chính là giá trị khởi tại initial phải để trong 1 mảng để không bị tách ra từng dấu ,
   
   .join('')   // '' Để mỗi phần tử cách nhau bởi 1 dấu cách ==> nếu không ghi gì thì sẽ để mặc định là dấu , sau mỗi phần tử của mảng 
               // join('') : Biến mảng thành chuỗi qua cách nhau bởi dấu ' ' 
}
var brand ='F8';
var course ='JavaScript';

//Gọi hàm bằng cú pháp Tagged literals 
var html = highlight`Học lập trình ${course} tại ${brand} !`   // Sử dụng dấu `` và truyền các biến vào dưới dạng Template String đưới dạng nội suy 
                                                    // Tham số thứ nhất của nó là 1 mảng mà không có chứa giá trị nội suy 
                                                    //Tham số từ tham số thứ 2 tương ứng là các biến nội suy trong tham số đưa vào 
console.log(html);

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

// lesson 126: OPtional chaining (?.)
/**
 * Để kiểm tra điều kiện / thành phần đó có tồn tại hay không
 *  
 */

const object126 = {
    name:'Huỳnh',
    cat: {
        name:'Đặng thị thu Hà',
        cat2: {
            name: 'Đặng thị thu Hà 2',
            cat3: {
                name: 'Đặng thị thu Hà 3',
            }
        }
    }
};

if(//object126.cat &&
    // object126.cat.cat2 &&
    // object126.cat.cat2.cat3)
    object126?.cat?.cat2?.cat3?.name)
    {   // Code rất xấu . Xử lý rất cồng kềnh 
    console.log(object126.cat.cat2.cat3.name);
}

// ?. Để giải quyết kiểm tra sự tồn tại : khi nghi ngờ 1 key nào của object nào không tồn tại Thêm ? vào đằng sau key đó 

//Cách khác để lấy key: value của object 

var avaiable =  object126?.['cat']?.['cat2']
 
console.log(avaiable);