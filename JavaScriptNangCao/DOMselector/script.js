document.getElementById('Id').onclick= function(){
  console.log("Id")
}

var selectors  = document.querySelector('#SelectorId')
        selectors.onclick= function(){
          console.log("Selector")
        }

// getElementById và querySelector không bắt được trong External


        var class1 = document.getElementsByClassName("ClassName")
        console.log(class1)


    var tagName1 = document.getElementsByTagName('span')
    console.log(tagName1)

    for (var i=0 ; i< tagName1.length ;i++){
            i.onclick= function(){
              console.log("tagName")
          }
        }





        var getId = document.getElementById('idName') ; //Bắt  element có id là heading
        console.log(getId)
        
        var getClassName = document.getElementsByClassName('className');  // elements phải có s bởi vì là số nhiều 
        console.log(getClassName)
        
        var getTagName = document.getElementsByTagName('h1'); 
        console.log(getTagName)
        
        var a = document.querySelector('.abc');   //Bắt qua cách của CSS Selector 
        console.log(a);
        
        var querySelector1 = document.querySelector('#idName');   //Bắt qua cách của CSS Selector 
        console.log(querySelector1)
        
        
        // Với các thẻ Form thì sẽ quy về html colection : là k cần phải get qua id . class, tag ...
        // console.log(document.forms)
        // console.log(document.forms.formOne);   // Lấy thẻ form.idNameOfForm
        
        // console.log(document.anchors) 


        