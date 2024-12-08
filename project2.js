// Aside text change 

document.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('.aside');

    const sections = {
        'section-1': {
            title: 'CRM Platform objectives',
            description: 'The first objective was to enhance the platform`s usability by simplifying navigation, optimizing workflow, and reducing cognitive load for users. Introducing new features and capabilities to meet the diverse needs of users, including advanced reporting, customizable dashboards, and integration with third-party tools was meant to increase functionaluty. The third objective was modernizing the visual design to align with contemporary design trends, improve brand perception, and enhance user engagement.'
        },
        'section-2': {
            title: 'Dashboard',
            description: 'This fully customizable dashboard is the heart of the platform’s functionality. It allows the user to monitor every aspect of their business through either pre-made templates, or by integrating their own analytics tools. It provides a quick summary of the current month’s activity, with more detailed analytics available in their respective blocks. The user can change the time period of the data they wish to track.'
        },
        'section-3': {
            title: 'Customization',
            description: 'The user can add, remove or change the order of the pre-made blocks depending on their personal needs.'
        },
        'section-4': {
            title: 'User Profile',
            description: 'The user can enjoy a neat personal profile to add information about themselves, manage privacy settings and account safety. Since the platform carries a lot of sensitive and confidential information, user trust and utmost security are of highest concern.'
        },
        'section-5': {
            title: 'Mobile friendly',
            description: 'Adapting a sophisticated dashboard for a mobile device has been quite challenging, however the end results turned out to be intuitive and easy to use, while preserving the design of the key components, to ensure consistency across all platforms. This will allow users to avoid confusion when working across multiple devices.'
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
