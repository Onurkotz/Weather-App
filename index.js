let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let des = document.querySelector(".des");
let maxmin = document.querySelector(".maxmin");


function valueInput(){
    let inputVal = document.querySelector("#enter").value;
    console.log(inputVal)
}

let url = "https://jsonplaceholder.typicode.com/users"

fetch(`${url}`).then( (res) => res.json() ).then( (data) => weather(data) )


function weather(data){
    city.innerText = data[0].name
}



