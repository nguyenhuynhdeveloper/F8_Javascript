/**
 * Sử dụng json server để tạo ra 1 cổng URL trong đó có nội dung của 1 hay nhiều chuỗi JSON có sẵn trong đó 
 * B1: phải cài nodeJS để có được npm là trình quản lý các tệp và thư viện 
 * B2: add 1 forder json_server vào trong workspare , và cài 
 *  mở terminal của file json_server gõ
 * npm init : enter đến hết sinh ra 1 file package.js : là file chứa các thư viện mà bạn sử dụng 
 * đứng tại foder json_server gõ npm i json-server   : sau khi cài xong thì sẽ thêm 1 thư việnvafo dependece
 * Trong foder json_server tạo 1 file db.json để tạo ra 1 file dữ liệu dạng json
 * Trong script của package.js thêm "start":"json-server --watch db.json"
 * Để chạy API gõ npm start là nó sẽ tự chạy cổng API === json-server --watch db.json   ===> tạo ra 1 url
 * 
 */
// Tắt cửa số terminal baeng thùng rác là tắt luôn cổng API
// // Lesson 108: 
// var numberApi = 'http://localhost:3000/number'
//  fetch (numberApi)
//  .then(function(response){
//      return response.json();
//  })
//  .then(function(number){
//      var shows = number.map(function(show){
         
//        return `<div>
//          ${show.id} </br>,
//          ${show.name}</br>,
//          ${show.description}</br>
//          </div>`
//      })
//      document.getElementById('show').innerHTML = shows

//      console.log(number);
//  })

 // Lesson 109-180: Sử dụng Postman làm việc với REST API
 /**
  * API server (Fake) == Mock API 
  * Sau này lập trình viên front end phải chờ cád lập trình viên back end làm xong API , Để không phải chờ ta dùng Mock API 
  * -CRUD
  *     -Create : Tạo Mới --> POST
  *     -Read : Đọc   --> GET
  *     -Update: Chỉnh sửa -->PUT/ PATCH
  *     -Delete : Xoá --> DELETE
  * Khi chưa có back end thì phải dùng cái Phần mềm postman để kiểm tra xem dữ liệu có hoạt động đúng không 
  * 
  * 
  *  Khi DELETE và PUT/PATCH tì phải truyền id để biết được xoá hay sửa ông nào 
  */

 /**
  * Lesson 110 : POST-PUT/PATCH - DELETE - GET
  * thêm sủa xoá khoá học với fetch và REST API 
  * 
  */ 

 var listNumberAPI = 'http://localhost:3000/number';

 //Cách 1
//  function start(){
// getNumber(function(result_of_then_function_response){
//     // console.log(result_of_then_function_response);
//     renderNumber (result_of_then_function_response)
// })
//  }

//Cách 2: viết ngắn gọn bá đạo 
 function start(){
getNumber(renderNumber) ;  //renderNumber chính là callback của hàm then thứ 2
handleCreateForm()
 }

  start();


  // function  child
// // Cách 1
//   function getNumber() {    // Đây là 1 hàm lấy giá trị tử back eng đẩy lên giao diện

//     fetch(listNumberAPI)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response_2){   // response ở đây chính là đối số = bế hết kết quả của th then trước
//         console.log(response_2)
//     })
//   }

  // Cách 2
  function getNumber(callback) {    // Đây là 1 hàm lấy giá trị tử back eng đẩy lên giao diện

    fetch(listNumberAPI)
    .then(function(response){
        return response.json()
    })
    .then(callback)    // hàm callback hiện tại ở chỗ này chưa được tạo và chưa có . sẽ tạo ở trong funnction start
  }
// Hàm gửi đi dữ liệu xuống back end ( Post man)
   function createNumber(data, callback)   // Đối số ở đây chính là và description nhận được 
       {
       var options = { 
           method: "POST",
           headers: {
            'Content-Type': 'application/json'
          },
           body: JSON.stringify(data)
       }
       fetch(listNumberAPI, options ) // Đối số thứ 2 options chính là định dạng kiểu phương thức
        .then(function(response){
            response.json();
        })
        .then(callback)    // Tương tự vẫn truyền 1 callback mà ở đây sẽ để là renderNumber. callback này phải viết ỏ đối số của hàm 
        }


  // Hàm tạo view render ra trình duyệt hiển thị rat trình duyệt 
  function renderNumber (numbers){  // RenderNumber này có đối số là dữ liệu mà đã được parse về dạng dữ liệu JavaScript Style
    var listNumberBlock = document.querySelector('#list-number')
    var htmls = numbers.map(function(number){   // numbers ở đây chính là kết quả của thằng then đầu tiên ,đã có kết qủa là dạng dữ liệu kiểu javaSCript Style
                                                 // number ở đây là của hàm map chính là từng phần tử được lặp       
    return `
    <h2>${number.name}</h2>
    <h2>${number.description}</h2>
    `

 })
 listNumberBlock.innerHTML = htmls;
  }


  function handleCreateForm (){
    var createBtn = document.querySelector('#create')
    createBtn.onclick =function(){
          var name = document.querySelector('input[name="name"]').value
          var description = document.querySelector('input[name="description"]').value

         
        var formData= {    
            name : name,    // chữ name đầu chỉ là key của objet formData vừa được khai báo 
            description: description,
        };
        createNumber(formData);
      }
  }
