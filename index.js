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
    des.innerText = data.weather[0].description.toUpperCase();
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
        des.innerText = data.weather[0].description.toUpperCase();
        feel.innerHTML = `Hissedilen: ${Math.round(data.main.feels_like)}°`;

        if ((Math.round(data.main.temp)) < 10 ){
            
            alert("havaya dikkat")
        }
        
        
    }     
}