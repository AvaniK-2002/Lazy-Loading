document.addEventListener("DOMContentLoaded", () => {
    const exploreButton = document.getElementById("explore-btn"); //Lazy Loading
    exploreButton.addEventListener("click", () => {
        alert("Exploring the website!");
    });
});
const dynamicHeading = document.getElementById("dynamic-heading");
const headings = [
    "Discover breathtaking destinations",
    "Let's take you on a journey beyond boundaries.",
    
];
import("./script.js").then(script => {
    // Use the module here
});

let currentIndex = 0;

function changeHeading() {
    dynamicHeading.style.opacity = "0"; // Fade out
    setTimeout(() => {
        dynamicHeading.textContent = headings[currentIndex];
        currentIndex = (currentIndex + 3) % headings.length;
        dynamicHeading.style.opacity = "1"; // Fade in
    }, 500); // Wait for the fade-out animation to complete (in ms)
}

// Initial call to set the first heading
changeHeading();

// Set an interval to change the heading and apply transition
setInterval(changeHeading, 300); // Change heading every 3 seconds
const logoText = document.querySelector(".logo-text");

logoText.addEventListener("click", () => {
    logoText.classList.toggle("bounce");
});
document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");
    hero.classList.add("show-heading");
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.getElementById("typing-animation");
    const words = ["animation", "transition", "effect", "typing"];
    let currentIndex = 0;

    function animateTextTyping() {
        typingElement.textContent = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;
        setTimeout(animateTextTyping, 20); // Change timing as needed
    }

    animateTextTyping();
});

const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

import( './module.js').then(module => {
    // Code to use the module
});


// Service Worker (sw.js)
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/styles.css',
                '/script.js',
                '/logo.jpg',
                // Add more files to cache
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch(function(error) {
            console.log('Service Worker registration failed:', error);
        });
}



