
 // lesson 119 Arrow function   : Hàm mũi tên 


 function logger1(log){    // Đây là Decration function 
    console.log(log)
}


const logger2 = function(log){     // Đây là Exreption function 
    console.log(log)
}



logger1('Message1......')
logger2('Message2......')

const logger3 = (log) => {    // Mục đích sinh ra để viết ngắn gọn hơn 
    console.log(log);
}

logger3('Message3......')

//  const sum = (a,b) => {
//      return a+b;
//  }

//  console.log(sum(2,2));

// Có thể bỏ luôn dấu ngoặc , bỏ luôn return 
const sum = (a,b) =>  a+b;    // Viết bất kể cái gì đằng sau mũi tên được hiểu là return luôn trừ khi viết dấu {} thì phải dùng từ khoá return 
 
// Để return ra 1 object thì thêm dấu ()  
const object = (a,b )  => ({a: a, b: b})
    console.log(sum(2,2));
    console.log(object(2, 2));

// Khi Arrow function có duy nhất 1 parameter thôi thì có thể bỏ luôn dấu ()

const logger119 = log => console.log(log);
logger119("Message.. có thể bỏ dấu () ở parameter khi có duy nhất 1 parameter ")



const context = {
   name: 'JavaScript ',
   getName: function(){
       return this.name;  // this ở đây được gọi là context, nó sẽ trả lại thằng mà gọi nó .=> Arrow function không có context
   }
}

console.log(context.getName());    


const objectConstructer = function(name, price) {    // Arrow function không hỗ trợ Object Constructer 
   this.name =name;
   this.price= price;
}

const objectElement = new objectConstructer( 'JavaScript', '1000coin ')
console.log(objectElement)


