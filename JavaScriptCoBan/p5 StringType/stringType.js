// /**
//  * l28
// CHUỖI TRONG JAVASCRIPT
// 1. Tạo chuỗi 
//  - Các cách tạo chuỗi 
//  -Nên dùng cách nào lý do 
//  -Kiểm tra data type
 
//  2. Một số case sử dụng backslash (\)
//  Xem độ dài chuỗi 
//  4.Chú ý độ dài khi viết Code
//  5. Template string ES6
//  */

// //Cách 1
//  var fullName = 'Huỳnh '   // Chốt dùng cách 1  kiểu dữ liệu đưa ra là kiểu string
//   //Cách 2

//   var fullName = new String('Huỳnh')  // Từ khoá new là khởi tạo 1 đối tượng object kiểu dữ liệu đưa ra là kiểu object


//   // Để có được dấu ''  trong 1 '' thì đặt \'   \' Làm tương tự   với dấu ""
//   // Để có dấu \ trong ngoặc '' or ngoặc ""  thì phải đặt \\ tương đương với 1 dấu \


//   //Khuyến cáo số lượng ký tự tối đa theo chiều ngang chỉ nên để 80 ký tự thôi , nếu quá 80 nên xuống dòng
//   // Có thể sử dụng toán tử + '' để nối chuỗi 

//   // Template string ES6
//    var firstName = 'Nguyễn '
//    var lastName = 'Huỳnh'
//     console.log('Tôi là : ' + firstName + ' ' + lastName)

//     //Từ ES6 trở đi thay câu đó bằng  Đổi dấu '' bằng dấu ``
//     console.log(`Tôi là: ${firstName} ${lastName}`)  // Nó sẽ tự động convert sang String 


//     // l29 LÀM VIỆC VỚI CHUỖI 
//      // Keyword Javascript string methods
//     var myString = 'Hoc JS tai F8'

//     // 1. Length  : Kiểm tra độ dài của chuỗi 
//     console.log(myString.length);

//     // 2. indexOf : Tìm được vị trí của 1 chuỗi  trong chuỗi String
//     //Lưu ý rằng phương thức string.indexOf() sẽ phân biệt chữ hoa chữ thường.
//     console.log(myString.indexOf('JS', 6 ))    // Trả về vị trí đầu tiên mà nó tìm được  Không tìm được sẽ trả -1 , bắt đầu tìm ở vị trí [6
//     console.log(myString.lastIndexOf('JS'))    // Tìm vị trí của chuỗi ở vị trí cuối cùng . Tìm từ cuối -> đầu của chuỗi 

//     console.log(myString.search('JS'));  // Nếu sử dụng .search thì k cho số đằng sau vào được
//     //Nếu chuỗi con hoặc biểu thức chính quy không được tìm thấy trong chuỗi gốc, phương thức sẽ trả về -1.
//     // 3. slice
//     console.log(myString.slice(4,6))   // Chuỗi mới nhận giá trị cắt tư [4, 6) . nhận được "JS"
//     console.log(myString)   // Chuỗi cũ không bị thay đổi -- tương tự như mảng

//     console.log(myString.slice(-4,-1))   // Nhập vào số âm để cắt từ phải sang trái . Khi từ cuối mảng sẽ đếm từ -1

//     // 4. replace
//     console.log(myString.replace('JS' , 'JavaScript'))   //Tham số  2 là chuỗi thay thế cho chuỗi thứ nhất  chỉ thay thế chuỗi đầu tiên tìm được
//     console.log(myString.replace(/JS/g , 'JavaScript'))   //Sử dụng biểu thức chính quy /.../g để có thể tìm và thay thế tất cả
   
//     // 5. toUpperCase
//     console.log(myString.toUpperCase())    //Chuyển tất cả chuỗi về chữ hoa 
//     console.log(myString) // Không làm thay đổi chuỗi cũ

//     console.log(myString.toLocaleUpperCase())  // kết quả của phương thức toUpperCase()
//     //Tuy nhiên trong một số trường hợp mà ngôn ngữ có xung đột với các quy chuẩn Unicode( ví dụ tiềng Thổ Nhĩ Kì), kết quả có thể sẽ khác nhau

//     // 6. toLowerCase
//     console.log(myString.toLowerCase())    //Chuyển tất cả chuỗi về chữ thường
//     console.log(myString) // Không làm thay đổi chuỗi cũ

//     console.log(myString.toLocaleLowerCase() )// Kết quả của phương thức toLowerCase()
//     // Tuy nhiên trong một số trường hợp mà ngôn ngữ có xung đột với các quy chuẩn Unicode( ví dụ tiềng Thổ Nhĩ Kì), kết quả có thể sẽ khác nhau

//     // 7. trim   Rất hữu ích khi form người dùng nhập thừa khoảng trắng ở đầu và cuối 
//     console.log(myString.trim()); 
//     console.log(myString) // Không làm thay đổi chuỗi cũ


//     // 8. split   Chuyển đổi chuỗi thành 1 Array thông qua điểm chung tìm ra được 
//     console.log(myString.split(' '));   //Điểm chung ở đây là dấu cách trắng
//     console.log(myString.split(' ', 3));  // Trả ra 1 mảng cho được phép có 3 phần tử , dấu hiệu nhận biết cách nhau bởi dấu khoảng trắng
//     console.log(myString)   // Chuỗi cũ không bị thay đổi gì

    

//     // 9.charAt   Lấy ký tự  từ vị trí chỉ định 
//     console.log(myString.charAt(0));   //Tức lấy ký tự tại vị trí đầu tiên 
//     // Cách khác
//     console.log(myString[2])    // Coi String giống như mảng lấy giá trị thứ 3
     
//     // "Str".startsWith("abc",5)
//     const myString1 = "0123456789123456789"
//     console.log(myString1.startsWith("34", 2))  // Trả về giá trị true/false kiểm tra xem chuỗi bắt đầu từ vị trí số 2 có bắt đầu bằng chuỗi "34" không
//     console.log(myString1.startsWith("34", 3))
//     //Lưu ý rằng phương thức string.startsWith() có phân biệt chữ hoa chữ thường.
    
//     //"Str".endsWith("abc",5)
//     console.log(myString1.endsWith("89"))  // TRả về true/false kiểm tra chuỗi có kết thúc bằng chuỗi 89 hay không
//     console.log(myString1.endsWith("89", 9))   // Kiểm tra xem chuỗi tính từ đầu có length là 9. có kết thúc bằng "89" hay không  // true
//     console.log(myString1.endsWith("89", 7))   // false

//     //String.fromCharCode(5, 7, 8, 3,...)
//     console.log(String.fromCharCode(70, 80, 90, 23, 42, 67, 23 , 64, 67)) //chức năng chuyển đổi các giá trị Unicode thành các kí tự.
//     //Lưu ý đây là một phương thức tĩnh và cú pháp luôn là String.fromCharCode(...).

//     //"Str".charCodeAt(5)
//     console.log(myString1.charCodeAt(4))  // Trả về mã unicode của ký tự tại vị trí thứ 4 của chuỗi myString1

//     //"Str".includes("abc", 5)
//     console.log(myString1.includes("67" , 2))   // Trả về giá trị true/false kiểm tra xem chuỗi có bao gồm chuỗi "67" bắt đầu kiểm tra từ vị trí số 2

//     //"Str".localCompare(Str1)
//     console.log(myString1.localeCompare(myString))  // Trả về True/false chức năng so sánh hai chuỗi với nhau trong locale hiện thoại của hệ thống.
//     /**Locale được được dựa trên trên ngôn ngữ được cài đặt của trình duyệt.
//      Phương thức sẽ trả về 1 nếu chuỗi string lớn hơn chuỗi truyền vào, trả về 0 nếu hai chuỗi bằng nhau và trả về -1 nếu chuỗi truyền vào lớn hơn chuỗi string gọi phương thức */

//     //  "Str".match("regexp") : Trả về 1 mảng các phần tử sẽ là các chuỗi phù hợp với biếu thức chính quy là tham số
//     console.log(myString.match(/J./ig))  //tìm kiếm các chuỗi có kí tự J và một kí tự bất kỳ theo sau không phân biệt chữ hoa thường
//     //nếu biểu thức chính quy không bao gồm modifier g ( ví dụ /img/g) thì phương thức string.match() sẽ chỉ trả về kết quả đầu tiên tìm được.
//     // để tìm kiếm mà không phần biệt chữ hoa thường sử dụng modifier i( ví dụ /ain/i).
//     // phương thức sẽ trả về NULL nếu không tìm thấy kết quả phù hợp

//     //"Str".repeat(5)
//     console.log(myString.repeat(4))   // Trả ra 1 chuỗi là Lặp lại chuỗi myString 4 lần liên tục 


//     const  myStr = "aabbccddeeffbb"

//     //"Str".replace("abc", "def")
//     console.log(myStr.replace("bb" , "gg"))   // Trả về chuỗi mới với Thay thế chuỗi bb thành chuỗi gg . và chỉ thay thế chuỗi bb đầu tiên tìm được
//     console.log(myStr)  // Chuỗi cũ không bị thay đổi 
//     console.log(myStr.replace(/bb/g, "gg"))  // Để thay thế tất cả các chuỗi con tìm thấy hãy sử dụng modified toàn cục g
//     console.log(myStr)  // Chuỗi cũ không bị thay đổi 

//     //"Str".substr(2, 5)
//     console.log(myString1.substr(2, 4))  // Trả ra 1 chuỗi mới được trích xuất từ chuỗi cũ từ phần tử thứ 2 . và có length =4
//     console.log(myString1.substr(2))   // Khi không nhập length thì sẽ trích xuất từ start tới hết chuỗi 
//     console.log(myString1)  // Chuỗi cũ không bị thay đổi 

//     //"Str".substring(2, 5)
//     console.log(myString1.substring(2, 6)) // Trả về 1 chuỗi mới được trích xuất từ [2, 6) của chuỗi cũ
//     //Nếu start > end, phương thức sẽ hoán đổi vị trị 2 tham số này. Ví dụ string.substring(4, 2) sẽ trở thành string.substring(2, 4).
//     console.log(myString1.substring(2))   // Khi không nhập length thì sẽ trích xuất từ start tới hết chuỗi 
//     console.log(myString1)  // Chuỗi cũ không bị thay đổi 

//     //"Str".concat("Str1", "Str2"...)
//     console.log(myString1.concat(myString, myStr))  // Trả về 1 chuỗi mới nối hai hay nhiều chuỗi lại với nhau thành 1 chuỗi 
//     console.log(myString1) // concat sẽ không làm thay đổi chuỗi cũ
//     console.log(myString)

//     const myNum = 567
//     console.log(myNum.toString())  // Chuyển số thành 1 chuỗi 
//     const myArr =[3, 4, 5, 6]
//     console.log(myArr.toString())   //Chuyển mảng thành 1 chuỗi 


// const a = 'nam:x:dfg:d: ok roi nhe:h:'
// const b = a.split(':')
// console.log(b)

// let string =''
// b.forEach(e => {
// if(e.length === 1){
//     string = string + ` :${e}: `
// }
// else {
//     string= string + e
// }
// })

// console.log(string)



async getFileDocument(docInfo, savedStamps, savedText) {
    const {navigation} = this.props;
    let totalPage = docInfo.pages.length ? docInfo.pages.length : 0;
    if (docInfo.pages !== undefined && docInfo.pages.length > 0) {
      var docWidth = pointToPixel(docInfo.pages[0].width_pt);
      var docHeight = pointToPixel(docInfo.pages[0].height_pt);
      let zoomScale = (width - 40) / docWidth;
      this.setState({
        firstZoomScale: zoomScale,
        documentContainerWidth: docWidth * zoomScale,
        documentContainerHeight: docHeight * zoomScale,
      });
    }

    if (
      !this.state.isEditable &&
      (this.state.isBackFile || this.state.isNextFile)
    ) {
      if (this.state.pageIndex == 0 && this.state.filesList.length == 1) {
        this.setState({
          floatMenuDisables: [false, true, true],
        });
      } else {
        if (this.state.pageIndex == 0) {
          this.setState({floatMenuDisables: [false, true, false]});
        } else {
          if (this.state.pageIndex === this.state.filesList.length - 1) {
            this.setState({floatMenuDisables: [false, false, true]});
          } else {
            this.setState({floatMenuDisables: [false, false, false]});
          }
        }
      }
    }

    //Get saved stamp from Preview screen
    // let savedStamps = navigation.getParam('savedStamps');
    let paramsStamps = navigation.getParam('params');
    if (savedStamps) {
      this.listStamps = paramsStamps.circularStampsList;
      this.addedStampsOfAllPages = this.listStamps[this.state.pageIndex];
    }

    //Get saved text from Preview screen
    // let savedText = navigation.getParam('savedText');
    if (savedText) {
      this.listText = paramsStamps.circularTextsList;
      this.addedTextsOfAllPages = this.listText[this.state.pageIndex];
    }

    // If no saved stamp for the document, initialize an empty stamp list for each page

    if (!this.addedStampsOfAllPages || this.addedStampsOfAllPages.length <= 0) {
      this.addedStampsOfAllPages = [];
      for (let idx = 0; idx < totalPage; idx++) {
        this.addedStampsOfAllPages.push([]);
      }
    }

    // If no saved text for the document, initialize an empty text list for each page
    if (!this.addedTextsOfAllPages || this.addedTextsOfAllPages.length <= 0) {
      this.addedTextsOfAllPages = [];
      for (let idx = 0; idx < totalPage; idx++) {
        this.addedTextsOfAllPages.push([]);
      }
    }

    this.setState(
      {
        documentInfo: docInfo,
        documentTitle: navigation.getParam('docTitle'),
        createdDate: Moment(
          navigation.getParam('docCreatedDate'),
          'yyyy/MM/DD HH:mm:ss',
        ).format('yyyy/MM/DD'),
        createdUser: navigation.getParam('docCreatedUser'),
      },
      () => {
        for (
          let index = 0;
          index < this.state.documentInfo.pages.length;
          index++
        ) {
          this.state.pagesImageList.push('');
        }
        this.setCurrentPage(0, false);
        DocumentEditingAPI.getStampsOfUser(
          Moment(this.state.stampDate).format('yyyy-MM-DD'),
          this.props.navigation.getParam('originCircularIsPublic'),
          this.props.navigation.getParam('originCircularUrl'),
          this.props.navigation.getParam('originCircularToken'),
        ).then(res => {
          if (res && res.success) {
            this.setState({stampList: res.data});
            // for (let index = 0; index < res.data.length; index++) {
            //   if (res.data[index].stamp_division === 1) {
            //     this.setState({dateStampConfig: 1});
            //     break;
            //   }
            // }
            let stampFlgFind = res?.data?.find(
              it => it.stamp_division === 1 || it.stamp_flg !== 0,
            );
            if (stampFlgFind) {
              this.setState({dateStampConfig: 1});
            }

            this.setState(
              {
                modalVisible:
                  this.props.navigation.getParam('isEditable', true) &&
                  !this.state.isBackFile &&
                  !this.state.isNextFile
                    ? true
                    : false,
                isLoading: false,
              },
              () => {
                if (
                  !this.state.isEditable &&
                  !this.state.isBackFile &&
                  !this.state.isNextFile
                ) {
                  if (
                    this.state.pageIndex == 0 &&
                    this.state.filesList.length == 1
                  ) {
                    this.setState({
                      floatMenuDisables: [false, true, true],
                    });
                  } else {
                    if (this.state.pageIndex == 0) {
                      this.setState({floatMenuDisables: [false, true, false]});
                    } else {
                      if (
                        this.state.pageIndex ===
                        this.state.filesList.length - 1
                      ) {
                        this.setState({
                          floatMenuDisables: [false, false, true],
                        });
                      } else {
                        this.setState({
                          floatMenuDisables: [false, false, false],
                        });
                      }
                    }
                  }
                }
              },
            );
          } else {
            // messagesService.NoticeService(translate('ERRS062001'), '', 'OK');
            if (Platform.OS === 'ios') {
              messagesService.ComfirmNoticeService(
                translate('ERRS010009'),
                '',
                'OK',
                async () => {
                  await AsyncStorage.clear();
                  this.props.navigation.navigate('Login', {type: null});
                },
              );
            } else {
              this.ref_message.current?.show();
            }
          }
        });
      },
    );

    this.undoChangeEventId = this.undoStack.addChangeEventHandler(
      (evt, data) => {
        console.log('gggggggg', this.undoStack.isEmty());
        this.setFloatDisable();
      },
    );

    const info = await AsyncStorage.getItem(APICONST.KEY_STORAGE.USER_INFO);
    if (info !== null) {
      this.setState({stampConfig: JSON.parse(info).user.date_stamp_config});
    }

    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }