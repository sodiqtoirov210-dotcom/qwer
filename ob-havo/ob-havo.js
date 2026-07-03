const API_KEY = "af24e4913a9147dd6f1b477d3930ad6c";

const shaharInput = document.getElementById("shahar");
const qidirTugma = document.getElementById("qidirTugma");

const harorat = document.getElementById("harorat");
const shaharNomi = document.getElementById("shaharNomi");
const data = document.getElementById("data");
const chap = document.querySelector(".chap");
const holatIcon = document.querySelector(".holat p");
const holatText = document.querySelector(".holat small");

function backgroundAlmashtir(holat){

    holat = holat.toLowerCase();

    switch(true){

        case holat.includes("clear"):
            chap.style.backgroundImage='url("sun.jpg")';
            break;

        case holat.includes("cloud"):
            chap.style.backgroundImage='url("cloud.jpg")';
            break;

        case holat.includes("rain"):
        case holat.includes("drizzle"):
        case holat.includes("thunderstorm"):
            chap.style.backgroundImage='url("rain.jpg")';
            break;

        case holat.includes("snow"):
            chap.style.backgroundImage='url("snow.jpg")';
            break;

        case holat.includes("mist"):
        case holat.includes("fog"):
        case holat.includes("haze"):
        case holat.includes("smoke"):
        case holat.includes("dust"):
        case holat.includes("sand"):
        case holat.includes("ash"):
        case holat.includes("squall"):
        case holat.includes("tornado"):
            chap.style.backgroundImage='url("cloud.jpg")';
            break;

        default:
            chap.style.backgroundImage='url("cloud.jpg")';
    }
}

async function obHavoOl(shahar) {
    try {
        const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${shahar}&appid=${API_KEY}&units=metric&lang=en`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Shahar topilmadi");
        }

        const weather = await response.json();

        harorat.textContent =
            Math.round(weather.main.temp) + "°C";

        shaharNomi.textContent = weather.name;

        holatText.textContent =
            weather.weather[0].main;

        const bugun = new Date();

        data.textContent =
            bugun.toLocaleString();

        const holat = weather.weather[0].main.toLowerCase();
        backgroundAlmashtir(holat);

        if (holat.includes("clear")) {
            holatIcon.textContent = "☀️";
        }
        else if (holat.includes("cloud")) {
            holatIcon.textContent = "☁️";
        }
        else if (holat.includes("rain")) {
            holatIcon.textContent = "🌧️";
        }
        else if (holat.includes("snow")) {
            holatIcon.textContent = "❄️";
        }
        else {
            holatIcon.textContent = "🌤️";
        }

        const malimotlar =
            document.querySelectorAll(".malimot span:last-child");

        malimotlar[0].textContent =
            weather.clouds.all + "%";

        malimotlar[1].textContent =
            weather.main.humidity + "%";

        malimotlar[2].textContent =
            weather.wind.speed + " m/s";

        malimotlar[3].textContent =
            (weather.rain?.["1h"] || 0) + " mm";

    } catch (error) {
        alert(error.message);
    }
}

qidirTugma.addEventListener("click", () => {
    const shahar = shaharInput.value.trim();

    if (shahar) {
        obHavoOl(shahar);
    }
});

shaharInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        qidirTugma.click();
    }
});

document.querySelectorAll("#viloyatlar li")
.forEach(li => {
    li.addEventListener("click", () => {
        obHavoOl(li.textContent);
    });
});

obHavoOl("Toshkent");