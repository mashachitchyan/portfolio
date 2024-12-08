// Aside text change 

document.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('.aside');

    const sections = {
        'section-1': {
            title: 'INGO Insurance',
            description: 'In this comprehensive redesign, my goal was to enhance both the functionality and aesthetic of the insurance company\'s website, transforming it into a modern, user-centric digital platform. The project spanned several areas, from creating a streamlined product page to implementing a consistent design system and developing an intuitive personal cabinet. Each aspect of the redesign was aimed at improving the user experience, increasing engagement, and aligning the visual identity with the company\'s brand.'
        },
        'section-2': {
            title: 'DESIGN SYSTEM',
            description: 'I developed a robust, scalable design system to ensure a unified and cohesive look across all pages of the site. This system serves as a blueprint for all future updates, creating a set of reusable components that adhere to the company brand guidelines. Atomic design principles were used to create modular components (e.g., buttons, form fields, navigation bars), allowing for easy scaling and modification as the site evolves. Consistent typography, color palettes, and iconography were integrated to reinforce brand identity while maintaining visual clarity and ease of use.'
        },
        'section-3': {
            title: 'PERSONAL CABINET',
            description: 'The personal cabinet section underwent a full redesign to create a more intuitive and efficient experience for users managing their insurance policies. This secure area allows users to view policy details, make payments, file claims, and update personal information. I focused on user-centered design principles, ensuring that actions like updating policy details or filing a claim are easy to complete with minimal friction. Microinteractions and animations were incorporated to provide feedback on user actions (e.g., saving changes or submitting forms), offering a smoother, more interactive experience.'
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
        threshold: [0.3, 0.5]
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
