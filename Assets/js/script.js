window.addEventListener('DOMContentLoaded', (event) => {
    let currentProjectIndex = 0;
    const projects = document.querySelectorAll('.project');
    const totalProjects = projects.length;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Function to update the visible project
    function updateProjectDisplay() {
        projects.forEach((project, index) => {
            if (index === currentProjectIndex) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    }

    // Event listener for next button
    nextButton.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex + 1) % totalProjects; // Loop back to the first project if at the end
        updateProjectDisplay();
    });

    // Event listener for previous button
    prevButton.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex - 1 + totalProjects) % totalProjects; // Loop back to the last project if at the beginning
        updateProjectDisplay();
    });

    // Initially display the first project
    updateProjectDisplay();
});
