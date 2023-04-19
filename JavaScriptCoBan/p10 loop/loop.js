//l56
/**
 *  Vòng lặp -Loop
 *  1. for - lặp với điều kiện đúng  
 * 2.for/in -Lặp qua key của đối tượng array object string
 * 3.for/of - Lặp qua value của đối tượng
 * 4. while- Lặp khi điều kiện đúng   // Gần giống vòng for
 * 5 do/while - Lặp ít nhất 1 lần , sai đó lặp sau khi điều kiện đúng
 */


//CÁC VÍ DỤ OBJECT - STRING - ARRAY MẪU 

var myObject = {
    name: 'Nguyễn Huỳnh',
    age: 18,
    address: 'Hà Nội'
};

var myArray =[
    'java',
    'reactNative',
    'css'
];  

var myString = 'JavaScript';  



//l57 For Loop

for (let i=1; i<=100; i++) {
    console.log(i);
}
  
//Hoàn toàn có thể viết 
 var i= 1;
for (;i<=100; i++){  // Có thể không khai báo tham số đầu . tham số 2 để trống thì là vòng for vô hạn 
    console.log(i);
}

for (;i<=100; ){  // Có thể không khai báo tham số đầu . tham số 2 để trống thì là vòng for vô hạn 
    i++           // Cũng có thể viết tham số thứ 3 ở đây để tăng giá trị vòng lặp lên
    console.log(i);
}

//l58 for loop Lấy phần tử của mảng 


 for (i=1; i < myArray.length ; i++)        // length Không cần () --- Về hiệu năng nên để hàm đếm chiều dài sang bên ngoài 
 {
     console.log(myArray[i]+'</br>');
 }






 //l60 for in   : chỉ ưu tiên dùng cho object : k dùng cho String và Array
 
 //Cách : Lấy key của 1 Object

  for (let a in myObject) {
      console.log(a )                     // Lặp qua từng key của object 
      console.log(myObject[a]+ '</br>');    // Cách lấy ra value tương ứng key đó ra
  }

// Cách : Lấy ra phần tử của 1 chuỗi 
 
  for(let b in myString){
      console.log(b);             // Lặp qua từng chỉ mục của chuỗi 
      console.log(myString[b])   // lặp lấy ra từng chữ cái của chuỗi 
  }

  // Cách : Lấy ra phần tử của 1 chuỗi 
 
  for(let c in myArray){
    console.log(c);             // Lặp qua từng chỉ mục của chuỗi 
    console.log(myString[c])   // lặp lấy ra từng chữ cái của chuỗi 
}

  //l61 for of   : ưu tiên dùng cho String và Array

  // Cách Lấy ra phần tử của 1 mảng
  
    for (let i of myArray) {
        console.log(i)             
    }
        
    // Cách lấy ra phần tử trong chuỗi 
   
      for (let i of myString){
          console.log(i);            // Biến đếm lấy ra được value của phần tử
                                        // Trường hợp in là chỉ lấy ra được số lượng phần tử của chuỗi 
      }


      //Cách lặp qua từng keys của 1 đối tượng 

    for (var i of Object.keys(myObject))   // Lặp lấy ra được 1 mảng các key 
    {
        console.log('</bt>' + i + '</br>')    // Cách lấy ra từng key của object 
        console.log('</br>' + myObject[i] + '</br>' )

    }
        // Cách lặp qua từng value của 1 đối tượng  
    for ( var i of Object.values(myObject)) {     // Cách lấy ra thẳng các value của object 
        console.log(i)
    }

// l62 while loop : Vòng lặp cứ chạy đến khi điều kiện còn đúng
 
var i = 0;

// while (i < 100){
//     i++;
//     console.log(i)
// }

while (i < 100){
   i++
    console.log(i + '</br>')
}

var l62 = 0;
while(l62 < (myArray.length-1)) {
    l62++
    console.log(myArray[l62]);
}


// l63 do while loop : Vòng chạy sẽ được chạy 1 lần dù điều kiện bên trong có sai , Còn nếu điều kiện còn đúng vòng lặp còn chạy 

var l63 = 0; 
do {
    l63 ++
    console.log(l63 + '</br>');
}
while(l63 < 100);


// l64 break : Mỗi khi gặp nó sẽ  thoát khỏi vòng lặp 
// continue: Mỗi khi gặp nó bỏ qua tẩt cả bước phía sau của vòng lặp

for (let i =0 ; i<10 ; i++){
    console.log('Chỉ cho in tới 4 thôi')

    if (i>= 5) {
        break     // Khi tới 5 là thoát khoit vòng lặp
    }
}


for (let i =0 ; i<10 ; i++){
    if (i%2 !=0) {
      continue    // Cứ gặp số lẻ là không cho in ra Vòng lặp sẽ tiếp tục ngay khi gặp continue và bỏ qua các câu lệnh phía dưới 
    }
    console.log('</br>' + i)   // Chỉ cho in ra số chẵn thôi 

}

// l65 Nested Loop : Vòng lặp lồng nhau 
var myArray_2 = [[1,2], [3,4], [5,6]];  // 3 mảng con của 1 mảng cha
 for (var i=0; i< myArray_2.length; i++){
     for (let j = 0; j<myArray_2[i].length; j++){
         console.log(myArray_2[i][j])
     }
 }

 // l66 ví dụ thêm về vòng lặp
 // In ra dãy số là bội số của 5
  for( let i=0; i<=100; i+=5){
    console.log('</br>' + i) 
    
  }

  //l67 Hàm đệ quy   // Cứ gặp hàm đệ quy là quay vào trong bới bới tới 0 là quay lại in tới cái đầu 
  // 1, Xác định điểm dừng 
  // 2. Logic handle => Tạo ra điểm dừng


  // Đề bài k cho dùng vòng lặp có sẵn
  function countDown(num){
if (num >0){
    console.log('</br>'+num)
    return countDown(num -1)
}
return num; // Đây k phải hàm in nên k in được ra gì cả
  }
//    var demLui = parseInt(prompt('Nhập số mà bạn muốn đếm lùi '))
  countDown(8)


// Đếm duyệt số phần tử của mảng

function loop(start, end , cb){
if(start < end){     // Đảo ngượi lại điều kiện còn đúng thì là, điều kiện sai thì kệ 
    cb(start)
    return loop(start +1, end , cb)
}
}
 loop(0, myArray.length ,function(index){
     console.log('index :' + index + 'và value :' + myArray[index])       // Số phần tử của mảng rồi lấy luôn ra giá trị của mảng
 })


 // Tính giai thừa dùng đệ quy 

 function giaiThuaLoop(num){
     var ketQua = 1
     for (i= num ; i>0 ; i--){
         ketQua =ketQua * i;
     }
     return ketQua;
 }
 console.log('giai thưa của số đó là:' + giaiThuaLoop(6) )

 

 function giaiThua (num){
     if (num >0){

         return num * giaiThua(num-1);   // Cứ gặp hàm giai thừa là đứng lại tới khi trạm tới hàm return ở dưới để k kiếm được hàm dequy nào nữa thì nó sẽ dừng
     }
     return 1;

 }
 console.log('giai thưa của số đó là:' + giaiThua(6) )
