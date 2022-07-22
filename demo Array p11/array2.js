/** l68 Array methods:
 * forEach()
 * every()  
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */

var myArrays = [
    {
        id: 1,
        name: 'nguyễn huỳnh',
        position: 0
    },
    {
        id: 2,
        name: 'Trưởng phòng',
        position: 100
    },
    {
        id: 3,
        name: 'Phó giám đốc',
        position: 100
    },
    {
        id: 4,
        name: 'Giám đốc',
        position: 100
    },
    {
        id: 6,
        name: 'Giám đốc',
        position: 100
    },
    {
        id: 7,
        name: 'Tổng giám đốc',
        position: 100
    },
]

// Tất cả các hàm Gần giống 1 vòng lặp thôi === chỉ khác nhau return các giá trị khác nhau -> (CHỨC NĂNG KHÁC NHAU)

//-----forEach()  : Lặp qua từng phần tử của mảng và thực hiện hành động ở trong callback   
var newArray = []
newArray = myArrays.forEach(function (each, index) {
    console.log(each)
    return index
});

console.log(newArray)    //-------false

//-------- every() : Kiểm tra xem tất cả các phần tử của mảng có thoả mãn 1 điều kiện nào k -----AND return true/false

var myEvery = myArrays.every(function (each, index) {
    console.log(index);
    return each.position === 0;         // Ở đây tất cả các vị trí đều bằng 0 thì trả về true , nếu 1 cái khác 0 thì trả về false

});
console.log('every : ' + myEvery);

// ----------some() :Kiểm tra 1 phần tử trong mảng thoả mãn đk nào đó, 1 cái true là true ------OR return true/false

var mySome = myArrays.some(function (each, index) {
    console.log(index);
    return each.position === 0;
});
document.write('some:' + mySome);


//-----------find() : Tìm kiễm xem có phần tử gì đó k // Trả về phần tử đó và chỉ trả về 1 phần tử thôi 

var myFind = myArrays.find(function (each, index) {
    console.log(index);
    return each.name === 'Giám đốc';
});
console.log(myFind);


//---------------  filter() : Giống find nhưng trả về tất cả phần tử thoả mãn ---- thoả mãn điều kiện lọc sẽ được đưa ra nhờ return ---- Điều kiện viết ngay sau return chứ return ở mấy hàm này không phải là trả ra chính xác cái gì
var myFilter = myArrays.filter(function (myArray, index) {
    console.log(index);
    return myArray.name === 'Giám đốc';      //return ở đây chỉ là giá trị true/false để quyết định phần tử đó có được lọc ra đưa vào mảng mới hay không 
});

console.log(myFilter);

// l69: Array map()
//BÀI TOÁN : copy lại 1 mảng đã cho và thêm xoá 1 số phần tử trong đó để tạo ra 1 mảng mới 

//------------  map() : khi muốn chỉnh sửa thay đổi element của 1 array 
//Thực tế map sử dụng rất nhiều rất nhiều , để người dùng nhìn thấy hiển thị view trong website

var myMap = myArrays.map(function (eachElement, index, originArray) {    // Đối số 1: là từng phần tử của mảng được duyệt qua -- đối số 2 là key thứ tự phần tử
    return {                                                                //Đối số 3: là mảng nguyên gốc ban đầu không tác động gì cả
        id: eachElement.id,
        name: `vị trí : ${eachElement.name}`,
        position: eachElement.position,
        positionText: `Độ quan trọng: ${eachElement.position}`,
        // originArray: originArray,
        originArray: myArrays,   // Cách 2 để đưa thẳng hàm nguyên gốc vào trong mảng mới -- nên đối số thư 3 ít khi được dùng 

    }

});    //  Trả vể 1 mảng và trong function trả về cái gì thì element mảng mới sẽ nhận về cái đó- trong đối số của map bắt buộc phải đưa vào 1 function 
//Duyệt qua từng phần tử và gọi ngược lại hàm đã truyền vào đối số

console.log(myMap)

//l70 Array reduce()
//-------------------- reduce() : Khi muốn nhận về 1 giá trị duy nhất sau khi đã tính toán và xử lí các phần tử trên 1 array
//Kết quả trả về luôn là cái accumulator : là cái biến tích trữ
// Ví dụ : mong muốn nhận về tổng số position của tất cả mảng

//Cách không đùng reduce()
var totalPosition = 0;
for (var myArray of myArrays) {
    totalPosition += myArray.position
}

//  console.log(totalPosition);

function functionTinhToan(accumulator, currentValue, currentIndex, originArray)   // Hàm k nhất nhiết đủ 4 đối số: 1. Là giá trị lưu trữ lần chạy đầu tiên lấy đối số 2 của hàm reduce  là initial value, 2. Giá trị trả về hiện tại  3.key stt hiện tại  4. Mảng gốc ban đầu cùng địa chỉ ô nhớ mới mảng gốc, thay đổi đây là gốc thay đổi 
// return cái gì lưu trữ cái đó
{
    return accumulator + currentValue.position;    // Giá trị tích trữ luôn được trả lại 
}
var myReduce = myArrays.reduce(functionTinhToan, 0)  // Phải có 2 đối số : đối số 1 hàm  mà sau mỗi vòng lặp reduce sẽ gọi . đối số 2: Giá trị khởi tạo ban đầu là tham số mà k bắt buộc
console.log(myReduce);                                 // Khi không có initial value nó sẽ lấy phần tử đầu tiên của mảng làm giá trị khởi tạo -> Thì curent value của function sẽ là phần tử thứ 2
// Khi muốn kiểu dữ liệu nhận về là gì thì sẽ tạo kiểu giá trị khởi tạo là vậy 

//l71 Array reduce() method
var numbers = [100, 200, 200, 200, 300, 100]
var total = numbers.reduce(function (bienTichTru, giaTriHienTai) {
    return bienTichTru + giaTriHienTai
}, 0);        // Trường hợp này k điền giá trị khởi tạo cũng được 

console.log(total)

newArrayReduce = myArrays.reduce((total, currentValue, index) => {
    //   total.push(currentValue)   // cách 1: để đưa curentValue vào total 
    //   total[index]= currentValue // cách 2 
    // return total

    return total.concat(currentValue)   // Cách 3 : Có thể sử dụng hàm concat , hàm push thì lại không dùng được
    // return total.push(currentValue)  // FALSE --> Kết quả sẽ báo lỗi : total.push is not a function 
    // return total[index]= currentValue   //FALSE --> Kết quả trả về phàn tử cuối cùng chứ không phải các mảng đã đươc thêm phần tử
}, [])
console.log(newArrayReduce)


//BÀI TOÁN : LÀm phẳng mảng Flat - 'Làm phẳng ' mảng từ Depth array - "Mảng sâu "
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOut, depthIndex) {
    return flatOut.concat(depthIndex);
}, []); // initial là 1 mảng rỗng để mong thu về là 1 mảng
console.log(flatArray);


//BÀI TOÁN lấy ra các khoá học courses đưa vào 1 mảng mới 
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML ,CSS'
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
];
var newCourses = topics.reduce(function (courses, topics_courses_title) {
    return courses.concat(topics_courses_title.courses)    // Nối mảng : nối biến lưu trữ với object courses
}, []);

console.log(newCourses);
// Tạo ra 1 khối html dạng String từ mảng mới nhận được 
var htmlArray = newCourses.map(function (course) {
    return `
    <div>  
    <p> id: ${course.id} </p>
    <h2> ${course.title} </h2>
    `;
});

console.log(htmlArray.join(''));  // Biến mảng thành 1 chuỗi cách nhau bởi dấu cách 

// l72 Phương thức reduce() có logic như thế nào  
// Tự code ra 1 phương thức reduce2 


Array.prototype.reduce2 = function (callback, result)   // Khai báo 1 phương thức mới cho kiểu mảng  -- Sử dụng hàm callback như kiểu 1 hàm đệ quy 
// callback ở đây tương ứng vói đối số function ; result tương ứng với đối số iniitialValue
{
    let i = 0;
    if (arguments.length < 2) {     // Kiểm tra xem trường hợp initialValue không được truyền 
        i = 1;            // Bắt đầu vòng lặp ở vị trí số 1
        result = this[0]  // Gán initialValue = phần tử đầu tiên của mảng
    }

    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)   // Tự nó gọi lại chính nó -- mà hàm callback ở đây là viết ở dưới là biến tích trữ + giá trị Hiện tại
    }
    return result;
}



var numbers_1 = [100, 200, 200, 200, 300, 100]
var total = numbers_1.reduce2(function (bienTichTru, giaTriHienTai, index, originArray) {
    console.log(bienTichTru, giaTriHienTai, index, originArray);
    return bienTichTru + giaTriHienTai
}, 10);
console.log(total);

//------"Array".reduceRight(...) :hoạt động tương tự reduce chỉ có cái khác đó là sẽ duyệt mảng tử cuối tới đầu 
// "Array".reduceRight((total, current, index, origin) => return total...)

const numbers1 = [10, 15, 20, 54, 60];
 
const takeReduceRight = numbers1.reduceRight(function(total, currentValue) {   
    console.log(currentValue);
    return  currentValue // Tương tự cách viết total = currentValue;
});
console.log(takeReduceRight)   // Sẽ trả về phần tử đầu tiên của mảng

const numbers2 = [10, 15, 20, 54, 60];
 
var result = numbers2.reduceRight(function(total, currentValue) {
    a= currentValue * total
    return a;   
});
 
console.log(result); // 9720000

// l73 String/ Array  includes() method 
// Phương thức includes() method có trong đối tượng String / Array --Kiểm tra xem String hay Array có phần tử nào hay không 

var myString73 = 'Huỳnh dep trai thi cu goi la vo doi luon';
console.log(myString73.includes('Huỳnh'));      // Kết quả của method includes() true hoặc false

var myArray73 = ['i', 'you', 'me', 'they']
console.log(myArray73.includes('i', -1))    // Đối số đầu tiên là phần tử cần tìm - Đối số 2: Vị trí bắt đầu tìm Trường hợp đối số thứ 2 ít dùng