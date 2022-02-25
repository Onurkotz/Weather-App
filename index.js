let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let des = document.querySelector(".des");
let maxmin = document.querySelector(".maxmin");
let feel = document.querySelector(".feel")

let url = "https://api.openweathermap.org/data/2.5/"
let api = "&appid=992c1f2ef9fa5dbd0f8cd57296cac07b"

fetch(`${url}weather?q=istanbul${api}&lang=tr&units=metric`).then( (res) => res.json() ).then( (data) => { 
    console.log(data); 
    city.innerText = data.name;
    temp.innerText = `${Math.round(data.main.temp)}°`;
    maxmin.innerText = `En yüksek: ${Math.round(data.main.temp_max)}°   |   En düşük: ${Math.round(data.main.temp_min)}°`;
    des.innerText = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    feel.innerHTML = `Hissedilen: ${Math.round(data.main.feels_like)}°`;


    } );

function valueInput(){
    let url = "https://api.openweathermap.org/data/2.5/"
    let api = "&appid=992c1f2ef9fa5dbd0f8cd57296cac07b"
    let inputVal = document.querySelector("#enter").value;
    let value =`weather?q=${inputVal}`

    fetch(`${url}${value}${api}&lang=tr&units=metric`).then( (res) => res.json() ).then( (data) => weather(data) );

    function weather(data){
        city.innerText = data.name;
        temp.innerText = `${Math.round(data.main.temp)}°`;
        maxmin.innerText = `En yüksek: ${Math.round(data.main.temp_max)}°   |   En düşük: ${Math.round(data.main.temp_min)}°`;
        des.innerText = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
        feel.innerHTML = `Hissedilen: ${Math.round(data.main.feels_like)}°`;

        if ((data.weather[0].description) === "hafif kar yağışlı" ){
            document.body.classList.remove("im");
            document.body.classList.add("snow");
        } else if ((data.weather[0].description) === "kapalı" || (data.weather[0].description) === "kısa süreli yağmur"){
            document.body.classList.remove("im");
            document.body.classList.add("rain");
        } else if ((data.weather[0].description) === "açık" || (data.weather[0].description) === "az bulutlu" ) {
            document.body.classList.remove("im");
            document.body.classList.add("sunny");
        } else if ((data.weather[0].description) === "parçalı bulutlu" || (data.weather[0].description) === "parçalı az bulutlu" ){
            document.body.classList.remove("im");
            document.body.classList.add("clo");
        }
    }     
}
