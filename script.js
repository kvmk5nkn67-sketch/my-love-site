const button = document.getElementById("loveButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {

    message.textContent = "Я очень сильно тебя люблю! ❤️";

    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");

        heart.textContent = "❤️";

        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});

const loveButton = document.getElementById("loveButton");

loveButton.addEventListener("click", function() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.textContent = "❤️";

        heart.className = "heart";

        heart.style.left = Math.random() * 90 + "vw";

        heart.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 4000);
    }

});

const openLetter = document.getElementById("openLetter");

const letter = document.getElementById("letter");

const envelope = document.getElementById("envelope");

openLetter.addEventListener("click", function() {

    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {
        openLetter.textContent = "Закрыть письмо 💗";
    } else {
        openLetter.textContent = "Открыть письмо 💌";
    }

});

envelope.addEventListener("click", function() {
    openLetter.click();
});

function updateLoveCounter() {

    const startDate = new Date(2024, 7, 25);
    const today = new Date();

    const start = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
    );

    const current = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

    const totalDays = Math.floor(
        (current - start) / (1000 * 60 * 60 * 24)
    );

    let years = current.getFullYear() - start.getFullYear();
    let months = current.getMonth() - start.getMonth();
    let days = current.getDate() - start.getDate();

    if (days < 0) {
        months--;
        days += new Date(
            current.getFullYear(),
            current.getMonth(),
            0
        ).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("days").textContent = totalDays;
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("extraDays").textContent = days;
}

document.addEventListener("DOMContentLoaded", updateLoveCounter);

