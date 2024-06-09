document.addEventListener("DOMContentLoaded", function() {
    navigateTo('home'); // Show the 'home' section by default
   
});
function navigateTo(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}