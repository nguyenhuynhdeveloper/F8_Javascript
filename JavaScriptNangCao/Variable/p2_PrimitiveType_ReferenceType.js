//Kiểu tham trị tham chiếu 
/**
 * Value types: kiểu tham trị 
 * Reference type : Kiểu tham chiếu
 */

/**
 * 1. Value types (Primitive data types : Kiểu dữ liệu nguyên thuỷ)
 * -String 
 * -Numbers
 * -Boolean
 * -BigInt
 * -Symbol
 * -undefined
 * -null
 * Tại 1 thời điểm chỉ chứa 1 giá trị 
 * 
 * 2. Reference types (Non- primitive data types)
 * -Object
 * -Array
 * -Function
 * 
 * Data types with functions
 * - Value types
 * - Reference types
 */

let a= {
    name : 'Mercedes'
}

 let b= a
 a.name = 'BMW'

 console.log(b)


  // Tạo ra 1 object mới , array mới . function mới là có 1 ô nhớ mới được tạo ra  ,   chỉ khi sửa phần tử bên trong mới là sửa giá trị trong ô nhớ

  let c = {
    name: "nguyễn huỳnh "
  }   // c sẽ nhận địa chỉ ô nhớ dưới , còn ô nhớ này chưa bị mất đi luôn mà chỉ mất đi khi chương trình kết thúc

  c = {
    name: "thu hà",
    age: 18
  }           //Có 1 vùng nhớ được tạo ra

  console.log(c)

  // Các object lồng nhau hay Array lồng nhau , cũng vậy sinh ra các ô nhớ tương ứng  

  // Truyền đối số vào trong tham số của hàm 
//   function sum (a, b)
//   {
//     //let a= d   // sinh ra 1 biến a  có 1 ô nhớ nhới tham trị tới giá trị ô nhớ của d
//     //let b= e
//     a= 0 
//     b=0 
//     console.log(a, b)   // Lại đưa ra kết quả là 0, 0 . vì đã sửa giá trị tại 1 ô nhớ khác
//   }

//   const e =1  // e chỉ là lưu giá trị của ô nhớ đó lưu
//   const d=2

//   sum(d, e)


  function func(obj){
    //let obj= a   // obj nhận ô nhớ của a . vì a đang lưu giá trị của ô nhớ
    // obj = JSON.parse(JSON.stringify(obj))   // Cách tạo ra 1 ô nhớ mới . 1 biến lưu địa chỉ ô nhớ mới
    // Rất tác dụng với tình huống object lồng object rất sâu 

    //Cách 2: Dùng toán tử spread: Rải hết giá trị phần tử nếu k lồng nhau
    //obj= {...obj}
    obj.name ="Mercedes"
    console.log(obj)
  }

  const a= {
    name: "BMW"
  }

  func(a)
  console.log(a)   // a cũng bị đổi thành Mercedes : 
  // Đây chính là 1 Side effect : Tác dụng phụ . Tránh hiện tượng side Effect xảy ra, và tận dụng tính năng của nó


//Lưu ý : so sánh 2 object giống hệt nhau đều là false