function createBubble() {
    const heroSection = document.querySelector('.hero');
    const skills = ["Python", "Java", "Racket", "C", "C++", "Go", "HTML", "CSS", "JavaScript", "Arduino", "Raspberry-Pi", "Git", "Amazon Workspace", "WordPress", "Flutter", "Eclipse", "Jupyter Notebook", "RStudio", "IntelliJ", "Dr. Racket", "PyCharm", "Android Studio", "MariaDB", "MySQL", "HeidiSQL", "VMware", "VirtualBox", "WordPress", "Visual Studio Code"];
    const skill = skills[Math.floor(Math.random() * skills.length)];
    const createElement = document.createElement('span');
    createElement.textContent = skill;
    createElement.classList.add('bubble');

    const size = Math.max(60, skill.length * 10); // Adjust as needed
    createElement.style.width = `${size}px`;
    createElement.style.height = `${size}px`;
    createElement.style.lineHeight = `${size}px`; // Center text vertically

    createElement.style.left = `${Math.random() * (heroSection.offsetWidth - size - 600)}px`;
    createElement.style.top = `-100px`; // Start above the screen

    heroSection.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    }, 4000);
}
setInterval(createBubble, 600);

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // The element you wish to scroll to.
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

const projects = document.querySelectorAll('.project');

const options = {
    threshold: 0.5, // Detect when 50% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, options);

projects.forEach((project) => {
    observer.observe(project);
});