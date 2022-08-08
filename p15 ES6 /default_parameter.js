
//lesson 121: Default parameter values  : Có thể định nghĩa ra các giá trị mặc định cho các tham số

function logger121(log) {

    if (typeof log === 'undefined'){
        log = ' Giá trị mặc định '
    }
    console.log(log)
}

logger121()   //Khi mà không truyền bất kỳ 1 tham số nào cho hàm thì nó sẽ cho chạy giá trị mặc định 

// Cách viết khác với ES6 sử dụng cho các trường hợp tham số không bắt buộc phải nhập 

function logger121_Orther(log = ' Giá trị mặc định viết luôn ở phần khai báo tham số  ') {
    console.log(log)
}

logger121_Orther()

function loggerDefault (log, type='log'){
    console[type](log)
}

loggerDefault('Message ....', 'warn');

