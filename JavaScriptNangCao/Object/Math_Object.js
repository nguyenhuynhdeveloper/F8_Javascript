const a_Num = 12345.67890

console.log(Math.abs(a_Num)) //Trả về giá trị tuyệt đối của số được truyền vào. Nếu tham số truyền vào không phải là một số, phương thức sẽ trả về NaN(Not A Number)

myNum1 = 0.548

console.log(Math.sin(0.548))  // Trả về sin của số đó (tính bằng đơn vị radian)
console.log(Math.cos(0.548))  // Trả về cos của số đó (tính bằng đơn vị radian)
console.log(Math.tan(0.548))  // Trả về tan của số đó (tính bằng đơn vị radian)

console.log(Math.acos(0.548)) //Trả về số đo góc được tính bằng đơn vị radians mà cosine của góc đó chính là giá trị được cung cấp. Giá trị trả về sẽ nằm trong khoảng từ 0 đến PI(~3,14)
//Nếu tham số được cung cấp không phải là số, lớn hơn 1 hoặc nhỏ hơn -1, phương thức sẽ trả về NaN.

console.log(Math.asin(0.548)) //Trả về số đo góc được tính bằng đơn vị radians mà sin của góc đó có giá trị đúng bằng tham số được cung cấp khi gọi phương thức. Giá trị trả về sẽ nằm trong khoảng từ - PI/2 đến PI/2 ( PI xấp xỉ  bằng 3,14).
//Nếu tham số được cung cấp không phải là số, lớn hơn 1 hoặc nhỏ hơn -1, phương thức sẽ trả về NaN.

console.log(Math.atan(0.548))  //Trả về số đo góc được tính bằng đơn vị radians sao cho tan của góc đó có giá trị đúng bằng tham số được cung cấp khi gọi phương thức. Giá trị trả về sẽ nằm trong khoảng từ - PI/2 đến PI/2 ( PI xấp xỉ  bằng 3,14).
//Nếu tham số được cung cấp không phải là số phương thức sẽ trả về NaN.


//Math.atan2(y, x) :Trả về số đo góc được tính bằng đơn vị radians mà tan của góc đó chính bằng thương số của hai tham số truyền vào. Kết quả trả về sẽ nằm trong khoảng -PI/2 đến PI/2.
//x là là số đại diện cho hoành độ
//y là số đại diện cho tung độ.
console.log(Math.atan2(3,5))  
//Nếu các tham số truyền vào không phải là số, phương thức sẽ trả về NaN.


console.log(Math.pow(3, 5))  //Trả về lũy thừa 3 mũ 5( 3, 5). Phương thức sẽ trả về kết quả của phép lũy thừa trong toán học với 3 là cơ số và 5 là số mũ
console.log(Math.sqrt(100))   // Trả về căn bậc 2 của tham số được truyền vào
console.log(Math.exp(5))  //Trả về kết quả E mũ 5 với E là hằng số Euler's number có giá trị sấp xỉ 2,7183 và 5 là tham số được cung cấp khi gọi phương thức
console.log(Math.log(100.4)) //Trả về logarit tự nhiên logarit cơ số e = 2,7183 của tham số được cung cấp khi gọi phương thức.


console.log(Math.ceil(0.548))  // Làm tròn số lên
console.log(Math.floor(0.548))  // Làm tròn số xuống






myArr = [4, 5, 6, 7, 8, 12, 3]
console.log(Math.max(...myArr))  // Trả về  giá trị số lớn nhất trong tập hợp các số được truyền vào khi khởi tạo phương thức, phương thức sẽ trả về số lớn nhất trong tập hợp các số được cung cấp.

console.log(Math.min(...myArr))   // Trả về giá trị số nhỏ nhất trong tập hợp 

console.log(Math.random())  // Trả về 1 số ngẫu nhiên nằm trong khoảng từ [0 - 1)




//isFinite()  //Trả ra true false kiểm tra xem số có phải là số hữu hạn hay không
//Nếu giá trị truyền vào dương vô cực, âm vô cực hoặc là một giá trị NaN( Not-A-Number) phương thức sẽ trả về False, ngược lại nó sẽ trả về True.
const myNum = 100
console.log(isFinite(myNum))

//isNaN Trả về true/false kiểm tra đối tượng  có phải là 1 số hay không
console.log(isNaN("abc"))
console.log(isNaN(myNum))

//Number() : Trả ra 1 số đã được chuyển đổi từ đối tượng 
//Nếu giá trị truyền vào dương vô cực, âm vô cực hoặc là một giá trị NaN( Not-A-Number) phương thức sẽ trả về False, ngược lại nó sẽ trả về True.
const myNum1 = "500"
console.log(Number(myNum1))
console.log(Number(new Date()))

//String() Trả về 1 chuỗi .chuuyển đổi đối tượng thành 1 chuỗi 
console.log(String(myNum))
console.log(String(new Date()))

//parseFloat() Trả về 1 số thực  từ 1 chuỗi 
//Nếu chuỗi bắt đầu bằng các khoảng trắng, phương thức sẽ loại bỏ các khoảng trắng sau đó phân tích.
// Nếu chuỗi bắt đầu bằng 1 dấu chấm và theo sau là một hoặc nhiều số, phương thức sẽ tự động coi đó là một số thập phân, ví dụ: '.10955' sẽ trở thành 0.10955.

console.log(parseFloat(myNum1))

//parseInt() Trả về 1 số nguyên từ 1 chuỗi 
console.log(parseInt(myNum1, 2))
console.log(parseInt(myNum1, 8))
console.log(parseInt(myNum1, 16))
console.log(parseInt(".0990"))   // Nếu chuỗi bắt đầu bằng dấu . sẽ trả ra NaN
console.log(parseInt("   920.42"))

//eval() Chức năng tính toán 1 biểu thức tính toán học hoặc thực thi mã lệnh tuỳ thuộc vào tham số mà người  dùng truyền vào

console.log(eval( 4+5 -19))
eval(console.log("eval đã được thực thi"))

// encodeURI()  : sẽ mã hoá 1 chuỗi uri . sẽ mã hoá tất cả các ký tự đặc biệt ngoại trừ , / ? : @ & = + $ #. ký tự thường thì k thay đổi 

const myStr = 'freetuts.net/hÉc-js™©£';
const myURI = encodeURI(myStr)
console.log( myURI)

//encodeURIComponent() : Muốn mã hoá tất cả các ký tự đặc biệt
const myURI1 =  encodeURIComponent(myStr)
console.log(myURI1)

//decodeURI() : Trả về 1 chuỗi sau khi giải mã chuỗi uri
console.log(decodeURI(myURI))

//decodeURIComponent() Trả về 1 chuối sau khi giải mã một chuỗi uri đã được mã hóa tất cả các kí tự đặc biệt.
console.log(decodeURIComponent(myURI1))

// "boolean".toString()  Trả về 1 chuỗi tring true / false chuyển đổi từ boolean
console.log(true.toString())
console.log(false.toString())

//"boolean".valueOf() Giống y như gọi boolean thường 
const myBoolean = true 
console.log(myBoolean.valueOf())  // ý đồ là giá trị nguyên bản 
console.log(myBoolean)
