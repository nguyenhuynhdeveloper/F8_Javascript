// // Create async function

// async function myAsyncFunc() {
//   // Create new promise that rejects
//   const myPromise = new Promise(( resolve , reject  ) => {
//     // resolve('Promise resolve!')
//     reject('Promise rejected!')
//  })
//    console.log(myPromise)  // Kết quả trả ra 1 promise

//   // Create try...catch statement

//   try  {        // try này không được phép có () --> cố gắng thực hiện các hàm bất đồng bộ . trước mỗi hàm bất đồng bộ để await ở trước ý đồ đợi cho promise hoản thành xong thì trả ra kết quả (Tham số của resolve)
//     // await myPromise.then(function(res) {   // SAI 
//     //     console.log(`result: ${res}`)
//     // })

//     const message = await myPromise   // Nhận lại chính là tham số của phương thức resolve
//     console.log(message)        

//     // console.log(`result: ${message}`)
//   }
//   catch(err) {       // err ở đây chính là tham số của reject
//     // const message = await myPromise // Trong trường hợp reject thì không thể viết ở đây được sẽ nhận lỗi 
//     // Catch any error and log it
//     console.log(`error: ${err}`)       
//   }
// }

// // Invoke the myAsyncFunc() function
//  myAsyncFunc()
// // 'error: Promise rejected!'


// Sử dụng thư viện fetch lấy data từ API

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

//cách 1: 
// function getJSON() {
//   // To make the function blocking we manually create a Promise.
//   return new Promise( function(resolve) {
//       axios.get('https://jsonplaceholder.typicode.com/posts')
//           .then( function(json) {
//               resolve(json);         // json ở đây là 1 tham số để truyền dữ liệu xuống .then bắt resolve ở dưới 
//               console.log(json)     // json ở đây chính là dữ liệu đã được trải qua bước .then parse nếu sử dụng thư viện fetch 
//             });
//   });
// }

// const dataReceive = getJSON()
// console.log(dataReceive)  // cái này trả ra 1 promise dạng pending  vì cái getJSON() là chạy hàm rồi mà cái promise là bất đồng bộ mà console.log() là hàm đồng bộ nên nó mới ở trạng thái pending 

// dataReceive 
// .then( data => console.log(data.data))   // cái mà nhận được khi hứng 1 promise chính là tham só của resolve hoặc reject ( sẽ được bắt ở catch)
// .catch (err => console.log(err))

// // cách 2:
// // Async/Await approach
// // The async keyword will automatically create a new Promise and return it.
//   // The result of the GET request is available in the json variable.
//   // We return it just like in a regular synchronous function.
//   // The await keyword saves us from having to write a .then() block.     // await chính là đợi cho hàm chạy xong hết rồi mới đưa ra kết quả không cho chạy câu lệnh sau . Khi dùng async await thì nên để trong try catch 

// const getJSON = async function getJSONAsync() {
//   let json = await axios.get('https://jsonplaceholder.typicode.com/posts');   // json ở đây chính là tham số của hàm resolve
//   console.log(json)       // json ở đây sau khi đã được parse trả về 1 object có key là data: trong đó chứa 1 mảng dữ liệu 
//   return json;                 //Bản chất return trong async function nó sẽ là tham số của hàm resolve để truyền xuống hàm . then bắt resolve
//                                // return 2 == resolve (2)  
// }  

// console.log(getJSON)  // Sẽ nhận được 1 function            
// const dataReceive  = getJSON

// console.log(dataReceive)  // Đây chính là nhận về 1 function 
// console.log(dataReceive())   // Khi chạy hàm sẽ nhận về 1 promise
 
// // const dataReceive1  = getJSONAsync()  //Không được vì hàm này đã gán vào cái tên biến kia rồi 


//  dataReceive ()  // Chạy xong hàm thì nhận được thằng promise json nên phải .then nó để bắt cái resolve 
// .then(data => console.log(data) ) // nhận dược tham số của resolve là số 2

// const a = ( dataReceive().then(data => data))
// console.log (a)




// // try catch để bắt reject 

// function resolve ()  { return new Promise((resolve, reject ) => { return resolve ('Thành công  ')})}

// function reject ()  { return new Promise((resolve, reject ) => { return reject ('Đã có lỗi ')})}

//  async function getJSONAsync() {
 
//   try{

//     let json = await axios.get('https://jsonplaceholder.typicode.com/posts');   // json ở đây chính là tham số của hàm resolve
//     console.log(json)

    
//     let json1 = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     console.log(json)
    
//     let data =   resolve () 
//     console.log(data)

//     let data1=  await reject () 
//     console.log(data1)

//     let json2 = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     console.log(json)

//     let json3 = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     console.log(json)


//   }  
//   catch (err){       // Khi mà có catch xảy ra sẽ bỏ qua tất cả các await ở dưới rồi lọt vào catch luôn 
//     console.log(err)
//   }
// }

// const getJSON = getJSONAsync()
// getJSON 



//  // The await keyword saves us from having to write a .then() block.   
//  async function getJSONAsync() {
//   let json = await axios.get('https://jsonplaceholder.typicode.com/posts');   // json ở đây chính là tham số của hàm resolve
//   return 2;                 //Bản chất return trong async function nó sẽ là tham số của hàm resolve để truyền xuống hàm . then bắt resolve
//                                // return 2 == resolve (2)  
// }             
 

// const dataReceive1  = getJSONAsync()  //Không được vì hàm này đã gán vào cái tên biến kia rồi 
// console.log(dataReceive1)

// console.log(getJSONAsync())     // Chỉ có duy nhất cách .then thì mới lấy ra được cái mà cái async nó return ra --- cũng như cái promise nó return ra tham số của hàm resolve

// getJSONAsync ()  // Chạy xong hàm thì nhận được thằng promise json nên phải .then nó để bắt cái resolve 
// .then(data => console.log(data))






// //-----------------------------------

const getJson = async () => {
   let giatri =[]
  try {
     let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
   //   console.log('RESS ', res)
   //   console.log(res.data)
     return 888      
   //   return res.data  // cái return này sẽ được trả ra trước vì hàm lọt vào đây
  } catch (error) {
     console.log(error);
  }
  return 223
}

//!!!!!!!!!!!!!!!!! Đã async await rồi thì k then 
//!!!!!!!!!!!!!!!!!  Các hàm then và await nó chỉ đợi cho ra kết quả thôi chứ nó không chặn các hàm đồng bộ đằng sau 
//!!!!!!! Mấu chốt tư duy là các hàm hay các thao tác bất đồng bộ nào thì nên nhét vào trong then hoặc async await ---> chứ không phải chăm chăm tư duy đợi return trong hàm bất đồng bộ , vì nó vô dụng nó chỉ có tác dụng cho then , với await

// // Sử dụng then 
// const getData_Then = () => {
//    getJson().then(res => {
//       console.log("Giá trị của hàm bất đồng bộ được bọc trong then" ,res)
//       return res
//    })
//    .then(res => console.log("first", res))  // .then vẫn trả về 1 Promise  return của then trước là tham số của then sau 
//    console.log("first")
// }
// getData_Then()


// Sử dụng async await 
async function getData_await (action) {
   try {
      const res = await getJson()     // Phải có hàm await để hàm bất đồng bộ này có thể chạy xong . nếu k có await thì nó sẽ trả về promise pending
      console.log("Giá trị của hàm dù được viết trong async nhưng k viết await mà viết await cũng k có tác dụng  ",getJson())    // Cái này sẽ trả về promise có status là pending
      console.log("Giá trị sau khi đã được await xong ",res)    // Cái này sẽ trả đúng  dữ liệu của res
      return res     // Trả ra dữ liệu 
   }
    catch (e) {
      console.log(e)
   }
}
getData_await()


//// Tư duy sai Bất đồng bộ mà viết trong đồng bộ 
// console.log("Giá trị của hàm " , getData_await())    //Cái này cũng trả ra 1 Promise{<pending>}  vì console.log là đồng bộ . còn getData() là Bất đồng bộ 
// // console.log("Giá trị của hàm " , getData_await().then(res => res))  // False sai bản chất 


// // Gán vào biến cục bộ rồi in cái biến cục bộ đó ra cũng chỉ nhận được 1 promise spending
// var giatri
// const dulieu = getJson().then((res) => {giatri = res 
//    console.log("first", giatri)
//    return giatri})

// console.log("first", typeof dulieu)    // Cái này chỉ là 1 object dạng promise
// console.log("first", dulieu)      // Promise spending  
// console.log("first", giatri)     // underfine


// //--- genarater : hàm có thể trì hoãn 
// function* getData (action) {
//   try {
//      const json = yield getJson(); 
//      console.log('YIELD ', json)
//      console.log("b")
     
//   } catch (err) {
//    console.log("Error" , err)
//   }
// }

// getData()






//// Test async await
// export default function App() {
// const getJson = async () => {
//   try {
//      let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//      console.log('RESS ', res)
//      return res.data
//   } catch (error) {
//      console.log(error);
//   }
// }


// function* getData (action) {
//   try {
   
//      const json = yield getJson(); 
//      console.log('YIELD ', json)
//      console.log("b")
     
//   } catch (e) {
//   }
// }

// getData()
// }