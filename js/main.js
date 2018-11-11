document.addEventListener('DOMContentLoaded', function () {
    const $secondHand = document.querySelector('.sec-hand');
    const $minHand = document.querySelector('.min-hand');
    const $hourHand = document.querySelector('.hour-hand');

    const timer = () => {
        const atTheMoment = new Date();

        const seconds = atTheMoment.getSeconds();
        const secondsDeg = ((seconds / 60) * 360) + 90
        $secondHand.style.transform = `rotate(${secondsDeg}deg)`;

        const minutes = atTheMoment.getMinutes();
        const minutesDeg = ((minutes / 60) * 360) + 90
        $minHand.style.transform = `rotate(${minutesDeg}deg)`;

        const hours = atTheMoment.getHours();
        const hourDeg = ((hours / 12) * 360) + 90
        $hourHand.style.transform = `rotate(${hourDeg}deg)`;
    }

    setInterval(timer, 1000);
});
