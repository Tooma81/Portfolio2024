//script for mobile sidemenu
function openMenu() {
    if (window.innerWidth <= 600) {
        document.getElementById("nav-menu").style.width = "50vw";
        console.log("open side menu")
    }
}
function closeMenu() {
    if (window.innerWidth <= 600) {
        document.getElementById("nav-menu").style.width = "0";
        console.log("close side menu")
    }    
}