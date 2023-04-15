// Event Loop là cơ chế giúp Javascript có thể thực hiện nhiều thao tác cùng một lúc (concurrent model),
//  trước giờ vẫn nghe nói NodeJs có thể xử lý cả hàng ngàn request cùng một lúc mặc dù nó chỉ dùng một thread duy nhất (Single Threaded).

//  Event Loop có tên như vậy bởi vì có một vòng lặp vô tận trong Javascript Runtime (V8 trong Google Chrome) dùng để lắng nghe các Event