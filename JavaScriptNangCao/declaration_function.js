console.log(declaration(1, 2))  

//  console.log(expression(1, 2))   // Đây cũng là gọi hàm expression thì k thể nào gọi hàm trước khi  khai báo được
    // console.log(a)       // Đưa ra lỗi is not defined


    function declaration(a, b) {  // Bắt buộc phải đặt tên -- Khai báo bằng chữ function -- Chỉ duy declaration có thể gọi hàm trước khi định nghĩa
        return a+b 
    }

    // Expression function 

    var expression = function autoLogin(a, b) {  // Xuất hiện toán tử gán -- có thể đặt tên OR không cần -- tên biến có thể gọi hàm 
        return a+b
    }

    a = expression
    console.log(typeof a)        // trả ra 1 function 
    console.log(expression(1, 2))   // Đây cũng là gọi hàm 
    console.log(declaration(1, 2))  

    const b= ''

    if(!b) {
        console.log("Những cái đưa ra giá trị false thy : 0 , false, null, undefined, NaN , ,/"" '' " )
    }




    console.log("abc")