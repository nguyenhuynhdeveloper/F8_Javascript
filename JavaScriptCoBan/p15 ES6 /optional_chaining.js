
// lesson 126: OPtional chaining (?.)
/**
 * Để kiểm tra điều kiện / thành phần đó có tồn tại hay không
 *  
 */

 const object126 = {
    name:'Huỳnh',
    cat: {
        name:'Đặng thị thu Hà',
        cat2: {
            name: 'Đặng thị thu Hà 2',
            cat3: {
                name: 'Đặng thị thu Hà 3',
            }
        }
    }
};

if(//object126.cat &&
    // object126.cat.cat2 &&
    // object126.cat.cat2.cat3)
    object126?.cat?.cat2?.cat3?.name)
    {   // Code rất xấu . Xử lý rất cồng kềnh 
    console.log(object126.cat.cat2.cat3.name);
}

// ?. Để giải quyết kiểm tra sự tồn tại : khi nghi ngờ 1 key nào của object nào không tồn tại Thêm ? vào đằng sau key đó 

//Cách khác để lấy key: value của object 

var avaiable =  object126?.['cat']?.['cat2']
 
console.log(avaiable);