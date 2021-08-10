const cityname = document.getElementById('cityName');
const btn = document.getElementById('submit');
let s = document.getElementById('syntax');
const tem = document.getElementById('temprature');
const tem_data=document.getElementById('temp_data')
const temp = document.getElementById('temp_info');
const temp_status = document.getElementById('temp_status')

const getData = async () => {
    if (cityname.value == '') {
        s.innerHTML = 'Please Enter the City name';
    } else {
        try {
           
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=a1392006aefd2dabdd7a133166c7292f`);
            const data = await res.json();
            const arrayData = [data];
            s.innerHTML = `${arrayData[0].name},${arrayData[0].sys.country}`
            // console.log(arrayData[0])
           
            tem.innerHTML = `${arrayData[0].main.temp}&deg;C`;
            const temp_mod = arrayData[0].weather[0].main;
            console.log(temp_mod);
            if (temp_mod == 'Clouds') {
                temp_status.innerHTML = `<i class="fas fa-cloud fa-3x" style='color:#6E85B2'></i>`;
            } else if (temp_mod == 'Clear') {
                
                temp_status.innerHTML = `<i class="fas fa-sun fa-3x" style='color:#FFBF86'></i>`;
            } else if (temp_mod == 'Rain') {
                temp_status.innerHTML = `<i class='fas fa-rain fa-3x' style='color:#082032'></i>`;
            }
            else if (temp_mod == 'Haze') {
                temp_status.innerHTML =`<i class="fas fa-sun-haze fa-3x" style='color:#FFF47D'></i>`
            }
            else {
                temp_status.innerHTML = `<i class='fas fa-sun fa-3x' style='color:#FFBF86'/>`
            }
           
            tem_data.classList.remove('data_hide')
        }catch {
            s.innerHTML = 'please insert valid city name';
            tem_data.classList.add('data_hide')
        }
        cityname.value = '';
    }
}
btn.addEventListener('click', getData);