function toggleDarkMode() {
    let element = document.body;
    let darkModeText = document.getElementById("DarkModeText");
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        darkModeText.innerText = "0_0";
        
    } else {
        darkModeText.innerText = "SIX_STITCHES";
    }
}
