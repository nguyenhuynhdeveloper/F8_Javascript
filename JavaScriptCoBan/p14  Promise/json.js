/**
 * 1. Event listener 
 * 2. JSON 
 * 3. Promise 
 * -sync
 * -Async
 * -Nỗi đau -callback hell
 * -Lý thuyết , cách hoạt động 
 * - Thực hành , ví dụ, ứng dụng thực tiễn 
 * 3, Fetch 
 * 4. DOM location 
 * 5. Local storage
 * 6. Session storage
 * 7. Coding convention 
 * 8. Best Practices
 * 9. Mistakes
 * 10. Performance
 * 
 */
// lesson 98 : JSON là Gì? 
//JSON: Khi làm front End luôn nhận được kiểu dữ liệu dạng Json từ Back End trả về --> Rồi lại chuyển về dạng JavaScript style để sử lý
 /* 1. Chỉ là 1 định dạng kiểu dữ liệu ( chuỗi)
 * 2. JavaScript Object Notation 
 * 3. JSON : Number, String , Boolean , Null , Array , Object 
 * 
 * Có 2 thao tác mã hoá : Encode / Giải mã: Decode
 * Chuyển đổi kiểu dữ liệu khác 
 * Stringify :JavaScript Types-> JSON  
 * Parse: JSON -> Javascript types
 */

var jsonArray  = '["JavaScript", "ReactNative"]'   // Trong json để ngăn cách các key dạng chuỗi phải -- Để thừa , cuối cũng lỗi 
var jsonObject = '{"name": "Nguyễn Huỳnh" , "age": 18 }'

var a = 'true';
console.log(JSON.parse(a));  //Chuyển đối JSON  về kiểu boolean trong JavaSCript

console.log(JSON.stringify(true))  //Chuyển từ boolean trong JavaScript sang Json 
console.log(JSON.stringify([
    'JavaScript', 'React Native'
]));

//lesson 99 Promise (sync, async)
/**
 * sync: Đồng bộ : là cái nap viết trước chạy trước  viết sau chạy sau , Js là ngôn ngữ đơn luồng 
 * async: Bất đồng bộ  các hàm hay tạo Async: setTimeout , setInterval , fetch , XMLhttpRequest , file reading , request animation frame
    js hỗ trợ để biết khi nào xong thì có Callback : để xử lí chuyện bất đồng bộ 
*/

/**
 * lesson 100 : promise (pain)
 * Callback hell : Đi vào đường cụt  --> Sử lý các tác vụ mà việc 1 phải dợi việc 2. việc 2 phải đợi việc 3, việc 3 phải đợi việc 4
 * pyramid of doom  : Kim tự tháp 
 */

/**
 * lesson 101: Promise (concept)
 * 
 */
 var promiseEx = new Promise  (  // Promise chính là 1 Object contructor  được ra mắt ở phiên bản ES6
 //Executor : Đối số của Promise là 1 function : Được thưc thi ngay lập tức khi được gọi
 function(resolve, reject ){   // Đối số 1: hàm resolve  . Đối số 2: hàm reject 
        // Logic
        //Thành công: resolve()
        //Thất bại: reject()
        resolve();
        // resolve('abc');   // Đối số của hàm resolve => đối số của function callback trong then 
        // resolve(['abc', 'edf', {id: 1, name: 'nguyen huỳnh'}]);
 }
 )
 // Bước 1 new Promise
 // Bước 2: executor


 // Promise tồn tại ở 3 trạng thái 
 // 1. Pendding
 // 2. Fullilled
 // 3. Reject

 promiseEx  // Sẽ có 3 phương thức mà rất hay thường xuyên sử dụng 

//  .then(function(doisoResolve){   // Khi resolve chính là function callback của then 
//     console.log('Successlly !')
//     console.log(doisoResolve); 
//  })

//  .catch(function(){  // Khi reject được gọi thì callback của catch được gọi 
//     console.log('Faiure !')     // Nếu có lỗi mà k bắt lỗi ở catch sẽ báo đỏ
//  })

//  .finally(function(){   // Khi resolve \\ reject được gọi thì callback của finally được gọi 
//     console.log('Done !')
//  })
// lesson 102 : Promise (chain)
/**
 * Tính chất chuỗi : Kết ra của then trước là đầu vào của then sau 
 *  
 */
 
// promiseEx           //DÙNG CHO NHỮNG NGHIỆP VỤ THỰC HIỆN CÁC BƯỚC TUẦN TỰ ĐẦU RA THEN TRƯỚC LÀ ĐẦU VÀO CỦA THEN SAU 
// .then(function(){
//     return new Promise(function(resolve){   //Khi return ra cái k phải Promise thì then sau sẽ được chạy luôn ==> nếu là Promise thì phải đợi Promise chạy xong 
//         setTimeout(resolve('abc'),3000);          //SetTimeout sau 3 s mới cho chạy hàm resolve
//     })
// })
// .then(function(data) {     // Khi then trước return ra 1 Promise thì then sau chính là then của thằng Promise của then trên -- Chứ không phải là then của th Promise gọi nó
//      console.log(data)     // in ra số 1 là kết quả của then trên 
//      return 2
//  })
//  .then(function(data) {
//     console.log(data)     // in ra số 2 là kết quả của then trên 
//     return 3
// })                        //KHÔNG ĐƯỢC ĐỂ DẤU ; ĐỂ ĐẢM BẢO THEN SAU LẤY ĐƯỢC ĐẦU RA THEN TRƯỚC

// Bài toán sau 1s in số 1. sau 1s tiếp in số 2....

// function sleep(ms){
//         return new Promise(function(resolve,reject){
//             setTimeout(resolve ,ms); });      // Hàm resolve này không được thêm () . nếu thêm vào (agrement) sleep lại k chạy đúng
//         }

//         sleep(1000).then(function(a){   // function () này chính là hàm resolve() => Đối số của resolve là truyền cho function()
//             console.log(a);
//             console.log('1');
//             return sleep(1000)
//         })
//         .then(function(){
//             console.log('2');
//             return new Promise(function(resolve, reject){
//                 reject('Có lỗi rồi thoát đây , Thằng catch bắt được')
//             })
//         })
//         .then(function(){
//             console.log('3');
//             return sleep(1000)
//         })
//         .then(function(){
//             console.log('4');
//             return sleep(1000)
//         })
//         .catch(function(err){    //Thường phải có 1 thằng catch ở cuối để đảm bảo sẽ có lỗi là được bắt và trả về gì đó
//             console.log(err)
//         })

/**
 * lesson 103 
 * Promise methods (resolve , reject, all)
 * 1. Promise.resolve
 * 2. Promise.reject
 * 3. Promise.all
 * 
 * Có 1 số thư viện để làm gì đó quy ước đầu ra của nó luôn luôn là 1 promise                       
 */
  // Cách thông thường
//    var promise103 = new Promise( function(resolve, reject){
//     // Biểu thức logic
//     //    resolve('Success !');
//        reject('Error!');
//    })

//    // Cách khi mà biết nó luôn luôn thành công 
//     var promise103 = Promise.resolve('Success');
//     promise103.then(function(result){
//         console.log('result: ', result);
//     })
//     .catch(function(err){
//         console.log('result:', err);
//     })


//  // promise.all : Khi 2 promise chạy song song nhau không phụ thuộc nhau
//   var promise1 = new Promise(
//       function(reject){
//           setTimeout(function(){
//             reject([1])
//           },1000);
//       }
//   )   
//   var promise2 = new Promise(
//     function(resolve){
//         setTimeout(function(){
//           resolve([2,3])
//         },2000);
//     }
// )   

// Promise.all([promise1, promise2])  // Promise.all lại trả về 1 promise : Tức khi cả 2 thằng promise thành phần mà cũng resolve thì nó mới trả reslve
//// lv1
// .then(function(argResolve){        // 2 promise thành phần phải được nhét trong 1 mảng
//     console.log(argResolve);
// })

////lv2
// .then(function(argResolve){
//     var argResolve1 =argResolve[0];
//     var argResolve2 = argResolve[1];
//     return argResolve1.concat(argResolve2)
// })

// .then(function(argResolve){   // then sau sẽ lấy kết quả của then trước được nhét vào đối số
//     console.log(argResolve)
// })
// .catch(function(argResolve){    // Nếu 1 trong 2 promise con mà có lỗi thì Promise.all sẽ chạy catch 
//     console.log("có lỗi : ", argResolve)
// })

/**
 * lesson 104 : Promise Example
 * 
 * 
 */
 var users =[

    {
        id: 1,
        name:'Son Dang'
    },

    {
        id: 2,
        name:'Nguyen Huỳnh'
    },

    {
        id: 3,
        name:'Người dùng '
    }
 ]

 var comments =[
    {
        id: 1,
        user_id: 1,
        content :'Nội dung 1 '
    },

    {
        id: 2,
        user_id: 2,
        content :'Nội dung 2'
    }

 ]
 // 1. lấy comments
 // 2. Từ comments lấy ra user_id,
 // 3. Từ user_id lấy ra user tương ứng 

 // Fake API là mô phỏng cho cái hàm mà cái url mà ô backend trả về cho front end

 function getComments(){     // Lấy ra cái comment của người dùng nhập vào 
     return new Promise(function(resolve){
         setTimeout(function(){
            resolve(comments)   //  Sau 1 giây mới cho chạy hàm resolve có đối số đầu vào là dữ liệu comments
         },1000)
     })
 }

 // Viết ra được 1 hàm mà có thể ra được cái user mà có id = user_id mà promise.then vừa lấy được 

 function getUsersByIds (userIds){
     return new Promise(function(resolve){
        setTimeout(function(){
             var result = users.filter(function(user)   // Biến user đây là biến cục bộ của hàm filter chứa giá trị sau khi được trả về -- chỉ lọ ra các user nằm trong cái list có comment thôi
             {
                 return userIds.includes(user.id)   // Kiểm tra trong mảng userIds có chứa phần tử user.id không ==> True/false
                                                    // Nghĩ ngược lại cái id nào mà nằm trong userIds thì mới đưa ra kết quả là true để filter nó đưa vào biến user - nhặt từ mảng users
            });
            resolve(result)   // Trả ra cái object mà có chứa id ( object users ) có comment 
  
             
        }, 1000);
     })
 }

 getComments().then(function(comments){   // Khi resolve chạy thì nó sẽ đưa ra biến mà nhận được từ hàm resolve
    // console.log(comments);   // Trả về 1 mảng chứa 2 object chứa comment nằm trong 
    var userIds = comments.map(function(comment){     // comment ở đây là 1 biến mà chứa user_id
        return comment.user_id        // lấy ra cái user_id nằm trong object comments
    });
     
    return getUsersByIds(userIds)
    .then(function(users){
        return {
            users : users,  // Đây là biến kết quả đầu ra của hàm getUsersByIds () có value là object mà có id có comment
            comments : comments   // Biến này vẫn là biến comments của hàm getComments()
        }
    });
    //  console.log(userIds)   //  Nhận ra 1 mảng mới chứa user_id của comment
})

    .then(function(data){
    console.log(data)   // Lấy ra được cả giá trị user và comment
    var commentBlock = document.getElementById('comment-block')   // Bắt lấy htmlDOM 
    var html=''
        data.comments.forEach(function(comment){       // forEach là hàm lặp qua các phần tử của mảng 
            var user = data.users.find(function(user){    // find là tìm ra 1 mảng có mà có user.id === comment.user_id
                return user.id === comment.user_id    
            });
            html +=`<li>${user.name}: ${comment.content}</li>`
        }); // Lọc ra cái comment
        commentBlock.innerHTML =html;
    })
    


    // Phải hiểu chức năng làm việc với Array 
    // Function, call back 
    // html DOM

    // Sau này ES6 có cú pháp viết theo kiểu Async / Await  sẽ k bị lồng nhau nữa. viết từ trên xuống dưới 