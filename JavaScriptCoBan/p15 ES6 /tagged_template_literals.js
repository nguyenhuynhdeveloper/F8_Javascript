
// lesson 125 Tagged template literals : Sử dụng 1 function và có thể gọi tới function đó qua cú pháp tagged literals 

function highlight([first, ...strings], ...values){    //Sử dụng destructuring để có thể phá Array đầu tiên chứa các thành phần không phải là giá trị nội suy ra 
    return values.reduce(function(acc, curr){           // acc là biến tích trữ . curr là giá trị hiện tại 
      return [...acc,`<span>${curr} </span>`,strings.shift()]   // Ý tưởng bao trùm return ra 1 mảng . trong đó Phần tử thứ nhất:  ...acc là biến tích trữ đã được phá mảng . phần tử thứ 2 của mảng : giá trị hiện tại được thêm vào với thẻ <span> .phần từ 3 của mảng là : phần từ đầu tiên của mảng được cắt ra bởi shift()
    },[first])   // Thằng first ở đây chính là giá trị khởi tại initial phải để trong 1 mảng để không bị tách ra từng dấu ,
    
    .join('')   // '' Để mỗi phần tử cách nhau bởi 1 dấu cách ==> nếu không ghi gì thì sẽ để mặc định là dấu , sau mỗi phần tử của mảng 
                // join('') : Biến mảng thành chuỗi qua cách nhau bởi dấu ' ' 
 }
 var brand ='F8';
 var course ='JavaScript';
 
 //Gọi hàm bằng cú pháp Tagged literals 
 var html = highlight`Học lập trình ${course} tại ${brand} !`   // Sử dụng dấu `` và truyền các biến vào dưới dạng Template String đưới dạng nội suy 
                                                     // Tham số thứ nhất của nó là 1 mảng mà không có chứa giá trị nội suy 
                                                     //Tham số từ tham số thứ 2 tương ứng là các biến nội suy trong tham số đưa vào 
 console.log(html);
 
 