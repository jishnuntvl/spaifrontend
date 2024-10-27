const heroPics = document.querySelectorAll('.hero-pic img');
const heroTexts = document.querySelectorAll('.hero-text');
let currentPic = 0;

setInterval(() => {
    heroPics[currentPic].classList.remove('active');
    heroTexts[currentPic].classList.remove('active');
    currentPic = (currentPic + 1) % heroPics.length;
    heroPics[currentPic].classList.add('active');
    heroTexts[currentPic].classList.add('active');
}, 3000); /* Change the image and text every 3 seconds */

heroPics[currentPic].classList.add('active');
heroTexts[currentPic].classList.add('active');

/*****news*************************** */

// document.addEventListener('DOMContentLoaded', function() {
//     const newsContainers = document.querySelectorAll('.news-container');
    
//     const observerOptions = {
//         root: null, // viewport
//         rootMargin: '0px',
//         threshold: 0.1 // Trigger when 10% of the container is visible
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate'); // Add the class to start animation
//             } else {
//                 entry.target.classList.remove('animate'); // Remove the class when out of view
//             }
//         });
//     }, observerOptions);

//     newsContainers.forEach(container => {
//         observer.observe(container); // Observe each container
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const floatingDivs = document.querySelectorAll('.news-containers');

//     const observerOptions = {
//         root: null, // Use the viewport as the container
//         rootMargin: '0px',
//         threshold: 0.2 // Trigger when 10% of the element is visible
//     };

//     function handleIntersection(entries, observer) {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             } else {
//                 entry.target.classList.remove('visible');
//             }
//         });
//     }

//     const observer = new IntersectionObserver(handleIntersection, observerOptions);

//     floatingDivs.forEach(div => {
//         observer.observe(div);
//     });
// });

/************************************************/

/**********associa*/
document.addEventListener('DOMContentLoaded', function () {
    const floatingDivs = document.querySelectorAll('.associate-containers');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 10% of the element is visible
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    floatingDivs.forEach(div => {
        observer.observe(div);
    });
});

/****************about********/
document.addEventListener('DOMContentLoaded', function () {
    const floatingDivs = document.querySelectorAll('.about-content');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 10% of the element is visible
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    floatingDivs.forEach(div => {
        observer.observe(div);
    });
});

/*********executive**** */
document.addEventListener('DOMContentLoaded', function () {
    const floatingDivs = document.querySelectorAll('.executie-containers');

    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 10% of the element is visible
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    floatingDivs.forEach(div => {
        observer.observe(div);
    });
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

/*MESGAGE*******************************************/
document.addEventListener("DOMContentLoaded", () => {
    const messagesContainers = document.querySelectorAll('.messages');

    if (messagesContainers.length > 0) {
        console.log("Messages containers found.");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("Messages container is in view. Adding animation.");
                    entry.target.classList.add('animate');
                } else {
                    console.log("Messages container is out of view. Removing animation.");
                    entry.target.classList.remove('animate');
                }
            });
        }, { threshold: 0.1 });

        messagesContainers.forEach(container => {
            observer.observe(container);
        });
    } else {
        console.error("No messages containers found.");
    }
});


