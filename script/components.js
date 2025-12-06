// Header HTML
function loadHeader() {
    const headerHTML = /*html*/`
        <img src="img/heavenlybodies-logo.png" alt="Logo of a black hole that says heaven bodies under it"/>
        <nav>
            <a href="index.html" class="red">Home</a>
            <a href="about.html" class="yellow">About</a>
            <a href="contact.html" class="blue">Contact</a>
        </nav>
    `;
    document.querySelector('header').innerHTML = headerHTML;
}

// Footer HTML
function loadFooter() {
    const footerHTML = `
        <p>&copy; 2025 Heavenly Bodies</p>
    `;
    document.querySelector('footer').innerHTML = footerHTML;
}

// Load components when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
