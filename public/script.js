"use strict";

const keyframes = {
    opacity: [0, 1],
};

const options = {
    duration: 3000,
    easing: 'ease',
}

const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                },
                {
                    duration: 3000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            obs.unobserve(entry.target);
        }
    });
};

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});

function scrollToAbout(e) {
    e.preventDefault(); // #about をURLにつけない
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

function scrollToMyWorks(e) {
    e.preventDefault(); 
    document.getElementById("my-works").scrollIntoView({ behavior: "smooth" });
}

function scrollToContact(e) {
    e.preventDefault(); 
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}
