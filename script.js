// Display a welcome message on the console
console.log("Welcome to Ammu's Website! Feel free to explore.");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle a dark mode for the website
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Add an event listener to a button for toggling dark mode
const darkModeButton = document.getElementById('darkModeButton'); // Assuming you have a button with the ID "darkModeButton"
if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}
