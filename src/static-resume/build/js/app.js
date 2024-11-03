"use strict";
// function toggleContent(button) {
//     const sectionContent = button.parentElement.nextElementSibling;
//     console.log(sectionContent);
//             if (sectionContent.style.display === 'none') {
//                 sectionContent.style.display = 'block';
//                 button.innerText = 'Hide';
//             } else {
//                 sectionContent.style.display = 'none';
//                 button.innerText = 'Show';
//             }
//         }
// hide show content
const toggleButtons = document.querySelectorAll('.hide-button');
for (const toggleButton of toggleButtons) {
    toggleButton.addEventListener('click', function () {
        const parentElement = this.parentElement;
        const nextSiblingElement = parentElement.nextElementSibling;
        if (window.getComputedStyle(nextSiblingElement).display === 'block') {
            nextSiblingElement.style.display = 'none';
            this.innerText = 'Show';
        }
        else {
            nextSiblingElement.style.display = 'block';
            this.innerText = 'Hide';
        }
    });
}
