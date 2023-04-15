
//SCOPE- Phạm vi
/**
 * CÁc loại phạm vi 
 * -Global - Toàn cầu 
 * - Code block - Khối mã {} : let, const Khai báo trong  khối mã thì chỉ trong khối mã mới truy cập được thôi , bên ngoài k truy cập được
 *                             var sẽ được nhảy ra ngoài 1 phạm vị - tức nếu được viết trong khối mã sẽ nhảy được ra ngoài 1 phạm vi   
 * - Local scope - Hàm : var, function  : Đây là phạm vi hàm khi hàm được thực thi sẽ tạo ra 1 phạm vi riêng , Không cho bên ngoài trỏ vào biến bên trong nó 
 * 
 * 
 * -Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo ra 
 * -Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó 
 * - Cách thức 1 biến được truy cập 
 * - Khi nào 1 biến được xoá ra khỏi bộ nhớ ?
 *  - Biến toàn cầu 
 * -Biến trong code block & trong hàm ?
 * - Biến trong hàm được tham chiếu bởi 1 hàm 
 */


/**

 *  HOISTING : Đẩy lên đầu 
 * Chỉ duy nhất mình var là được hỗ trợ hoisting
 * var viết trong code block sẽ chạy ra ngoài đó 1 phạm vi chứ không thuộc phạm vi code block => Bên ngoài vẫn trỏ vào biến var dù được viết trong code block 
 * Nếu viết var ở trong hàm thì nó sẽ nằm trong phạm vi của hàm và bên ngoài k truy cập được => Không nhảy ra ngoài 1 phạm vi được nếu viết trong hàm
 * 
 * let const là sẽ bị đóng ở trong code block không thể truy cập ở bên ngoài được
 * 
 * */

// ASSIGN : Gán lại giá trị 
// Var và let cho phép thay đổi giá trị của biến 

// var cho phép khai báo ghi đè 1 biến let thì không 

//Global Scope : Phạm vi toàn cầu

console.log("Gọi trước khai báo sau với var sẽ trả ra undefined",abc)

var abc = 3
var abc = 6   // Var được phép khai báo ghi đè lại biến
console.log(abc)

let abc1 = 5
// let abc1 = 9 //FALSE let không được khai báo đè sẽ lỗi

const abc2 = 5
// const abc2 = 9 // FALSE const không được khai báo đè sẽ lỗi 
// abc2 = 10 // FALSE không được phép gán lại giá trị

var a = 5
console.log(a)

//  code block Scope : Phạm vi khối mã
{
    var a = 1   // Khai báo 2 biến trùng tên ở 2 phạm vi khác nhau là ok . 
    let b = 1
    const c = 1
    var varOutBlockcode = 123
}
console.log("Khai báo biến ưu tiên phạm  vi gần nhất",a)   // Sẽ ưu tiên lấy biến ở phạm vi gần nhất -- trả ra 1 : phạm vi trong block code gần > global
console.log("Var chui ra ngoài phạm vi block Code ", varOutBlockcode);

//  console.log(b)// FALSE let/ const không ra ngoài được 
//  console.log(c) //FALSE
// var viết trong khối mã sẽ thoát ra bên ngoài 1 phạm vi
// let , const trong khối mã bên ngoài k truy cập được 

//Local scope : Phạm vi hàm  
function log() {
    var d = 2
    let e= 3
    const f = 4
}

//  console.log(d)   // FALSE truy cập bên ngoài là không được : is not defined

// var let const trong phạm vi hàm thì bên ngoài k truy cập được 

/**
 * HÀm có thể truy cập tới biến bên trong phạm vi của nó , và bên ngoài phạm vi của nó 
 * Khi đặt biến trùng trên hàm là k được
 * Khi đặt biến trùng tên trong cùng 1 phạm vi là không được 
 * 
 * Khi khai báo hàm thì không tạo ra phạm vi mới 
 * Khi thực thi hàm thì sẽ tạo ra phạm vi mới 
 * Gọi 3 lần gọi 3 phạm vi mới  
 */

const fullName = "huyen nguyen"
function logger (first, last) {
    console.log(first, last)
    const age = 20 
    console.log(age, fullName)
}


logger("Nguyen " , "huỳnh")
logger("Nguyen " , "huyền")
logger("Nguyen " , "uyên")


// Hàm có thể truy cập biến bên ngoài phạm vi của nó
const ageGlobal = 16

function logger1 () {
    const ageFunc = 18
function logger2 () {
    console.log(ageFunc, ageGlobal)
}
logger2()
}

logger1()

// Ưu tiên lấy biến ở phạm vi gần nhất
const age1 = 16
{
    {const age1 = 18
        {
            {
                console.log(age1)  // 18 Sẽ ưu tiên tìm phạm vi gần nhất
                // const age1 = 14   // Sẽ ăn ngay 1 lỗi , vì chỉ duy nhất var được hoisting : Tức gọi trước khi khai báo
            }
        }
    }
}

//Vòng đời của biến 
/**
 * Biến toàn cầu biến bị xoá khi chương trình bị thoát, f5 hoặc đóng tab
 * hạn chế sử dụng biến global 
 * 
 */

{const age2 = 16 
console.log("Biến sẽ được xoá khỏi bộ nhớ khi code block chạy xong ",age2)
}  // Khi thoát khỏi khối code là nó đã bị xoá đi rồi tiết kiệm bộ nhớ

function logger3 () {
    const rand = Math.random()
    console.log("Hàm chạy xong thì biến thuộc phạm vi hàm , hàm thuộc phạm vi hàm sẽ bọ xoá",rand)
}
logger3()
//Tương tự hàm thực thi xong cũng xoá biến thuộc phạm vi của hàm , hàm thuộc phạm vi của hàm 

//Trường hợp hàm được tham chiếu bởi 1 hàm khác
function makeCouter() {
    let couter = 0 
    function increase() {
        return ++couter
    }
    return increase
}

const increaseOutside = makeCouter()  // makeCouter chạy xong cái biến bên trong nó vẫn được tham chiếu bởi phạm vi của hàm khác ở bên ngoài --> nên nó chưa đươcj xoá đi

console.log(increaseOutside())  // Vì vẫn còn trong bộ nhớ nên giá  trị của nó vẫn được lưu lại , nên giátrij của nó cứ được tăng đều nên 
console.log(increaseOutside())
console.log(increaseOutside())



        // // {
        // //     var a= 10 
        // // }
        // // console.log(a)  // var này nằm trong code block

        // //  function sum (a, b) {
        // //      var b = 8
        // //      return a+b
        // //  }

        // //  console.log(b)  // var này nằm trong function

         

        // const a= 9
        // const b= ""
        //  const c = a && b && 100
        //  console.log(" Toán tử 9 && 10 " ,c)  // Nếu cả 2 toán tử là true  thì sẽ nhận giá trị toán tử thứ 2 hoặc cuối cùng 
        //                                         //  Trả ra false đầu tiên tìm thấy ,
        //                                         // nếu tất cả là trusy thì sẽ trả về cái cuối cùng
        // //  const a= false
        // // const b= 10 
        // //  const c = a || b || 100
        // //  console.log(" Toán tử 9 && 10 " ,c)   // Chỉ cần 1 toán tử là true thì sẽ nhận giá trị toán tử true đầu tiên tìm thấy 



const a1= {name: "a"}
const b1 = {name: "a"}
console.log(a1===b1)

console.log(undefined +"hello")