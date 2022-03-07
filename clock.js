let hourDom = document.querySelector("h4");

function clock(){
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let getClock = `${hour}.${minute}`


    let days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ]

    hourDom.innerHTML = "Saat " + getClock + "   " + "günlerden " + (days[new Date().getDay()]);

    setTimeout(clock, 1000);
}

clock()