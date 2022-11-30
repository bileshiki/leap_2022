let year = prompt("jilee oruul");
if (year%4==0) {
   if(year%100==0){
    if(year%400==0){
        console.log("undur jil mun");
    }
    else  console.log("undur jil bish");
   }
   else  console.log("undur jil mun");
}
console.log("undur jil bish");