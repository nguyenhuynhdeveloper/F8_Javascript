

 // lesson 118 : Template literals

 const myName = 'Java Script '
 const description = ' Course name' + myName;

 console.log(description);


 // Template String dùng kiểu nội suy biến vào trong String

 const descriptionNoiSuy = `Course name ${myName}  \\ \${} `   // Nối nhiều biến cứ thêm vào đây thôi 
 console.log(descriptionNoiSuy) 


 // Multiline String : Viết trên nhiều dòng

 const lines = `
 Line 1 
 Line 2 
 Line 3 
 Line 4
 `
// Bình thường nếu dùng '' phải dùng \n để có thể xuống dòng 
 console.log(lines);   // Sử dụng Template String Xuống dòng sao viết y như vậy in ra y như vậy 