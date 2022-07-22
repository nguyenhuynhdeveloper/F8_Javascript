const a= 5
const b=9 
        const soHang = (a, b) => {return a, b} 
        const Arrow = soHang  => a+b 
        console.log(Arrow())

        const tinhtong = (a) =>
        {
          return  a => b => a+b +7
        }
        console.log(tinhtong(5))