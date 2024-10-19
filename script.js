// Select the navigation bar
const navbar = document.getElementById('navbar');

// Add scroll event listener to change navbar style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  // If scrolled down 50px
        navbar.style.backgroundColor = 'green';  // Darker background
        navbar.style.boxShadow = '0px 4px 2px -2px gray';  // Add shadow
    } else {
        navbar.style.backgroundColor = 'red';  // Original background
        navbar.style.boxShadow = 'none';  // Remove shadow
    }
});
