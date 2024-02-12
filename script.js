function createBubble() {
    const heroSection = document.querySelector('.home-bubble');
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
setInterval(createBubble, 1000);

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

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
const projectsHeaders = document.querySelectorAll('.projectsHeader');


const options = {
    threshold: 0.05, // Detect when 50% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
        else {
            entry.target.classList.remove('animated');
        }
    });
}, options);

projects.forEach((project) => {
    observer.observe(project);
});

projectsHeaders.forEach((projectsHeader) => {
    observer.observe(projectsHeader);
});