
//lesson 120 : Classes : chỉ là cách viết khác của contructer function : Đây chính là trái tim của lập trình hướng đối tượng 

//Cách viết constructor function 

function FunctionConstructor (name, price) {        // Lưu ý viết constructor function thì name nên viết carlmel case
    const isSuccess = true ; //Biến 

    this.name= name;        //Property
    this.price = price; 

    this.getName= function() {     //Method
        return this.name;
    }
}

const phpCource = new FunctionConstructor("PHP", 1000);
const jsCource = new FunctionConstructor("JavaScript", 1200);

console.log(phpCource);
console.log(jsCource);

//Cách viết classes
  
class classConstructer {    // Class có thuộc tính constructer dùng để tạo ra 1 bản thiết kế object 
 constructor (name , price){    // JS class có method constructor 
     this.name = name ; 
     this.price = price;
 }
getName(){
    return this.name;
}
 getPrice(){
     return this.price;
 }

 run() {
    const isSuccess = true;
    if(true){
        isSuccess= false;
    }
 }

 // Viết rất gọn và tường minh 
}

const objectClassConstructer = new classConstructer( 'JavaScript', '1000coin ')
console.log(objectClassConstructer)

