setInterval(showtime, 1000)

function showtime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var am_pm = "AM"

    if (hour >= 12){
        hour = hour - 12;
        am_pm ="PM"
    }

    if (hour == 0){
        hour = 12;
    }
    
    var hour = hour < 10 ? "0" + hour : hour
    var min = min < 10 ? "0" + min : min
    var sec = sec < 10 ? "0" + sec : sec
    
    var hour1 = document.getElementById("hour")
    var min1 = document.getElementById("min")
    var sec1 = document.getElementById("sec")
    var am = document.getElementById("am")

    hour1.textContent = hour;
    min1.textContent = min;
    sec1.textContent = sec;
    am.textContent = am_pm
}

// setInterval(daytime, 1000)
// function daytime(){
//     var day = new Date()

//     var date1 = day.getDate;
//     var year = day.getFullYear;
//     var month = day.getMonth;
//     // console.log(month)

//     var date2 = document.getElementById("date")
//     var month1 = document.getElementById("month")
//     var year1 = document.getElementById("year")

//     date2.textContent = date1;
//     month1.textContent = month;
//     year1.textContent = year;
// }