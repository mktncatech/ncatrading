const menu = document.getElementById("menu");
const content = document.getElementById("mainPage");
const footer = document.getElementById("footerPage");
const openButton = document.getElementsByClassName("menu-icon")[0];
const closeButton = document.getElementsByClassName("close-icon")[0];

openButton.onclick = () => {
    menu.classList.add("open");
    content.classList.add("open");
    footer.classList.add("open");
}

closeButton.onclick = () => {
    menu.classList.remove("open");
    content.classList.remove("open");
    footer.classList.remove("open");
}