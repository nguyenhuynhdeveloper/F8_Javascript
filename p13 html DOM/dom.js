/** lesson 81 :
 * html DOM Document Object Modal
 * Gồm 3 thành phần
 * 1. Element
 * 2. Attribute
 * 3. Text
 *  
 * Từ DOM có thể dùng Js để thay đổi tất cả DOM : Có thể get , change, add, or delete html 
 */

//lesson : 82 html DOM và DOM API
// html DOM là quy chuẩn W3C đưa ra , gồm 3 thành phần khác nhau 
// Core DOM 
// XML DOM 
// html DOM

// html DOM k phải  là của JS . Mà Js chỉ cung cấp cách thức để tuy xuất vào DOM 
//JS : Browser | Sẻver (NodeJS)
/**
 * Browser : html -> DOM -> DOM API ( WEB API ) tồn tại trên trình duyệt cung cấp DOM trong đó
 */

/** 
 * lesson 83 :Document Object : Ôm tất cả trang web là đại diện cho toàn bộ web site 
 * 1. element : <a> < h1> < div> ....
 * Có thể lấy ra element thông qua : ID , Class, TagName , CSS selector , HTML collection 
 * 
 */
// lesson 85 get element method-2

// var getId = document.getElementById('idName') ; //Bắt  element có id là heading
// console.log(getId)

// var getClassName = document.getElementsByClassName('className');  // elements phải có s bởi vì là số nhiều 
// console.log(getClassName)

// var getTagName = document.getElementsByTagName('h1'); 
// console.log(getTagName)

// var querySelector = document.querySelector('#idName2');   //Bắt qua cách của CSS Selector 
// console.log(querySelector)

// var querySelector1 = document.querySelector('.className2');   //Bắt qua cách của CSS Selector 
// console.log(querySelector1);

// console.log(document.forms.formOne);   // Lấy thẻ form.idNameOfForm


// // Với các thẻ Form thì sẽ quy về html colection : là k cần phải get qua id . class, tag ...
// console.log(document.forms)    // Trả về 1 mảng tất cả các tag form 

// console.log(document.anchors)  // Lấy ra được tất cả các thẻ a mà được đặt name -- Trả về mảng
  
// var boxNode= document.querySelector('.box-1');
// console.log(boxNode)
// var liNode= boxNode.querySelectorAll('li');
// console.log(boxNode.getElementsByTagName('li'))
// console.log(liNode)
 