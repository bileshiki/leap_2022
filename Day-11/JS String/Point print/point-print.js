let year = prompt('та жил оруулна уу');
let month = prompt("Та сар оруулна уу");
let day = prompt("Та өдөр оруулна уу");

let yearNumber = Number(year);
let monthNumber = Number(month);
let dayNumber = Number(day);

if (Number.isInteger(yearNumber) && yearNumber > 0) {
    if (Number.isInteger(monthNumber) && monthNumber > 0) {
        if (Number.isInteger(dayNumber)&& dayNumber > 0) {
            if (year.length == 4 && year >= 1900 && year <= 2030) {
                // if (month.length < 2)
    
                
                month = month.length == 1 ? "0" + month : month;
                day = day.length == 1 ? "0" + day : day;

                let result = year + "-" + month + "-" + day;  
            
            
            alert(result);
        } else {
            alert("Та жилээ зөв оруулна уу");
        }
    } else {
        alert("Та сараа зөв оруулна уу");
    }
} else {
    alert("Та өдрөө зөв оруулна уу");
}
} else {
    alert("Та огноогоо бүхэл тоо оруулна уу");
}
