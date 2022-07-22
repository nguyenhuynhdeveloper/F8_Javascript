// l52 Câu lệnh điều kiện if else
var day = 2;
if (day  ==2 ){
    document.write(' Hôm nay là ngày rất sịn ');
}

else if(day == 3)   //Ở vị trí else if này không được để dấu ;
{
    document.write('Hôm nayb là ngày khá sịn ');
}
 else 
 {
     document.write('Đoé Biết luôn');
 }

 //l53 Câu lênh điều kiện switch case

 var date = parseInt(prompt('xin hãy nhâp ngày hôm nay'))
  switch(date) {

    case 2:
    {
        document.write('Hôm nay là thứ 2');
        break;
    }
    case 3:  // Sử dụng toán tử === 
        {
            document.write('Hôm nay là thứ 3');
            break;
        }
        case 4:
            {
                document.write('Hôm nay là thứ 4');
                break;
            }
            
            case 5:
                {
                    document.write('Hôm nay là thứ 5');
                    break;   // Cái cuối cùng có thể bỏ break
                }
     case 6:
    case 7:
    case 8:   //Hoàn toàn có thể viết như thế này
        {
            document.write('Hôm nay là một trong những ngày nghỉ')
            break;
        }

       default:
           document.write(' Phải luôn viết default này cuối cùng và k cần để break') 
  }


  // Trường hộ so sánh tính đúng sai thì chỉ cần if else   

  // Trường hợp nhiều giá trị thì dùng switch case , biết trước giá trị rồi 

  //l54 Toán tử 3 ngôi -Ternarry operrator
 
   var Course = function(name , cost) {
       this.name = name,
       this.cost = cost;

   }

   function Teacher(name, cost){
    this.name = name,
    this.cost = cost;

   }

   var course1 = new Course('JavaScript' ,'Miễn phí');
   document.write(course1.name);

   var teacher1 = new Teacher('Nguyễn Huỳnh' ,'Senius');
   document.write(teacher1.name);
    
   teacher1.name == 'NguyễnHuỳnh'? [((document.write('Đó là 1 thiếu niên xuất anh hùng')))]: document.write('Những thằng bùi dái khác không quan tâm ');   // Có thể chồng cô số [[(((())))]]  Còn {} thì k thể dùng được