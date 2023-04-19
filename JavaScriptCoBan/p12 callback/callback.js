//lesson 74
/** 
 * 
 * callback 
 * Là hàm function được truyền qua đối số khi gọi hàm khác
 * 1. Là hàm
 * 2, Được truyền qua đối số
 * 3. Được gọi lại ( Trong hàm gọi đối số callback)
 */


function myFunction(argument){
    if (typeof argument === 'function') {  // Kiểm tra chắc chắn đối số là hàm thì mới cho chạy
        argument('Học lập trình ');        //Đây không khác gì cách viêt myCallback('Học lập trình')   vì hàm myCallback = argument
    }
}
function myCallback(value) {
    console.log('value: ' , value)
}

myFunction(myCallback); // Hàm myCallback lại là đối số của myFunction 

// lesson 75 
var myArray = [
    'Javascript',
    'Bootstrap',
    'Jquery',
    'React Native'
]

function myFunction75 (array){
    console.log(array)
}

myArray.map(myFunction75);  // Thả đối số là tên hàm vào đây k cần () -- Đây chính là callback
//

// Viết lại 1 function map

Array.prototype.map2 =function(callback){
    var arrayLength = this.length;
    var output =[];
    for (let i=0 ; i<  arrayLength ; ++i){
       var result = callback(this[i], i);
       output.push(result);   // Đẩy thêm 1 phần tử vào 1 array  sau mỗi vòng lặp là đẩy thêm kết quả vào 
    }
    return output;   // Đây là hàm return của map 2 
    }
    
    myArray.map2(function(array , index){
        console.log(index , array);
    });

//

var htmls = myArray.map2(function(array){
    return `<h2> ${array}</h2>`;        // Đây là hàm return của  map 2
})

console.log(htmls.join(''));   //Chuyển 1 mảng thành 1 chuỗi string


// lesson 76 Empty elements of array
// Viết lại các hàm forEach , find , filter , some , every , reduce
// Khi khai báo var myArray = new Array(10)  chỉ viết 1 số như vậy sẽ hiểu là 10 là chiều dài của mảng 
// myArray.push('a' , 'b', 'c') // Khi đẩy phần tử vào mảng thì sẽ hiểu tiếp theo là có 13 phầm tử thuộc mảng
 
//Khi dùng vòng lặp for( let i =0 ; i< myArray.length ; i++)  // Thì sẽ lặp qua 13 phần tử 
// Còn nếu dùng vòng lặp for in thì chỉ quan tâm tới phần tử thực , và lặp 3 vòng

//lesson 77 : Xây dựng forEach2() 
  myArray.forEach(function(element, index , originArray ){   // forEach()  không return gì cả  -- forEach() Không chạy qua phần tử empty 
      console.log(element, index, originArray);
  })

  Array.prototype.forEach2 = function(callback){
      for (let index in this){    // Làm 1 vòng lặp qua các phần tử của mảng gọi tới phương thức forEach2
          if(this.hasOwnProperty (index)){   // Do forEach2 cũng là 1 thuộc tính thuộc nhóm phương thức --proto-- nên nó cũng bị lặp bên phải dùng hàm hasOwnProperty chỉ đưa ra kết quả true cho các element chung 1 nhóm 
              callback(this[index], index, this);
          }
      }
  }



  myArray.forEach2(function(element, index , originArray ){   
    console.log(element, index, originArray);
})


//lesson 78 : Xây dựng filter()  : Lọc ra được tất cả phần tử thoả mãn điều kiện này 
var myArray78 = [
    {
        name: 'JavaScrpit',
        coin: 1000
    },
    {
        name: 'React Native',
        coin: 2000
    },
    {
        name: 'NodeJs',
        coin: 1000
    }, 
    {
        name: 'Backend',
        coin: 1000
    },
]

// Hàm filter gốc
var filterArray = myArray78.filter(function(element , index , originArray){
    console.log(element, index, originArray);  // Vòng lặp và trả về tương tự như forEach không lặp qua array  trống
    return element.coin > 1000;              // filter có return 
});

console.log(filterArray);  // Sẽ trả ra phần tử có số coin >1000

// Xây dựng 1 hàm filter 2
Array.prototype.filter2 = function(callback){

    var output = [];
    for(let index in this){               // Lặp qua phần tử của mảng -- qua key của object 
        if(this.hasOwnProperty(index)) {
           var result = callback(this[index] , index, this)
           if (result){                   // Nếu phần tử nào thoả mãn điều kiện thì đẩy phần tử đó vào trong mảng output
               output.push(this[index]);   
           }
        }
    }
    return output;
}
// Dùng hàm filter2
var filterArray2 = myArray78.filter2(function(element , index , originArray){
    // console.log(element, index, originArray);
    return element.coin > 1000;              
});
console.log(filterArray2);
 
// lesson 79 : Xây dựng hàm some() : Tương tự toán tử ||  Trả lại kết quả true/ false xem có 1 phần tử tối thiểu nào thoả mãn điều kiện đưa ra hay không  --Kiểm tra là đúng rồi thì ngừng vòng lặp luôn k kiểm tra nữa

 Array.prototype.some2 = function(callback){
     for (let index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index], index, this)

            if(result){   // Nếu mà  kết quả là true thì trả về true
                return true;
                break;    // Khi thấy true cái kà thoát khỏi vòng lặp luôn 
            }
        }
     }
     return false  // Ngược lại sau tất cả vòng lặp mà k có cái nào true thì trả về false
 }


 var someArray = myArray78.some2(function(element, index){
     return element.coin >1000; 
 })
  
console.log(someArray);

// lesson 80 : Xây dựng hàm every() : Tương tự toán tử &&   Tất cả các phần tử phải thoả mãn điều kiện mới True. 1 cái sai là false luôn 

Array.prototype.every2 =function(callback){
    var result = true  
    for( let index in this){
        if(this.hasOwnProperty(index)){
            if(!(callback(this[index], index , this))){
                result = false;
                return result;
                break;
            }
        }
        }
    return result
} 

var everyArray = myArray78.every2(function(element, index){
    return element.coin >70; 
})
 
console.log(everyArray);