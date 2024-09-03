document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const contents = document.querySelectorAll('.content');

    function showSection(sectionId) {
        contents.forEach(content => {
            if (content.id === sectionId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Show the first section by default
    if (navLinks.length > 0) {
        showSection(navLinks[0].getAttribute('data-section'));
    }
});
