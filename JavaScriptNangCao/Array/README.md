Destructuring , Rest : Toán tử gom 
const { 
    a = 'default', 
    b, 
    ...rest 
} = {
    b: 'val1',
    c: 'val2',
    d: 'val3'
};

console.log(a, b, rest); // Output: ?

'default' , 'val1' , {c: 'val2', d: 'val3'}


Trong destructuring có thể viết các key có giá trị mặc định , và key đó không nhất thiết phải trùng với key của object 

Có thể destructuring mảng Array 


Spread operator :  Toán tử rải 
const a = [1, 2, 3];
const b = [2, 3];
const c = [...a, ...b];

console.log(c); // Output: ?

[1,2,3,2,3]

