function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// document.addEventListener("DOMContentLoaded", function() {
//     window.addEventListener('scroll', function() {
//         document.querySelectorAll('.skill_level').forEach(function(skillLevel) {
//             var skillTop = skillLevel.getBoundingClientRect().top;
//             var windowHeight = window.innerHeight;
//             if(skillTop < windowHeight){
//                 skillLevel.style.width = skillLevel.getAttribute('data-skill-percent');
//             }
//         });
//     });
// });


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateSkillBars() {
    var skillLevels = document.querySelectorAll('.skill_level');
    skillLevels.forEach(function(skillLevel) {
        if (isElementInViewport(skillLevel) && !skillLevel.style.width) {
            skillLevel.style.width = skillLevel.getAttribute('data-skill-percent');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', animateSkillBars);

// Initial check
document.addEventListener("DOMContentLoaded", animateSkillBars);


// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//     );
// }

// function animateSkillBars() {
//     var skillsSection = document.getElementById('experience');
//     var skillLevels = document.querySelectorAll('.skill_level');

//     if (isElementInViewport(skillsSection)) {
//         skillLevels.forEach(function(skillLevel) {
//             if (!skillLevel.classList.contains('animated')) {
//                 skillLevel.style.width = skillLevel.getAttribute('data-skill-percent');
//                 skillLevel.classList.add('animated');
//             }
//         });
//     } else {
//         skillLevels.forEach(function(skillLevel) {
//             skillLevel.style.width = '0';
//             skillLevel.classList.remove('animated');
//         });
//     }
// }

// // Listen for scroll events
// window.addEventListener('scroll', animateSkillBars);

// // Initial check
// document.addEventListener("DOMContentLoaded", animateSkillBars);



// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// function animateSkillBars() {
//     var skillsSection = document.getElementById('experience');
//     var skillLevels = document.querySelectorAll('.skill_level');

//     if (isElementInViewport(skillsSection)) {
//         skillLevels.forEach(function(skillLevel) {
//             if (!skillLevel.classList.contains('animated')) {
//                 skillLevel.style.width = skillLevel.getAttribute('data-skill-percent');
//                 skillLevel.classList.add('animated');
//             }
//         });
//     } else {
//         skillLevels.forEach(function(skillLevel) {
//             skillLevel.style.width = '0';
//             skillLevel.classList.remove('animated');
//         });
//     }
// }

// // Listen for scroll events
// window.addEventListener('scroll', animateSkillBars);

// // Initial check
// document.addEventListener("DOMContentLoaded", animateSkillBars);
