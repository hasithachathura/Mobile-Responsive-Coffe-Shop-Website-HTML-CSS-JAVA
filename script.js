document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    let searchBox = document.querySelector(".search-box");
    let searchIcon = document.querySelector("#search-icon");
    let menuIcon = document.querySelector("#menu-id");
    let navbar = document.querySelector(".navbar");

    // Toggle search box visibility
    searchIcon.onclick = () => {
        searchBox.classList.toggle("active");
        navbar.classList.remove("active"); // Hide navbar when search is opened
    };

    // Toggle navbar visibility
    menuIcon.onclick = () => {
        navbar.classList.toggle("active");
        searchBox.classList.remove("active"); // Hide search box when menu is opened
    };

    window.onscroll = () => {
        navbar.classList.remove("active");
        searchBox.classList.remove("active");
    };
});
