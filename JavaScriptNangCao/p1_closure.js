//Closure : Tính bao đóng  : tính chất bao bọc bởi phạm vi của hàm 
// https://www.youtube.com/watch?v=xtQtGKL0NCI&t=182s
/**
 * #Closure : là 1 hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó 
 *  ##Ứng dụng 
 * - Viết code ngắn gọn hơn 
 * - Biểu diễn , ứng dụng tính Private trong OOP
 *  ## Lưu ý 
 * - Biến dược tham chiếu (refer)  trong closure sẽ không được xoá khỏi bộ nhớ  khi hàm cha thực thi xong 
 * -Các Khái niệm JavaScript nâng cao rất dễ gây nhầm lẫn 
 */


//Hàm xinh ra bản chất. mỗi function đã là 1 closure 1 cách tự nhiên rồi 

function createCounter() {
    let counter= 0 
     function increase () {
        return ++counter
     }
     return increase
}

const counter1 = createCounter()   // Biến couter1 ở đây chính là hàm increase 
// từ 1 function trong 1 hàm khác ở phạm vị private đã được đẩy ra bên ngoài phạm vi global 
 // chỉ có 1  phạm vi của hàm createCounter được tạo ra 
console.log(counter1())         // Đây chính là thực thi hàm increase()   
console.log(counter1())         // vì chung 1 phạm vi createCounter() nên giá trị tăng dần : Luôn trả ra giá trị mới nhất được tham chiếu 
console.log(counter1())

//Ứng dụng để tạo 1  console.log có type khác nhau 
function createLogger (namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`)
    }
    return logger
}
// Register.js
const infoLogger = createLogger('Info')

infoLogger('Hàm gửi mail  bắt đầu ')
infoLogger('Gửi mail thành công lần 1')

// ForgotPassword,js

const errorLogger = createLogger('Error')

errorLogger('Đổi password có lỗi  ')
errorLogger('Đỗi password có lỗi lần 2')

function createStorage(key) {
    const store= JSON.parse(localStorage.getItem(key))  ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key]
        },

        set(key, value) {
            store[key] = value
            save()
        },

        remove(key) {
            delete store[key]
            save()
        }
    }

    return storage   // Người sử dụng thằng storage này chỉ có thể sử dụng được 3 phương thức này thôi : Không thể tương tác 1 cái gì khác 
}

//Profile.js
const profileSetting = createStorage("profile_setting")

console.log(profileSetting.get("fullName"))

profileSetting.set("fullName", "nguyen huynh")
profileSetting.set('age' , 20 )
profileSetting.set('fullName', 'nguyễn huyền')

//ứng dụng closure để code ngắn hơn rất nhiều muốn lưu 1 key nào vào trong localStorage thì chỉ cần createStorage("nameKey")
 function createApp() {
    const cars = []
    return {
        add(car) {
            cars.push(car)
        },
        show(car){
            console.log(cars)
        }
    }
    
 }

 const app = createApp()  // Biến global này  keep giữ lại hàm createApp trong bộ nhớ . mà hàm  createApp lại tham chiếu tới biến cars . nên biến cars cũng được giữ lại , lưu giá trị 
 app.add("BMW")
 app.show()

 // IIFE  khác anonoys function hàm không tên 
 // callback khác closure
 // callback khác closure
 // callback khác closure
 // callback khác closure

 //JavaScript Closures là tập hợp bao gồm một hàm và môi trường nơi hàm số đó được khai báo.