//roboti dp random
const userContainer = document.getElementById("users-list"); //container users
const getNewUserButton = document.getElementById("get-user"); //buton get-user
const clearUserListButton = document.getElementById("clear-list"); //buton clear-list
const countryInput = document.getElementById("country-input"); // input-ul pentru tari

// getUsers();
//getCountry("germany");

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

function addCountrytoUI(country) {
    const countryElement = document.createElement("div");

    const flag = document.createElement("img");
    flag.setAttribute("src", country.flags.svg);

    const countryData = document.createElement("p");
    countryData.innerHTML = `
    <h2>${country.name.common}</h2>
    <p>Capital: ${country.capital[0]}</p>
    <p>Population: ${country.population}</p>
    `;

    countryElement.appendChild(flag);
    countryElement.appendChild(countryData);

    userContainer.appendChild(countryElement);
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
});
