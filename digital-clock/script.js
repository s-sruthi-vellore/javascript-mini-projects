const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
    let currTime = new Date();
    // console.log(currTime.getHours());
    hrs.innerHTML = currTime.getHours();
    min.innerHTML = currTime.getMinutes();
    sec.innerHTML = currTime.getSeconds();
}, 1000);

