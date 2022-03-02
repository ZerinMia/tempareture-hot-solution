// step1
const apiKey = `6a993f3aa7bf584bf51cc14b3c5d2155`;

const searchTemperature = () => {
    //step2
    const city = document.getElementById('city-name').value;
    //step3
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
//step5
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
//step4
const displayTemperature = temperature => {
    // document.getElementById('city').innerText = temperature.name
    // document.getElementById('temparature').innerText = temperature.main.temp
    setInnerText('city', temperature.name)
    setInnerText('temparature', temperature.main.temp)
    setInnerText('weather-condition', temperature.weather[0].main)
    console.log(temperature)
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);

}