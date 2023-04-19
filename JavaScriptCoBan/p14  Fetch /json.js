/**
 * 1. Event listener 
 * 2. JSON 
 * 3. Promise 
 * -sync
 * -Async
 * -Nỗi đau -callback hell
 * -Lý thuyết , cách hoạt động 
 * - Thực hành , ví dụ, ứng dụng thực tiễn 
 * 4. Fetch 
 * - JSON server : API Server một API gần giống backend làm . giống như làm việc trên thực tế
 * 5. DOM location 
 * 6. Local storage
 * 7. Session storage
 * 8. Coding convention 
 * 9. Best Practices
 * 10. Mistakes
 * 11. Performance
 * 
 */

/**
 * 
 * lesson 105
 * 1. front- end : Xây dựng giao diện người dùng 
 *                + Logic nội dung hiển thị như nào là do Front End xử lí
 * 2. back end : Xây dựng logic xử lý 
 *              + Cơ sở dữ liệu 
 *              + Chữ đó lưu ở đâu , ghi những gì thì back end xử lí
 * 
 * API (URL) -> Application programing interface ( cổng giao tiếp )

Backend -> API(URL)  -> Fetch -> JSON/XML
-> JSON.parse -> Javascript types
Render ra giao diện với HTML

*/
var postAPI = 'https://jsonplaceholder.typicode.com/posts'

//stream : trả về 1 luòng dữ liệu 
fetch(postAPI) // Nó là 1 hàm dựng sẵn nhưng bên trong nó trả về promise
.then(function(responce){           // fetch trả về 1 stream( reponse) trước- luồng dữ liệu trả về--  chính cái ressponse này lại là 1 object
        return responce.json()      // responce là 1 object có phương thức .json() và phương thức đó sẽ trả lại 1 promise
                                    //.json() làm luôn thao tác JSON.parse --> java script Types
    })

.then(function(posts){       // Chúng ta đang lấy ra những bài post --> nhận dữ liệu thành công thì hiển thị ra giao diện người dùng
    console.log(posts)       // posts : đang là 1 mảng chứa 100 object bên trong
    var htmls = posts.map(function(post){      // hàm map() nhận lại được mảng tương ứng với các phần tử mà được lọc ra từ posts
                                                // Nhưng nó lại trả ra dạng String vì mình đã nối chuỗi ở trong này
                                                // post là từng phần tử của mảng posts được duyệt qua . post.title là lấy ra key title
        return `<li>
        <h2>${post.title}</h2>               
        <p>${post.body}</p>
        </li>`
    });
    var html = htmls.join('');    // Dùng join để nối lại thành 1 chuỗi liên tục 
    document.getElementById('l105-post-block').innerHTML= html;
})

.catch(function(error){
    console.log('error')    // nếu có lỗi hoặc trong trường hợp rớt mạng sẽ bị bắt lỗi ---> có thể đưa hẳn mảng html vào để hiển thị giao diện có lỗi 
})

// Dùng fetch để gọi API lên -> nhận được responce -> từ responce lấy ra được promise trong có chứa dữ liệu đã được JSON.parse sang jave script Types
// Sau đó --> Sử dụng kỹ thuật javaScript lặp qua Render ra giao diện người dùng


// l106 Tạo ra 1 JSON Server từ thư viện Json Server
