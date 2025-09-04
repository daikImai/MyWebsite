"use strict";

const title = document.querySelector('#title');
const keyframes = {
    opacity: [0, 1],
};
const options = {
    duration: 3000,
    easing: 'ease',
}
title.animate(keyframes, options);

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