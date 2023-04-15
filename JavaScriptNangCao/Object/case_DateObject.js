        //Hàm chuyển từ milisecond sang giờ : phút : giây 
        // Lý thuyết: 1 mili giây = 0.001 giây -> 1,000 mili giây = 1 giây
        // Hàm 1: Chuyển từ 1,000 mili giây -> 00:00:01

        // function msToTime(duration) {
        //     var milliseconds = Math.floor((duration % 1000) / 100),
        //         seconds = Math.floor((duration / 1000) % 60),
        //         minutes = Math.floor((duration / (1000 * 60)) % 60),
        //         hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        //     hours = (hours < 10) ? "0" + hours : hours;
        //     minutes = (minutes < 10) ? "0" + minutes : minutes;
        //     seconds = (seconds < 10) ? "0" + seconds : seconds;

        //     return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        // }
        // console.log(msToTime(53111000))


        // Hàm 2: Hàm chuyển từ 1,000 mili giây -> 00:00:01

        function msToTime(ms) {
            let seconds = (ms / 1000).toFixed(1);
            let minutes = (ms / (1000 * 60)).toFixed(1);
            let hours = (ms / (1000 * 60 * 60)).toFixed(1);
            let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
            if (seconds < 60) return seconds + " Sec";
            else if (minutes < 60) return minutes + " Min";
            else if (hours < 24) return hours + " Hrs";
            else return days + " Days"
        }

        console.log(msToTime(1000))
        console.log(msToTime(10000))
        console.log(msToTime(300000))
        console.log(msToTime(3600000))
        console.log(msToTime(86400000))


                 // Hàm chuyển từ giờ : phút : giây sang giây 
                 function HmsToSeconds(hms) {
            if (!hms) return 0
            var a = hms.split(':');
            return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
        }