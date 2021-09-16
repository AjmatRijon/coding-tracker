let min = 0;
let hour = 0;
let sec = 0;
document.getElementById('btn').addEventListener('click', () => {
    time();
    bg();
    document.getElementById('btn-stop').setAttribute("class", "show btn-style")
    document.getElementById('btn').setAttribute("class", "display")
});
document.getElementById('btn-stop').addEventListener('click', () => {
    clearInterval(wow);
    clearInterval(refresch);
    document.getElementById('btn-stop').setAttribute("class", "display")
    document.getElementById('btn').setAttribute("class", "show btn-style")
});

function bg() {
    refresch = setInterval(() => {
        document.getElementById('head').style = 'color: #' +
            Math.random().toString(16).slice(-6);
    }, 1500)
}

function time() {
    wow = setInterval(() => {
        sec++;
        document.getElementById('s').innerText = sec;
        if (sec >= 60) {
            sec = 0;
            min++;
            document.getElementById('m').innerText = min;
        }
        if (min >= 60) {
            hour++;
            min = 0;
            document.getElementById('h').innerText = hour;
        }
        if (hour >= 60) {
            hour = 0;
        }
    }, 1000);
}