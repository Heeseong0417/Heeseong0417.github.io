

const APIKEY = "d21dbacab5a5b35c4e1f80b8fc61ceb5";
function onGeoOk(position){
const lat = position.coords.latitude;
const lng = position.coords.longitude;
const log_id = document.querySelector("#loc_id");
const we_id = document.querySelector("#we_id");
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}`;
fetch(url)
.then((response) => response.json())
.then((data) =>{
    const name = data.name;
    const weather = data.weather[0].main;
    log_id.innerHTML = `당신이 사는 지역은      : ${name}`;
    we_id.innerHTML = `당신이 사는 지역 날씨는 : ${weather}`;
});
}
function onGeoError(){
alert("Can't find you No weather for you..")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError );
