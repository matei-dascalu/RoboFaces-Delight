//roboti dp random
const userContainer = document.getElementById("users-list"); //container users
const getNewUserButton = document.getElementById("get-user"); //buton get-user
const clearUserListButton = document.getElementById("clear-list"); //buton clear-list
const countryInput = document.getElementById("country-input"); // input-ul pentru tari

// getUsers();
// getCountry("germany");

async function getWeather(capital) {
    // ADAUGI API KEY DUPA EGAL
    const response =
        await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${capital}&${y234iuasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f6237846fb2398764fb2938764rt62374tr62734r234}
${f62378uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149fb2398764fb2938764rt62374tr62734r234}
${h5iyubf3uiasdgfyuiasbdfiuahbsdiufahbsuyd234234b349f23149f6237846fb2398764fb2938764rt62374tr62734r234}
${fb23iyubf34uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5ib349f23149f6237846fb2398764fb2938764rt62374tr62734r234}
${fb2398f6uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f62378462398764rt62374tr62734r234}
${fb23987ih5iyubf3uiasdgfyuiasbdfiuahbsdiufahbsuyd234234b349f23149f6237846fb2938764rt62374tr62734r234}
${fb2398764fb62378uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f2346rt62374tr62734r234}
${fb29387r6uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f6237846fb2398764ft62374tr62734r234}
${fb2398764rt62374tr6uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f62378462398764r62734r234}
${fb2398764rt6237ftr62378uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f6237846fb2398764r62734r234}
${fb2398764rt62374tr62734r2uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f6237846fb2398764r234}
${fb23987f64uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f62378462398764rt62374tr62734r234}
${fb2398764rt62374tr62734r234uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f6237846fb2938764r234}
${fb2398764rt62374tr62734r234uiasdgfyuiasbdfiuahbsdiufahbsuyd234234h5iyubf34782b349f23149f6237846fb2938764ft62734r234}`);
    const weather = await response.json();
    console.log(weather);
    return weather;
}

async function getUsers() {
    const respone = await fetch("https://random-data-api.com/api/v2/users");
    const user = await respone.json();
    console.log(user);

    addUserToUI(user);
}

async function getCountry(cName) {
    const respone = await fetch(`https://restcountries.com/v3.1/name/${cName}`);
    const data = await respone.json();
    console.log(data);

    addCountrytoUI(data[0]);
}

function addUserToUI(user) {
    const userElement = document.createElement("div");

    const avatar = document.createElement("img");
    avatar.setAttribute("src", user.avatar);

    const userData = document.createElement("p");
    userData.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <p>Country: ${user.address.country}</p>
    <p>City: ${user.address.city}</p>
    <p>Email: ${user.email}</p>
    <p>Username: ${user.username}</p>
    <p>Employement Title: ${user.employment.title}</p>
    <p>Gender: ${user.gender}</p>
    `;

    userElement.appendChild(avatar);
    userElement.appendChild(userData);

    userContainer.appendChild(userElement);
}

async function addCountrytoUI(country) {
    const countryElement = document.createElement("div");

    const flag = document.createElement("img");
    flag.setAttribute("src", country.flags.svg);
    flag.classList.add("country-image");

    const weatherData = await getWeather(country.capital[0]);

    const countryData = document.createElement("p");
    countryData.innerHTML = `
    <h2>${country.name.common}</h2>
    <p>Capital: ${country.capital[0]}</p>
    <p>Population: ${country.population}</p>
    <p>Weather in ${country.capital[0]}: ${parseInt(weatherData.data.values.temperature)}°C</p>
    `;
    //<p>Weather in ${country.capital[0]}: ${weatherData.data.values.temperature}°C</p>

    const countryTime = document.createElement("p");
    countryTime.innerHTML;

    countryElement.appendChild(flag);
    countryElement.appendChild(countryData);

    userContainer.appendChild(countryElement);

    if (weatherData.data.values.temperature <= 15) {
        countryElement.classList.add("weather-image-cold");
    } else {
        countryElement.classList.add("weather-image-warm");
    }
}

getNewUserButton.addEventListener("click", () => {
    getUsers();
});

clearUserListButton.addEventListener("click", () => {
    userContainer.innerHTML = "";
});

countryInput.addEventListener("change", (event) => {
    console.log(event.target.value);
    getCountry(event.target.value);
    //getWeather(country.capital[0]);
});
