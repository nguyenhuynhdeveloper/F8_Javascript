function a() {
    object = {
        name: 'nguyen van huynh',
        age: 18
    }
    console.log(2)
    return object
}

const b = a
console.log(b) // b bây giờ nó là 1 hàm . gọi ra thực thi phải b()  bình thường như hàm 



const c = a()    // c bây giờ nó là cái mà a() nó chạy xong return về. vì a()  là chính là gọi thực thi hàm 
console.log(c)

console.log(a().name)   // a()  thực thi xong ra cái object thì .key để lấy giá trị ra thôi 
console.log(b['name'])
console.log(c.name)

const a = [1, 2, 3, 4, 5, 6]
const b = a.filter((a1) => a1=== 1)
console.log(b)

const c = () => { return a.filter((a1 => a1 === 2)) }
const d = c     // cái này là gán 1 biến bằng 1 cái hàm --> rồi nó cũng trở thành hàm 
console.log(c)
console.log(d)   // in ra function 

const e = d()      // e chính là cái nhận được khi hàm đó chạy , tức là nhận được cái return 
console.log(e)   // in giá 2

function returnDemo() {
    return ({ a, b })
}
returnDemo()
console.log(returnDemo())


const array11 = [{ name: 1, age: 2 }, { name: 2, age: 2 }, { name: 3, age: 2 }, { name: 4, age: 2 }, { name: "5", age: 2 }, { name: "5", age: 2 }, { name: 6, age: 2 }, { name: 6, age: 2 },]
console.log(array11[0].name)


const object = { name: 1, age: 2 }
const object1 = { ...object, school: 'mta' }
console.log(object1)
console.log(object1)
console.log(object1)
console.log(object1)
console.log(object1)
