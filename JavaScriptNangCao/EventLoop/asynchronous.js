// Cách kinh điển  về bất đồng bộ

for (var i= 0 ; i< 3 ; i++){{
    setTimeout(()=>{{
        console.log(i)
    }},1000)
}}


const a_array = [1, 2, 3]
 const b_array = a_array.map(e=> {
    setTimeout(()=>{
        console.log("setTimeout trong map", e)
        return e*2}, 1000)
 })

 console.log(b_array)  // Chạy từ đầu tới cuối , cái nào bất đồng bộ nó để đấy cho chạy xong thì lấy kết quả
 