// Grid and contents sliding 

document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const homeButton = document.getElementById('homeButton');
    const projectsButton = document.getElementById('projectsButton');
    const resumeButton = document.getElementById('resumeButton');
    const contactsButton = document.getElementById('contactsButton');
    const summary = document.querySelector('.summary');
    const featured = document.getElementById('featured');
    const projects = document.querySelector('.projects');
    const accentText = document.getElementById('accentText');
    const contactLinks = document.getElementById('contactLinks');
    const contactInfo = document.getElementById('contactInfo');
    const aboutMe = document.getElementById('about-me');
    const experience = document.getElementById('experience');
    const education = document.getElementById('education');
    const allProjectsButton = document.getElementById('all-projects-button');
    const slider = document.getElementById('sliderContainer')

    summary.classList.add('visible');
    summary.classList.remove('hidden');
    featured.classList.add('visible');
    featured.classList.remove('hidden');
    projects.classList.add('hidden');
    projects.classList.remove('visible');
    accentText.classList.add('hidden');
    accentText.classList.remove('visible');
    contactLinks.classList.add('hiddenTop');
    contactLinks.classList.remove('visibleTop');
    contactInfo.classList.add('hiddenTop');
    contactInfo.classList.remove('visibleTopLate');
    aboutMe.classList.add('hidden');
    aboutMe.classList.remove('visible');
    experience.classList.add('hidden');
    experience.classList.remove('visible');
    education.classList.add('hidden');
    education.classList.remove('visible');
    slider.classList.add('hiddenStatic');
    slider.classList.remove('visibleStatic');

    homeButton.addEventListener('click', () => {
        content.classList.remove('four-columns');
        content.classList.remove('two-columns');
        content.classList.add('three-columns');
        summary.classList.add('visible');
        summary.classList.remove('hidden');
        featured.classList.add('visible');
        featured.classList.remove('hidden');
        projects.classList.add('hidden');
        projects.classList.remove('visible');
        accentText.classList.add('hidden');
        accentText.classList.remove('visible');
        contactLinks.classList.add('hiddenTop');
        contactLinks.classList.remove('visibleTop');
        contactInfo.classList.add('hiddenTop');
        contactInfo.classList.remove('visibleTopLate');
        aboutMe.classList.add('hidden');
        aboutMe.classList.remove('visible');
        experience.classList.add('hidden');
        experience.classList.remove('visible');
        education.classList.add('hidden');
        education.classList.remove('visibleStatic');
        slider.classList.add('hiddenStatic')
        slider.classList.remove('visibleStatic')
    });

    projectsButton.addEventListener('click', () => {
        content.classList.remove('four-columns');
        content.classList.remove('three-columns');
        content.classList.add('two-columns');
        summary.classList.add('hidden');
        summary.classList.remove('visible');
        featured.classList.remove('visible');
        featured.classList.add('hidden');
        projects.classList.add('visible');
        projects.classList.remove('hidden');
        accentText.classList.add('hidden');
        accentText.classList.remove('visible');
        contactLinks.classList.add('hiddenTop');
        contactLinks.classList.remove('visibleTop');
        contactInfo.classList.add('hiddenTop');
        contactInfo.classList.remove('visibleTopLate');
        aboutMe.classList.add('hidden');
        aboutMe.classList.remove('visible');
        experience.classList.add('hidden');
        experience.classList.remove('visible');
        education.classList.add('hidden');
        education.classList.remove('visible');
        slider.classList.remove('hiddenStatic')
        slider.classList.add('visibleStatic')
    });

    resumeButton.addEventListener('click', () => {
        content.classList.remove('two-columns');
        content.classList.remove('three-columns');
        content.classList.add('four-columns');
        summary.classList.add('hidden');
        summary.classList.remove('visible');
        featured.classList.remove('visible');
        featured.classList.add('hidden');
        projects.classList.add('hidden');
        projects.classList.remove('visible');
        accentText.classList.add('hidden');
        accentText.classList.remove('visible');
        contactLinks.classList.add('hiddenTop');
        contactLinks.classList.remove('visibleTop');
        contactInfo.classList.add('hiddenTop');
        contactInfo.classList.remove('visibleTopLate');
        aboutMe.classList.remove('hidden');
        aboutMe.classList.add('visible');
        experience.classList.remove('hidden');
        experience.classList.add('visible');
        education.classList.remove('hidden');
        education.classList.add('visible');
        slider.classList.add('hiddenStatic')
        slider.classList.remove('visibleStatic')
    });

    contactsButton.addEventListener('click', () => {
        content.classList.remove('three-columns');
        content.classList.remove('four-columns');
        content.classList.add('two-columns');
        summary.classList.add('hidden');
        summary.classList.remove('visible');
        featured.classList.remove('visible');
        featured.classList.add('hidden');
        projects.classList.add('hidden');
        projects.classList.remove('visible');
        accentText.classList.add('visible');
        accentText.classList.remove('hidden');
        contactLinks.classList.add('visibleTop');
        contactLinks.classList.remove('hiddenTop');
        contactInfo.classList.add('visibleTopLate');
        contactInfo.classList.remove('hiddenTop');
        aboutMe.classList.add('hidden');
        aboutMe.classList.remove('visible');
        experience.classList.add('hidden');
        experience.classList.remove('visible');
        education.classList.add('hidden');
        education.classList.remove('visible');
        slider.classList.add('hiddenStatic')
        slider.classList.remove('visibleStatic')
    });

    allProjectsButton.addEventListener('click', () => {
        projectsButton.click();
    })

});


// Nav bar button states

document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.navItem');

    navItems[0].classList.add('selected');


    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            navItems.forEach(btn => {
                btn.classList.remove('selected', 'past');
            });

            item.classList.add('selected');

            for (let i = 0; i < index; i++) {
                navItems[i].classList.add('past');
            }

            for (let i = index + 1; i < navItems.length; i++) {
                navItems[i].classList.remove('past');
            }
        });
    });
});


// Date and time

document.addEventListener("DOMContentLoaded", function () {
    function updateDateTime() {
        const options = {
            timeZone: "America/Toronto",
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        };

        let dateTime = new Date().toLocaleString("en-CA", options);

        dateTime = dateTime.replace("a.m.", "AM").replace("p.m.", "PM").replace("Sunday", "Sun").replace("Monday", "Mon").replace("Tuesday", "Tue").replace("Wednesday", "Wed").replace("Thursday", "Thu").replace("Friday", "Fri").replace("Saturday", "Sat");

        document.getElementById("dateTime").textContent = dateTime;
    }

    updateDateTime();

    setInterval(updateDateTime, 1000);
});


// Mode switcher animation on click

document.addEventListener("DOMContentLoaded", function () {
    const modeSwitcher = document.getElementById("modeSwitcher");

    modeSwitcher.addEventListener("click", function () {
        modeSwitcher.classList.toggle("rotated");
    });
});


// Projects slider 

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const pagination = document.getElementById("pagination");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const projectSummary = document.getElementById("project-summary");
    const projectYear = document.getElementById("project-year");

    let currentPage = 0;

    function updateSlider() {

        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentPage);
        });

        pagination.innerHTML = "";
        slides.forEach((_, index) => {
            if (index === currentPage) {
                pagination.innerHTML += `<span>${String(index + 1).padStart(3, "0")}</span>`;
            } else {
                pagination.innerHTML += `<span>•</span>`;
            }
        });

        const projectSummaries = [
            "Insurance company website redesign with a focus on improving customer experience. The project involved creating intuitive navigation, optimizing mobile responsiveness, and enhancing the visual layout to align with the company's brand identity.",
            "In a rapidly evolving business landscape, effective Customer Relationship Management (CRM) platforms are indispensable. This project aims to revamp an existing CRM platform, enriching its features and enhancing user experience across both web and mobile platforms.",
            "A comprehensive framework developed to streamline the UI design process and ensure consistency, efficiency, and scalability across all digital products and platforms.",
            "Keeping track of personal finances can be a challenge, leading to overspending and financial stress. To address this issue, a finance tracking application helps users take control of their finances by providing an easy and accessible tool to monitor their spendings and savings."
        ];

        projectSummary.textContent = projectSummaries[currentPage];

        const projectYears = [2024, 2024, 2023, 2023];

        projectYear.textContent = projectYears[currentPage];
    }

    prevButton.addEventListener("click", () => {
        currentPage = (currentPage - 1 + slides.length) % slides.length;
        updateSlider();
    });

    nextButton.addEventListener("click", () => {
        currentPage = (currentPage + 1) % slides.length;
        updateSlider();
    });

    updateSlider();
});


// Projects overlay

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    const overlayFrame = document.getElementById("overlayFrame");
    const closeOverlay = document.getElementById("closeOverlay");
    const openOverlay1 = document.getElementById("openOverlay1");
    const openOverlay2 = document.getElementById("openOverlay2");
    const openOverlay3 = document.getElementById("openOverlay3");
    const openOverlay4 = document.getElementById("openOverlay4");
    


    openOverlay1.addEventListener("click", () => {
        overlay.style.display = "flex";
        overlayFrame.src = "1.Ingo_Insurance.html";
        closeOverlay.style.display = "none";
    });

    openOverlay2.addEventListener("click", () => {
        overlay.style.display = "flex";
        overlayFrame.src = "2.CRM_Platform.html";
        closeOverlay.style.display = "none";
    });

    openOverlay3.addEventListener('click', () => {
        overlay.style.display = "flex";
        overlayFrame.src = "3.Design_system.html";
        closeOverlay.style.display = "none";
    })

    openOverlay4.addEventListener('click', () => {
        overlay.style.display = "flex";
        overlayFrame.src = "4.Finance_App.html";
        closeOverlay.style.display = "none";
    })

    closeOverlay.addEventListener("click", () => {
        overlay.style.display = "none";
        overlayFrame.src = "";
    });

});



// nav overlay test 

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu-toggle");
    const navOverlay = document.getElementById("nav-overlay");

    // Toggle the burger icon and the overlay when clicked
    const toggleMenu = () => {
        menu.classList.toggle("open");
        navOverlay.style.display = navOverlay.style.display === "flex" ? "none" : "flex";
    };

    menu.addEventListener("click", toggleMenu);

    // Close the overlay when any link is clicked
    navOverlay.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navOverlay.style.display = "none";
            menu.classList.remove("open");
        });
    });
});




