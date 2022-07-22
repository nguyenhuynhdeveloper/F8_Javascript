
// L32 Mảng Array  with  Key Word : JavaScript Array Methods
// 1. Tạo mảng
// - Cách tạo 
// - Sử dụng cách nào ? Tại sao ?
// - Kiểm tra data type ?
//  2. Truy xuất mảng 
//  - Độ dài mảng
//  - Lấy phần tử theo Index  

                 
 var languages = ['Tieng Viet',
                    'Tieng Anh',    
                    'Tieng Han',
                    123, undefined, undefined, function() {},];   // Array có thể chứa được tất cả các dạng dữ liệu trong javascript . được đánh số từ số 0
 
//Cách 2
// var languages = new Array(
//                     'Tieng Viet',
//                     'Tieng Anh',    
//                     'Tieng Han'
//                     123, undefined, Null, undefined, function() {},
// );

//Vẫn chốt dùng cách 1 vì ngắn gọn mà hiệu quả
console.log(typeof languages)  // Kết quả sẽ là 1 object

// Để kiểm tra đích thị có phải Array hay không 
 console.log(Array.isArray(languages))     //Kiểm tra xem languages có phải là 1 array hay không
 // Dấu [] là array. 
 // Dấu {}  là object. 
    
 console.log(languages.length)  //  Lấy ra độ dài mảng
//  console.log(length(languages))  //  Cách viết này không đúng cú pháp vì length là phương thức



 //l33  Làm việc với mảng .
//  1. toString()  : chuyển mảng thành một chuỗi 
//  2. join()       :Chuyển mảng thành 1 chuỗi có thêm quy ước ký tự phân cách 

//  3. pop()        :Xoá đi phần tử cuối mảng và trả về phần tử bị xoá đó . mảng gốc sau khi bị xoá bị mất phần tử đó
//  4. push(a, b,)        : Thêm nhiều phần tử vào cuối mảng . kết quả trả về chiều dài mảng đã được thêm . mảng gốc được thêm các phần tử đó vào cuối mảng

//  5. shift()        :Xoá đi phần tử ở đầu mảng Kết quả trả về phần tử bị xoá đó . mảng gốc sau khi bị xoá sẽ mất phần tử đó
//  6. unshift(a, b,)      :Thêm nhiều phần tử ở đầu mảng . Kết quả trả về chiều dài mảng đã được thêm | mảng gốc được thêm các phần tử đó vào đầu mảng

//  7. slice(1,3)         :Cắt lấy 1 mảng từ mảng gốc từ phần tử ( tham số 1)  tới phần tư ( tham số 2 -1)
//  8. splice(1, 3, "abc")      :Tại vị trí ( tham số 1)  xoá đi ( tham số 2) phần tử và thay thế ( tham số 3) vào trong mảng
//  9. concat       :Nối mảng sau concat vào mảng trước concat    

 var language = [ 'html' , 'Css' , 'JavaScript'];
  
 console.log(language.toString()) ;  // Chuyển mảng thành một chuỗi 
  
 console.log(language.join()) ;     // Sẽ vẫn đưa ra các phần tử của mảng dưới dạng chuỗi mà vẫn có dấu ,  // hàm này đối nghịch với hàm split của tring
console.log(language.join(' ')) ;   // nó sẽ để các phần tử của mảng được cách nhau bởi khoảng trắng


console.log( typeof(language.pop())) ;    // Xoá đi phần tử cuối mảng và kết quả trả về là phần tử đó
console.log(language)    // sau khi câu lệnh ở trên đã trải qua lệnh pop thì mảng bị mất đi phần tử cuối 
// console.log(language.push('ReactNative, BackEnd'));  // Thêm vào nhiều phần tử vào cuối mảng và kết quả trả về chiều dài mảng  
console.log(language)    // sau khi câu lệnh ở trên đã trải qua lệnh push thì mảng gốc được thêm các phàn tử vào cuối mảng


// a = language.push('ReactNative, BackEnd', 'OOP')
// console.log(language)
 



console.log(language.shift())    // Xoá đi phần tử ở đầu mảng và kết quả trả về mà phần tử bị xoá đó  Khi không còn gì để xoá sẽ trả về kết quả là undefined
console.log(language.unshift('ReactNative', 'BackEnd'))   // Thêm vào nhiều phần tử vào đầu mảng và kết quả trả về là chiều dài mảng đã đươc thêm | Mảng gốc được thêm các phần tử đó ở đầu mảng

//slice : Lát cắt
//-----"Array".slice(1, 5) :Copy - trích xuất từ phần tử thứ [1, 5) đưa vào mảng mới . mảng cũ giữ nguyên không bị thay đổi 
const myArr = [ 1, 2, 3, 4, 5, 6, 7,8, 9]
const takeSlice = myArr.slice(1,3)
console.log(takeSlice)   // Cắt lấy phàn tử từ [phần tử số 1 tới  phần tử số 3) kết quả trả về phần tử bị cắt đó . Bỏ tham số thứ 2 đi là cắt đến hết mảng
console.log(myArr)  // Mảng cũ không bị thay đổi 



var takeSlice1 = myArr.slice(0)  // Sử dụng tham số 0 để copy mảng 
const takeSlice2 = myArr.slice(-3, -1)  // Số dương là cắt từ trái qua phải . số âm là cắt từ phải qua trái , bắt đầu đếm từ -1

// splice : Mối nối
// -----"Array".splice(start, deleteCount, item1, item2,..itemN) : Tại vị trí thứ start của mảng xoá deleteCount phần tử , và chèn item1, item2, ...itemN , bắt đầu từ vị trí đó
// Bạn có thể dùng hàm array splice để xóa phần tử.
// Hoặc dùng để bổ sung phần tử vào một vị trí nào đó trong mảng
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
// start - là vị trí chỉ mục bắt đầu thay thế.
// deleteCount - là số phần tử sẽ bị lại bỏ, tính tử vị trí chỉ mục start, và bao gồm cả phần tử start. Nếu start mang giá trị 0 thì sẽ không có phần tử nào bị loại bỏ.
// item1,., itemN - các phần tử sẽ được thêm vào từ vị trí start. Sau khi thêm, phần tử thứ start của mảng sẽ là item1.
// lưu ý rằng số phần tử bị bỏ đi có thể ít hơn số phần tử được thêm vào và ngược lại.
// Mảng cũ bị xoá hoặc chèn phần tử -- mảng mới sẽ hứng tất cả những phần tử đã bị xoá

const myArr1 = [ 0,1, 2, 3, 4, 5, 6, 7,8, 9]
 
const takeSplice = myArr1.splice(1 ,3) // Hàm xoá đi phần tử từ [phần tử 1 xoá 3 phần tử tiếp theo 
// Tham số đầu biểu thị đặt con trỏ vào trước phần tử số mấy 
// Tham số 2 từ vị trí đang đặt trước xoá đi bao nhiêu phần tử 
console.log(takeSplice) ;  // Mảng mới đưa ra các phần tử bị xoá 
console.log(myArr1)   // Mảng cũ bị xoá phần tử


const myArr2 = [ 0,1, 2, 3, 4, 5, 6, 7,8, 9]
const takeSplice1 = myArr2.splice(-5 ,2, "8", "8", "8", "8")  // Sẽ chèn hết và mở rộng mảng vào từ vị trí -5, chứ không ghi đè 
console.log(takeSplice1)
console.log(myArr2)







var abc =[ "a" , "b" ,  "c" , "d" , "e"]
 a1  = abc.slice(1,3)
 console.log(a1)
 console.log(abc)

//  a2  = abc.splice(1,3, "huynh")
//  console.log(a2)
//  console.log(abc)


//  var c = 5
//   a3 = abc.concat(c)
//   console.log(a3)
//   console.log(abc)


//   abc.push("adc", {a: 2, b: 3})
//   console.log(abc)