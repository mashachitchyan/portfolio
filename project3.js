// Aside text change 

document.addEventListener('DOMContentLoaded', () => {
    const aside = document.querySelector('.aside');

    const sections = {
        'section-1': {
            title: 'Design system',
            description: 'The system aims to enhance efficiency by utilizing pre-defined components and guidelines, allowing for quick prototyping and iterative refinement while minimizing redundant work and inconsistencies. It supports scalability by accommodating new features, platforms, and use cases without compromising coherence or efficiency. Additionally, the design system fosters collaboration across multidisciplinary teams by providing a shared design language and clear documentation, ensuring alignment and efficient workflows.'
        },
        'section-2': {
            title: 'Styleguide : Colors',
            description: 'A well-defined color system provides flexibility to adapt color choices to different contexts and design requirements. By defining color variations and usage guidelines, it is possible to maintain consistency while accommodating diverse design needs and preferences.'
        },
        'section-3': {
            title: 'Styleguide : Grid',
            description: 'The 12-column grid system is particularly well-suited for responsive design, where layouts need to adapt to different viewport sizes. By defining breakpoints and adjusting column widths accordingly, designers can create fluid and responsive layouts that maintain visual hierarchy and readability across devices.'
        },
        'section-4': {
            title: 'Styleguide : Typography',
            description: 'To ensure readability, as well as maintain a modern and sleek look, “Proxima Nova” has been chosen as the main typeface for the design system. It offers a variety of weights, which helps create hierarchy in text when needed. This font is also easy to pair with other fonts, in case another one is added to the design system in the future.'
        },
        'section-5': {
            title: 'Styleguide : Iconography',
            description: 'Consistent iconography improves usability and accessibility, as users can quickly understand the meaning and functionality of icons, leading to a more intuitive and inclusive user experience.'
        },
        'section-6': {
            title: 'Components : Buttons',
            description: 'Buttons are designed for clear calls to action, providing users with a consistent and intuitive way to interact with the platform. They are styled to ensure visibility and accessibility, adapting to different states such as hover, active, and disabled.'
        },
        'section-7': {
            title: 'Components : Input fields',
            description: 'Input fields allow users to enter data efficiently, with clear labeling and validation cues. They maintain a consistent style across forms to ensure easy interaction and accurate data entry.'
        },
        'section-8': {
            title: 'Components : Toggles and Selectors',
            description: 'Toggles and selectors enable users to switch between options or make selections, providing a straightforward and responsive way to adjust settings or filter content. They are designed for clarity and ease of use in different contexts.'
        },
        'section-9': {
            title: 'Components : Loading and progresss',
            description: 'Loading and progress indicators provide users with visual feedback during processes that require time, improving the overall user experience. They are styled to be unobtrusive yet informative, ensuring users know the system is processing.'
        },
        'section-10': {
            title: 'Components : Charts',
            description: 'Charts display data visually, helping users to interpret complex information quickly. They are customizable, with various styles available to suit different data sets and user preferences.'
        },
        'section-11': {
            title: 'Components : Dropdowns',
            description: 'Dropdowns allow users to select options from a list, offering an efficient way to navigate and make choices without overwhelming the interface. They are designed to be compact and easy to use, especially on smaller screens.'
        },
        'section-12': {
            title: 'Components : Image cards',
            description: 'Image cards present visual content in an organized, clickable format. They are styled for clarity and emphasis, allowing users to engage with images or navigate to more detailed content effortlessly.'
        },
        'section-13': {
            title: 'Components : Forms',
            description: 'Forms are structured for easy data input, with clear labels, guidance, and validation to ensure users can submit information accurately. They maintain a consistent layout to enhance usability across the platform.'
        },

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
