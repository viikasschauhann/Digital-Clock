
// console.log(h + ":" + m + ":" + s);

// setInterval(() => {
//     let a = new Date();           
//     let h = a.getHours();        
//     let m = a.getMinutes();      
//     let s = a.getSeconds();       
    
//     console.log(h + ":" + m + ":" + s); 
// }, 1000);

const date = new Date();
function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
            month = '0' + month;
    }
    if (day.toString().length == 1) {
            day = '0' + day;
    }
    if (hour.toString().length == 1) {
            hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
            minute = '0' + minute;
    }
    if (second.toString().length == 1) {
            second = '0' + second;
    }
    var dateTime = hour + ':' + minute + ':' + second;
    return dateTime;
}


document.getElementById("currentday").innerHTML = date.toDateString();

setInterval(function() {
    currentTime = getDateTime();
    document.getElementById("time").innerHTML = currentTime;
}, 1000);