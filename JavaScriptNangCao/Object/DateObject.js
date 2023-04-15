 // // CÁCH CÁCH KHAI BÁO VÀ GÁN GIÁ TRỊ DATE OBJECT 


        // const time = new Date()   // Trả về ngày và giờ hiện tại // Đây chỉ ý nghĩa date == ngày giờ hiện tại
        // console.log(typeof time) //Trả ra object
        // console.log(time)   //Fri May 27 2022 22:18:47 GMT+0700 (Indochina Time)

        // const timeString = time.toString()
        // console.log(timeString)   //Sun Nov 13 2022 10:56:10 GMT+0700 (Indochina Time) : trả ra kiểu String 

        // //new Date() : nhận cả tham số là String , và loại date

        // const time1 = new Date(22221312322)   // Tham số đưa vào là Khoảng thời gian tính theo milliseconds so với 1/1/1970 . rồi sẽ trả về định dạng thời gian thời điểm đó
        // console.log(time1)   //Thu Jan 01 1970 08:00:22 GMT+0800 (Indochina Time)

        // const time2 = new Date("May 08, 2022 20:50:59")  // new Date(dateString)  // dateString có dạng "tháng ngày, năm giờ:phút:giây" trong đó tháng là tên tiếng anh
        // console.log(time2)   //Sun May 08 2022 20:50:59 GMT+0700 (Indochina Time)

        // const time3 = new Date(2022, 08, 24, 12, 59, 59, 999) // định dạng new Date(year, month, day, hours, minutes, seconds, millisec)
        // console.log(time3)  //Sat Sep 24 2022 12:59:59 GMT+0700 (Indochina Time)

        // var date = new Date();
        // console.log(typeof date)  //object

        // var data = "Các hàm lấy dữ liệu ra từ  object time \n"
        // data += 'Ngày trong tháng: ' + date.getDate() + "\n"  //Trả về ngày trong tháng (1 - 31).
        // data += 'Ngày trong tuần: ' + date.getDay() + "\n"  //Trả về ngày trong tuần (0-6), với chủ nhật là 0, thứ 2 là 1, thứ 3 là 2 ,...
        // data += 'Tháng trong năm: ' + date.getMonth() + "\n"  //Trả về tháng trong năm (0 - 11).
        // data += 'Năm đầy đủ: ' + date.getFullYear() + "\n"    // Trả về năm dạng đầy đủ (YYYY).
        // data += 'Giờ: ' + date.getHours() + "\n"    //Trả về số giờ dạng 24h (0 - 23).
        // data += 'Phút: ' + date.getMinutes() + "\n"     //  Trả về phút trong giờ (0 - 59).
        // data += 'Giây: ' + date.getSeconds() + "\n"      //  Trả về số giây trong phút (0 - 59).
        // data += 'Mili Giây: ' + date.getMilliseconds() + "\n"       // Trả về tích tắc trong giây (0 - 999).

        // data += 'Time dạng mili giây: ' + date.getTime() + "\n"   // Đây chính là số lượng milliseconds tính từ ngày 1/1/1970

        // console.log(data)
        // //Các hàm lấy dữ liệu ra từ  object time 
        // // Ngày trong tháng: 13
        // // Ngày trong tuần: 0
        // // Tháng trong năm: 10
        // // Năm đầy đủ: 2022
        // // Giờ: 11
        // // Phút: 2
        // // Giây: 12
        // // Mili Giây: 198
        // // Time dạng mili giây: 1668312132198


        // //Tương tự chúng ta cũng có các Hàm lấy ra thời gian dạng UTC.
        // var data1 = new Date();

        // var data1 = "Tương tự chúng ta cũng có các Hàm lấy ra thời gian dạng UTC. \n"
        // data1 += 'Ngày trong tháng: ' + date.getUTCDate() + '\n';
        // data1 += 'Ngày trong tuần: ' + date.getUTCDay() + '\n';
        // data1 += 'Tháng trong năm: ' + date.getUTCMonth() + '\n';
        // data1 += 'Năm đầy đủ: ' + date.getUTCFullYear() + '\n';
        // data1 += 'Giờ: ' + date.getUTCHours() + '\n';
        // data1 += 'Phút: ' + date.getUTCMinutes() + '\n';
        // data1 += 'Giây: ' + date.getUTCSeconds() + '\n';
        // data1 += 'Mili Giây: ' + date.getUTCMilliseconds() + '\n';

        // console.log(data1)
        // //Tương tự chúng ta cũng có các Hàm lấy ra thời gian dạng UTC. 
        // // Ngày trong tháng: 13
        // // Ngày trong tuần: 0
        // // Tháng trong năm: 10
        // // Năm đầy đủ: 2022
        // // Giờ: 4
        // // Phút: 3
        // // Giây: 5
        // // Mili Giây: 16


        // //Các phương thức set : Đẩy dữ liệu thời gian vào trong biến 
        // var date = new Date();
        // date.setDate(06);
        // date.setMonth(04);
        // date.setFullYear(2017);
        // date.setHours(15);
        // date.setMinutes(05);
        // date.setSeconds(10)
        // date.setMilliseconds(120);

        // console.log(date)  //Sat May 06 2017 15:05:10 GMT+0700 (Indochina Time)
        // //Và tương tự chúng ta cũng có các set dạng UTC.
        // var date1 = new Date();
        // date1.setUTCDate(06);
        // date1.setUTCMonth(04);
        // date1.setUTCFullYear(2017);
        // date1.setUTCHours(15);
        // date1.setUTCMinutes(05);
        // date1.setUTCSeconds(5);
        // date1.setUTCMilliseconds(120);
        // console.log(date1)   //Sat May 06 2017 22:05:05 GMT+0700 (Indochina Time)

        // date1.setTime(1452563622525) // Gán lại cho biến date1 bằng số miliseconds tham số -- date1 bị thay đổi giá trị
        // console.log(date1)  //Tue Jan 12 2016 08:53:42 GMT+0700 (Indochina Time)
        // // Thiết lập thời gian cho một đối tương thời gian dựa vào số mili giây đươc cung cấp. Thời gian đó được tính bằng cách cộng hoặc trừ số mili giây được cung cấp tính từ thời điểm 00:00:00 1/1/1970


        // var dateTime = new Date();
        // var dateTime1 = new Date()

        // //----- Chuyển về dạng String 

        // // toString() Trả về dạng string. (Giống dạng mặc định (type object) nhưng type string)
        // dateTime0_1 = dateTime.toString()
        // console.log(dateTime0_1)   // Fri May 27 2022 23:20:51 GMT+0700 (Indochina Time) -- Đây chính là dạng mặc định 

        // // JSON.stringify() : Biến tất cả các dạng dữ liệu về string hết
        // const dateTime0_11 = JSON.stringify(dateTime)
        // console.log(dateTime0_11)   //"2022-11-13T04:05:24.548Z"  : đây chính là định dạng mà làm việc với back end : có Z ở đuôi là giờ UTC, Có T ở giữa là dạng Iso8601String 

        // // toISOString() Trả về dạng string theo tiêu chuẩn ISO (YYYY-MM-DDTHH:mm:ss.sssZ).  // đẩy nên back end dạng iso  : Định dạng làm việc với back end
        // dateTime0_2 = dateTime.toISOString()
        // console.log(dateTime0_2)     //  2022-05-27T16:20:51.621Z 

        // // toJSON() Trả về dạng chuỗi định dạng như 1 ngày tháng JSON (YYYY-MM-DDTHH:mm:ss.sssZ).
        // dateTime0_3 = dateTime.toJSON()
        // console.log(dateTime0_3)   //2022-05-27T16:20:51.621Z   

        // //---- Chuyển về tách dạng ngày--- giờ 
        // // toDateString() Trả về dạng string. ngày, tháng, năm ( không bao gồm giờ, phút, giây)
        // dateTime0_4 = dateTime.toDateString()
        // console.log(dateTime0_4)   //Fri May 27 2022

        // //toTimeString() Trả về về dạng string 
        // const dateTime0_5 = dateTime1.toTimeString()
        // console.log(dateTime0_5) // 22:33:51 GMT+0700 (Indochina Time)
        // console.log(dateTime1) // Sun Nov 13 2022 11:12:00 GMT+0700 (Indochina Time): object không bị thay đổi 

        // // toUTCString() Trả về 1 chuỗi thời gian dựa vào giờ quốc tế( UTC)  : Đưa thời gian local  về thời gian UTC
        // const dateTime0_6 = dateTime1.toUTCString()
        // console.log(dateTime0_6) // Thu, 15 Jun 2017 09:54:38 GMT
        // console.log(dateTime1) // Sun Nov 13 2022 11:13:14 GMT+0700 (Indochina Time):  object không bị thay đổi 

        // // valueOf() Trả về 1 số thời gian ở dạng nguyên thủy.  // Dạng số milisecond so với ngày 1.1.1970
        // dateTime0_7 = dateTime.valueOf()
        // console.log(dateTime0_7)  // 1653668451621

        // //------ giờ địa phương 
        // //toLocalString() Trả về về dạng string định dạng ngày giờ theo chuyển địa phương.
        // const dateTime0_8 = dateTime1.toLocaleString()
        // console.log(dateTime0_8) // 5/31/2022, 10:51:45 PM
        // console.log(dateTime1) // Sun Nov 13 2022 11:13:41 GMT+0700 (Indochina Time): object không bị thay đổi 

        // // toLocaleDateString() Trả về về dạng string định dạng ngày giờ theo chuyển địa phương. (DD/MM/YYYY)
        // dateTime0_9 = dateTime.toLocaleDateString()
        // console.log(dateTime0_9)   // 5/27/2022

        // // toLocaleTimeString() Trả về dạng chuỗi theo chuyển địa phương. (HH:MM:SS AM/PM) chỉ có giờ
        // dateTime0_10 = dateTime.toLocaleTimeString()
        // console.log(dateTime0_10)    // 11:20:51 PM





        // //getTimezoneOffset() Trả về sô múi giờ Trả về khoảng thời gian khác biệt giữa múi giờ hiện tại của hệ thống và giờ UTC tính bằng phút.
        // console.log(dateTime.getTimezoneOffset())   //-420

        // //Date.now() Trả về số mili giây tính từ thời điểm 00:00:00 1/1/1970 giờ UTC đến thời điểm hiện tại
        // console.log(Date.now())   //1654012537407

        // // Date.parse(abc) Trả về số mili giây tính từ thời điểm 00:00:00 1/1/1970 giờ UTC đến dateTime
        // console.log(Date.parse(dateTime))   //1654012645000
        // //== dateTime.getTime()  == dateTime.valueOf()

        // //Date.UTC(year, month, day, hours, minutes, seconds, millisec) Trả về 1 số là số miliseconds từ 1/1/1970  
        // console.log(Date.UTC(2017, 6, 16, 15, 30, 30))   // 1500219030000




        // const  toDate = new Date(new Date(20/10/2022).setHours(23, 59, 59)) //Thu Jan 01 1970 23:59:59 GMT+0800 (Indochina Time)
        // console.log("toDate",toDate)

        //  const  toDate1 = new Date(20/10/2022).setHours(23, 59, 59)   //57599000
        //  console.log("toDate1", toDate1)


























        var hamA = (a, b) => { return a+b }

        console.log("hàm a", hamA(5, 6))
        
        
        
        // class ClassA {
        //     age = 18
        
        //     run = (a , b) => { return a+b }
        
        //  }
        
        
        //  const intanceA = ClassA()
        
        // ClassA.age;
        // console.log(intanceA.age)
        
        // // Tạo các thuộc tính (property)
        // function Dog(name, color, type) {
        //     this.name = name;
        //     this.color = color;
        //     this.type = type
        // }
        // // Thêm vào các phương thức (method)
        // Dog.prototype.bark = function () {
        //     console.log(`${this.name} barks: Go Go Go`)
        // }
        
        // // Khởi tạo 1 instance object
        // let milu = new Dog('Milu','Black','Becgie');
        
        // milu.bark() // Milu barks: Go Go Go
        // milu.name;
        // console.log(milu.name)
        
        
        
        class Dog {
            // Tạo các thuộc tính (property)
            constructor(name, color, type) {
                this.name = name;
                this.color = color;
                this.type = type
            }
        
            // Thêm vào các phương thức (method)
            bark = () =>{
                console.log(`${this.name} barks: Go Go Go`)
            }
        }
        
        let milu = new Dog('Milu', 'Black', 'Becgie');
        
        milu.bark() // Milu barks: Go Go Go
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        