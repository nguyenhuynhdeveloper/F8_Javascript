// Đây chính là 1 đối tượng => Contructor function 
function Validator(options)   // Cái option đang ở đây là 1 object được truyền từ bên ngoài vào   ==> Hàm Validator nhận đối số lại là chính các method trong chính nó 

{  

     // Lấy element của form cần validate
     var formElement = document.querySelector(options.form)  // Bốc đúng cái form-id cần validator thôi . để phục vụ cho việc sau này áp dụng thư viện này cho nhiều form khác nhau 

    //Hàm thực hiện validate
    
    function validate(inputElement, rule){
        var errorElement =  inputElement.parentElement.querySelector(options.errorSelector);   // Đang từ đối tượng input nhập quay ra thẻ cha bên ngoài . rồi từ thẻ cha bên ngoài đó tìm đúng thằng form message => Đối số thứ chính là class của message nhập từ bên gọi hàm  
        var errorMessage;   // Chạy hàm rule truyền vào giá trị người dùng nhập
        
        // Lấy ra các rule của chính selector
        allRuleTest()
    
        var rules = selectorRules[rule.selector] ;  // Gán rules = mảng chứa full rule.test 

        for (var i=0 ; i< rules.length ; ++i)
        {
            errorMessage= rules[i](inputElement.value)  //  inputElement.value Chính là đối số value của hàm test của rule
            if (errorMessage) break   ;    // Khi có errorMessage 1 cái là break khỏi vòng lặp luôn 
        }

        // Nếu mà có lỗi 
        if(errorMessage){  // Nếu hàm test trả về cái không phải underfined
        errorElement.innerText = errorMessage;
        inputElement.parentElement.classList.add('invalid');   //Thêm 1 class css vào để có hiệu ứng màu đỏ
        }
        else
        {
        errorElement.innerText ='';   //Trong trường hợp người dùng blur ra bên ngoài thì truyền vào 1 chuỗi rỗng    
        inputElement.parentElement.classList.remove('invalid');   //Xoá class css để mất màu đỏ
        }
        return !errorMessage
    }




   
    
    if(formElement){   // Nếu mà khối form có tồn tại thì mới cho chạy các hàm này 

            var selectorRules = {};   //Cái object này đang chứa tất cả các rule.test 
            function allRuleTest () {
                options.rules.forEach(function (rule){
                    if (Array.isArray(selectorRules[rule.selector]))    // Kiểm tra xem mảng có phải là mảng k 
                    {
                        selectorRules[rule.selector].push(rule.test)  // Nếu đối tượng xuất hiện lần 2 thì sẽ được đẩy vào mảng tiếp
                    }
                    else{
                        selectorRules[rule.selector]= [rule.test]   //Lần đầu tiên không phải là cái mảng thì lọt vào đây 
                    }                
            })
            }

            function eventOnblurOninput() {      
                options.rules.forEach(function (rule){
                var inputElement = formElement.querySelector(rule.selector);    // Lấy được các selector đối số của phần tử mảng rule truyền vào 
    
                if (inputElement){
                    // Xử lý trường hợp blur khỏi input 
                    inputElement.onblur = function() {
                    validate(inputElement, rule); 
                    }
    
                    // Xử lý trường hợp người dùng nhập vào input  => Bắt đầu gõ là ẩn lỗi đi 
                    inputElement.oninput = function(){     // oninput là sự kiện mà người dùng mỗi khi gõ vào 
                        var errorElement =  inputElement.parentElement.querySelector(options.errorSelector);   // Đang từ đối tượng input nhập quay ra thẻ cha bên ngoài . rồi từ thẻ cha bên ngoài đó tìm đúng thằng form message
                        errorElement.innerText ='';   // Khi người dùng vừa nhập cái là bỏ đi message   
                        inputElement.parentElement.classList.remove('invalid');   //Xoá class css để mất màu đỏ
    
                    }
                }
            });
            }
    

            //Khi submit form 
            function eventOnsubmit () {
                formElement.onsubmit= function (e){
                    e.preventDefault();   // Câu lệnh bỏ thuộc tính mặc định 

                var isFormValid = true;
    
                //Thực hiện lặp qua từng rule và validate luôn 
                options.rules.forEach(function(rule){
                    var inputElement = formElement.querySelector(rule.selector);   // Lấy các selector in put 
                    var isValid =  validate(inputElement, rule)   // validate tất cả các rule được lọc qua 
                if( !isValid) {
                    isFormValid = false;  // Nếu mà chỉ cần 1 thằng có lỗi thì isFormValid sẽ thành false
                }
                });
    
                if( isFormValid){   //Nếu không có bất cứ lỗi gì 
    
                    // Trường hợp submit với javascript
                if (typeof options.onSubmit=== 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable]')     //Hiện tại nó đang là 1 node list  Bắt tất cả những thằng nào đang có attribute là name
                    var formValues = Array.from(enableInputs).reduce(function(values, input ){       // Phải Array.from() Để convert nó về dạng mảng
    
                        return (values[input.name] =input.value)  && values ;   //Khi viết toán tử && thì mặc định kiểu gì cũng trả về thằng cuối cùng 
                    }, {});
    
                    options.onSubmit(formValues)     // Gọi lại hàm onSubmit để có thể in ra console
                }
                // Trường hợp dùng submit mặc định của html
                else{
                    formElement.submit()  ; // Submit với hành vi mặc định 
                }       
                }   
            }
        }

        eventOnblurOninput()
        eventOnsubmit ()

    } 

}


// Định nghĩa rules
//Nguyên tắc của các rules 
//1. Khi có lỗi => Trả ra message lỗi 
//2. Khi hợp lệ => Trả về undefined

Validator.isRequired =function(selector, message){    // Đây là cách viết khác của khai báo phương thức trong 1  object 
return {
    selector : selector ,
    test : function (value) {
        return value.trim() ? undefined: message || ' Vui lòng nhập trường này '
    }
}
}

Validator.isEmail = function(selector , message){

    return {
        selector : selector ,
        test : function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)  ? undefined : message || 'Trường này phải là email '
        }
    }
}

Validator.minLength = function(selector, min, message){

    return {
        selector : selector ,
        test : function (value) { 
            return value.length >= min   ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự `
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){   // Tham số thứ 3 là chuỗi text hiện thống báo 
    return {
        selector: selector,
        test : function(value){
            return value === getConfirmValue()  ? undefined : message || 'Giá trị nhập vào không chính xác'   // getConfirmValue chính là giá trị mà ô input trên nhập vào 
        }
    }
}