const timer = document.getElementById("TIMER");
const end = new Date(2023, 10, 30, 23, 59, 59, 999).getTime();

const t = (n) => (n < 10 ? `0${n}` : n);

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = end - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}j ${t(hours)}h ${t(minutes)}m ${t(seconds)}s`;
};

setInterval(updateTimer, 1000);
