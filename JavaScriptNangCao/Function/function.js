// function a() {
//     let object= {}
//     object = {
//         name: 'nguyen van huynh',
//         age: 18
//     }
//     console.log(2)
//     return object
// }

// const b = a
// console.log("b Đang là 1 hàm ",b) // b bây giờ nó là 1 hàm . gọi ra thực thi phải b()  bình thường như hàm 



// const c = a()    // c bây giờ nó là cái mà a() nó chạy xong return về. vì a()  là chính là gọi thực thi hàm 
// console.log(c)

// console.log(a().name)   // a()  thực thi xong ra cái object thì .key để lấy giá trị ra thôi 
// console.log(b['name'])
// console.log(c.name)

// const arr = [1, 2, 3, 4, 5, 6]
// const arr_B = a.filter((a1) => a1=== 1)
// console.log(b)

// const fn_c = () => { return a.filter((a1 => a1 === 2)) }
// const d = c     // cái này là gán 1 biến bằng 1 cái hàm --> rồi nó cũng trở thành hàm 
// console.log(c)
// console.log(d)   // in ra function 

// const e = d()      // e chính là cái nhận được khi hàm đó chạy , tức là nhận được cái return 
// console.log(e)   // in giá 2

// function returnDemo() {
//     return ({ a, b })
// }
// returnDemo()
// console.log(returnDemo())


// const array11 = [{ name: 1, age: 2 }, { name: 2, age: 2 }, { name: 3, age: 2 }, { name: 4, age: 2 }, { name: "5", age: 2 }, { name: "5", age: 2 }, { name: 6, age: 2 }, { name: 6, age: 2 },]
// console.log(array11[0].name)


// const object = { name: 1, age: 2 }
// const object1 = { ...object, school: 'mta' }
// console.log(object1)
// console.log(object1)
// console.log(object1)
// console.log(object1)
// console.log(object1)



//  Javascript có 3 loại function cơ bản

//  Declaration Function : Hàm có tên 
// Có hỗ trợ Hoisting
// Đây là loại khai báo function cơ bản trong javascript và với loại này sẽ có áp dụng Hoisting trong javascript.

console.log(doSomething)
function doSomething() {
    console.log('doSomething');
}

// Expression Function (anonymous function)
// Hay còn gọi là anonymous function (function không tên).
// Không áp dụng Hoisting.
// Function kiểu này sẽ được gán vào một biến và nó chỉ sẽ chạy khi runtime nếu biến đó được gọi

const ExpressionFuncion = function() {
    console.log('run');
}

// Arrow Function (ES6)
// + Đây là loại function được thêm vào từ ES6.
// + Không áp dụng Hoisting.
// + Không có context (trỏ this) cho riêng nó, không nên sử arrow function như là một object method.
// + this nếu sử dụng trong object method sẽ được hiểu là trở tới window

// arrow function được sử dụng như là một object method
// lúc này [this] sẽ là object Windown chứ không phải là objec a
// vì tự bản thân arrow function không có context, default nó sẽ lấy [this] global.

let a_Object = {
    name: 'A',
    say: () => {
 // <-- object method
	console.log(this.name);
 // out -> empty
    }
}
a_Object.say();

// + Khi được đặt vào bên trong một object method nó sẽ lấy context(this) từ object method cha gần nó nhất.

let b_Object = {
    name: 'A',
    sayName : function() {
 // <-- object method
	let b = () => {
	    console.log(this.name);
 // out -> A
	}
	b();
    }
}
b_Object.sayName();

// Các cách viết 
// cách viết thường không tham số
let a_ArrowFuntion = () => {
    console.log('run'); // out -> run
}
// rút gọn không tham số nếu trong hàm chỉ có 1 dòng lệnh
let b_ArrowFuntion = () => console.log('run'); // out -> run
// có tham số
let c_ArrowFuntion = (a,b) => {
    return a + b;
}
// có tham số và chỉ có 1 dòng lệnh
let d_ArrowFuntion = (a,b) => a + b;
// chỉ có 1 tham số và chỉ có 1 dòng lệnh
let e_ArrowFuntion = a => console.log(a);


 