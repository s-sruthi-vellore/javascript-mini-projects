const eyeIcon = document.querySelector("#eyeicon");
const pwd = document.querySelector("#pwd"); //password

eyeIcon.onclick = function () {
    if (pwd.type == "password") {
        pwd.type = "text";
        eyeIcon.src = "./images/eye-open.png";
    } else {
        pwd.type = "password";
        eyeIcon.src = "./images/eye-close.png";
    }
}