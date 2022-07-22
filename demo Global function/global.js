

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
