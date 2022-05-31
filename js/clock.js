let userName = prompt('Adınızı giriniz:');

let myname = document.getElementById("myName");
myname.innerHTML =  `${userName}`;

function showTime(){
    
let date = new Date();
let day = date.getDay();

switch(day){
    case 1 :
        day = "Pazartesi";
        break;
    case 2 :
        day = "Salı";
        break;
    case 3 :
        day = "Çarsamba";
        break;
    case 4 :
        day = "Persembe";
        break;
    case 5 :
        day = "Cuma";
        break;
    case 6 :
        day = "Cumartesi";
        break;
    case 7 :
        day = "Pazar";
        break;

}

let time = date.toLocaleString('tr-TR');
let myClock = document.getElementById("myClock").innerHTML = `${time} ${day}`;
}


setInterval(showTime, 1000);





