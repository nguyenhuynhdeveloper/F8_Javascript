var $= document.querySelector.bind(document)
function Validator(formSelector) {

   var _this = this;
    var formRules = {}; // Tạo ra 1 object sẵn để chứa input.name và input.rule

    function getParent (element, selector ){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
        }
        element= element.parentElement
    }

/**
 * Quy ước tạo rules
 * - Nếu có lỗi thì return `error message`
 * - nếu không có lỗi thì return undefined
 */
    var validatorRules = {
         required : function(value){
             return value ? undefined : `Vui lòg nhập trường này `
         },
         email : function(value){
             var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : `Vui lòng nhập email  `
        },
        min : function(min){
           return function(value){
                return value.length >= min  ? undefined : `Vui lòg nhập tối thiểu ${min} ký tự `
            }
        },
        max : function(max){
            return function(value){
                 return value.length <= max  ? undefined : `Vui lòg nhập tối đa ${max} ký tự `
             }
         },

         password_confirmation (value){       // value tham số ở đây chính là giá trị mà đã nhập vào 
            const passwordField = $('#password');
            const passwordValue = passwordField.value;
            if(value.trim() && value === passwordValue){
                return undefined;
            }
           
            else{
                return 'Mật khẩu xác nhận không khớp, vui lòng nhập lại'
            }
        },
     }

     // Khi mà đã có các hàm validator này rồi thì có thể gọi tới nó bằng validatorRules[formRules[input.name]] 

    // Lấy ra form element trong DOM theo `formSelector`
    var formElement = document.querySelector(formSelector)

    // Chỉ xử lý khi lấy được form trong DOM 
    if(formElement){
        // Lấy ra tất cả các thẻ input có name và có rules đặt vào inputs số nhiều 

        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs){
            // console.log(input.name)
            // console.log(input.getAttribute('rules'))
            var rules = input.getAttribute('rules').split('|')    // Tách các rule từ string thành mảng  dấu hiệu tách là |

            for (var rule of rules ){

                var isRuleHasValue = rule.includes(':');   // Kiểm tra xem rule nào là có dấu : 
                var ruleInfo ; 

                if (isRuleHasValue){
                   ruleInfo  = rule.split(':')
                    rule = ruleInfo[0];    // Trong trường hợp mà là min:6 gán đè rule bằng phần tử số 0 thôi là chữ min 
                }

                var ruleFunc = validatorRules[rule] // validatorRules[rule]  chính là các function ở object validator ( được truyền đối số là string rule rồi )

                if (isRuleHasValue) {
                    ruleFunc = validatorRules[rule](ruleInfo[1])    // Cho chạy luôn hàm ấy để chui được vào hàm có value của  function(min)
                }

                if (Array.isArray(formRules[input.name]))   // Nếu mà formRules[input.name]  là 1 array 
                {
                    formRules[input.name].push(ruleFunc)
                }
                else {
                    formRules[input.name] = [ruleFunc]   
                }
            }


            // Lắng nghe sự kiện để validate (onblur onchange  oninput )

            input.onblur = handleValidate;
            input.oninput = handleClearError; 


        }

        // Hàm thực hiện valdate
        function handleValidate(event){
            // console.log(event)   // Lấy ra sự kiện đang hoạt động 
            // console.log(event.target)   // Lấy ra chính xác thằng đang thực hiện hành động 
            // console.log(event.target.value)   // Lấy ra giá trị của ô input đó khi có sự kiện onblur 
            // console.log(event.target.name)    // Lấy ra name của thằng đang có sự kiện onblur

            var rules = formRules[event.target.name]    // Đây chính là 1 mảng các rule của thằng đang có sự kiện onblur
            var errorMessage ; 
        
            // for ( var i= 0 ; i< rules.length ; i++){
            //     errorMessage = rules[i](event.target.value);
            //     if(errorMessage) break;        // Phải break ra luôn khi có lỗi cái là thoát vòng lặp for ra luôn 
            // }

            //Lặp qua từng phần tử của mảng
            for(var rule of rules )
            {
                errorMessage = rule(event.target.value);
                if(errorMessage) break;
            }
           

            // Nếu có lỗi thì hiển thị message lỗi ra UI 
            if( errorMessage){
                var formGroup = getParent(event.target, '.form-group');

                if (formGroup){
                    formGroup.classList.add('invalid');
                    var formMessage =formGroup.querySelector('.form-message');
                    if(formMessage){
                        formMessage.innerText = errorMessage;
                    }
                }
            }

            return !errorMessage   // convert errorMessage sang boolean 
         }

         function handleClearError(event){     // Khi có sự kiện nhập là xoá bỏ classList và huỷ inner 
            var formGroup = getParent(event.target, '.form-group');
            if( formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid');
            }

            var formMessage = formGroup.querySelector('.form-message');
            if( formMessage){
                formMessage.innerText = ''
            }
         }


         //Xử lý hành vi submit form 
         formElement.onsubmit = function(event){
             event.preventDefault()

             var inputs = formElement.querySelectorAll('[name][rules]');
            var isValid = true;  

             for (var input of inputs){   // Bấm submit sẽ lướt qua tất cả input của chúng ta
               if(!handleValidate({target: input}))   // Cái hàm handleValidate cần 1 tham số là event thì {}  chính là event . và viết luôn target thay bằng input 
                {
                    isValid =false
                }
            }

            // Khi không có lỗi thì submit form 
            if(isValid) {

                if( typeof(_this.onSubmit)  === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable]')     //Hiện tại nó đang là 1 node list  Bắt tất cả những thằng nào đang có attribute là name
                var formValues = Array.from(enableInputs).reduce(function(values, input ){       // Phải Array.from() Để convert nó về dạng mảng  
                    switch (input.type){
                        case 'radio' :
                            values[input.name] = formElement.querySelector('input[name= "'+ input.name +'"]:checked').value;
                            break;

                        case 'checkbox':   // Checkbox phải trả về 1 array với tất cả đáp án mà người dùng đã tích . chứ không phải 1 kết quả riêng lẻ như radio
                        if (!input.matches(':checked')) 
                        {
                            values[input.name] = '';
                            return values;
                        }
                        if (!Array.isArray(values[input.name])){
                            values[input.name] = []
                        }
                         values[input.name].push(input.value);
                        break;

                        case 'file':
                            values[input.name] = input.files;
                        
                        break;

                        default:
                                values[input.name] = input.value;
                    }
                    
                    return  values ;   // Trả về object values
                }, {});

                // Gọi lại hàm onSubmit và trả về tất cả giá trị của form 
                _this.onSubmit(formValues)
                }

                else{
                formElement.submit();

                }
            }
        }
    }
}