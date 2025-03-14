//script for theme switcher
function lightMode() {
    document.getElementById("light-switch").style.display = "none";
    document.getElementById("dark-switch").style.display = "block";
    document.getElementById("nav-menu").style.background = "#fff";
    document.getElementById("sidemenu-open-btn").style.color = "#000";
    document.getElementById("sidemenu-close-btn").style.color = "#000";
    document.querySelector("nav").style.background = "#fff";
    document.querySelectorAll("a").forEach(link => {
        if (!link.classList.contains("ignore-theme")) {
            link.style.color = "#000";
        }
    });
    document.querySelectorAll("h1").forEach(title => {
        if (!title.classList.contains("ignore-theme")) {
            title.style.color = "#000";
        }
    });
    document.querySelectorAll("h2").forEach(title2 => {
        title2.style.color = "#000";
        title2.style.background = "#fff";
    });
    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.style.color = "#000";
    });
    document.querySelectorAll("form").forEach(form => {
        form.style.background = "#fff";
    });
    document.querySelectorAll("label").forEach(label => {
        label.style.color = "#000";
    });
    document.body.style.background = "#fff";
    console.log("light mode enabled")
}
function darkMode() {
    document.getElementById("light-switch").style.display = "block";
    document.getElementById("dark-switch").style.display = "none";
    document.getElementById("nav-menu").style.background = "#000";
    document.getElementById("sidemenu-open-btn").style.color = "#fff";
    document.getElementById("sidemenu-close-btn").style.color = "#fff";
    document.querySelector("nav").style.background = "#000";
    document.querySelectorAll("a").forEach(link => {
        link.style.color = "#fff";
    });
    document.querySelectorAll("h1").forEach(title => {
        title.style.color = "#fff";
    });
    document.querySelectorAll("h2").forEach(title2 => {
        title2.style.color = "#fff";
        title2.style.background = "#000";
    });
    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.style.color = "#fff";
    });
    document.querySelectorAll("form").forEach(form => {
        form.style.background = "#000";
    });
    document.querySelectorAll("label").forEach(label => {
        label.style.color = "#fff";
    });
    document.body.style.background = "#000"
    console.log("dark mode enabled")
}