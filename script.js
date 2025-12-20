function animateSectionsOnScroll() {
    const sections = document.querySelectorAll('.section-animate');
    const animate = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 70) { // Visible threshold
                section.classList.add('section-in-view');
            }
        });
    };
    window.addEventListener('scroll', animate);
    window.addEventListener('load', animate);
}
animateSectionsOnScroll();
function summaryMotionOnScroll() {
    const profileRow = document.querySelector('.profile-row');
    function checkInView() {
        if (!profileRow) return;
        const rect = profileRow.getBoundingClientRect();
        if (rect.top < window.innerHeight - 70) {
            profileRow.classList.add('in-view');
        }
    }
    window.addEventListener('scroll', checkInView);
    window.addEventListener('load', checkInView);
    checkInView();
}
summaryMotionOnScroll();
function smoothScrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}