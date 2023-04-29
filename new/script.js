// Get the current year and update the footer
const currentYear = new Date().getFullYear();
document.querySelector('footer p').innerHTML += ` ${currentYear}`;

// Highlight the active link in the navigation menu
const currentPage = window.location.pathname;
const links = document.querySelectorAll('nav a');

for (const link of links) {
	if (link.getAttribute('href') === currentPage) {
		link.classList.add('active');
		break;
	}
}
