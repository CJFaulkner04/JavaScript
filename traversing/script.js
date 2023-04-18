const header = document.querySelector('header');

const sections = document.querySelectorAll('section');

const currentSection = document.querySelector('section.current');

const nextSection = currentSection.nextElementSibling;

const previousSectionH2 = currentSection.previousElementSibling.querySelector('h2');

const divWithHighlight = document.querySelector('h2.highlight').closest('div');

const sectionsWithH2 = document.querySelectorAll('section:has(h2)');

console.log(header);
console.log(sections);
console.log(currentSection);
console.log(nextSection);
console.log(previousSectionH2);
console.log(divWithHighlight);
console.log(sectionsWithH2);
