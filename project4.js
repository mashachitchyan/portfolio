// Aside text change 

document.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('.aside');

    const sections = {
        'section-1': {
            title: 'Finance tracking app',
            description: `The objectives of this project focus on ensuring intuitive navigation, allowing users to easily find features and complete tasks without frustration. The app should have a clear information structure, organizing data like transactions and budgets in a logical way to enhance users' understanding. Visual elements, including icons, colors, and typography, must be consistent and clear to improve readability and create a unified visual style.`
        },
        'section-2': {
            title: 'User Persona',
            description: 'The research results revealed key insights into user needs, preferences, and pain points, which informed the development of two distinct user personas. These personas help guide design decisions to ensure the product meets the specific needs of its users.'
        },
        'section-3': {
            title: 'User Flow',
            description: 'The research results highlighted key user behaviors and preferences, which led to the creation of a user flow to streamline their experience. It guides the design to ensure that both personas can achieve their goals efficiently and intuitively'
        },
        'section-4': {
            title: 'Sketches & Wireframes:',
            description: 'The sketches initially mapped out the key features focusing on task management and quick access to important information, as well as prioritizing simplicity and easy navigation to financial tools. The wireframes further refined these ideas, establishing the structure and layout of the screens.'
        },
        'section-5': {
            title: 'Key UI Screen : Login/Signup',
            description: 'Simple and clean sign in/sign up screen that pops up after the initial splash screen. The sign up form is easy to use and requires only the essential information needed to create an account, such as email, and password. All additional information can be added or edited later. '
        },
        'section-6': {
            title: 'Dashboard',
            description: 'The dashboard screens are designed to provide a clear and comprehensive overview of the user’s financial situation. Navigating to different parts of the dashboard through tabs has allowed to organize information into an accessible and elegant flow. The graphs and progress indicators have made the user experience further engaging.'
        },
        'section-7': {
            title: 'Notifications',
            description: `Notifications screen can be accessed from all the screens of the application. This is important to make sure the user doesn't miss or look over an important update regarding their bills, deadlines or due dates.`
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const { title, description } = sections[sectionId] || {};
                if (title && description) {
                    aside.querySelector('h2').textContent = title;
                    aside.querySelector('p').textContent = description;
                }
            }
        });
    }, {
        threshold: [0.8] 
    });

    Object.keys(sections).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            observer.observe(section);
        } else {
            console.log(`Section with ID "${sectionId}" not found!`);
        }
    });
});


// Back to projects

document.getElementById("closeOverlayFromIframe").addEventListener("click", () => {
    window.parent.document.getElementById("closeOverlay").click();
});
