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



        