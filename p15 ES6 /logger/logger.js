// Có thể không đẩy ra default :: Có thể export ra biến 
export const TYPE_LOG ='log'
export const TYPE_WARN ='warn'
export const TYPE_ERROR ='error'

// Lưu ý : 1 module chỉ được export duy nhất 1 default nhưng có thể export vô số const
import {TYPE_LOG_CONSTANTS} from '../constants.js'      // Vì file logger.js đang ở trong 1 folder nên phải .. để chui thêm vào 1 cấp nữa
function logger125(log, type = TYPE_LOG_CONSTANTS) {
    console[type](log);
}

// Muốn file khác có thể dùng được hàm logger có thể sử dụng hàm đó được thi phải export hàm đó ra bên ngoài
export default logger125;  //Đẩy cái hàm logger125 này ra ngoài để file khác có thể sử dụng được 

