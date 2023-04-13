console.log("art")

const ytVid = document.querySelector('.scrollblur');
window.addEventListener('scroll', () => {
  if (ytVid.getBoundingClientRect().top < window.innerHeight * 0.5) {
    ytVid.classList.add('unblur');
  }
  if (ytVid.getBoundingClientRect().top > window.innerHeight * 0.5) {
    ytVid.classList.remove('unblur');
  }
});

const ytVid2 = document.querySelector('.scrollblur2');
window.addEventListener('scroll', () => {
  if (ytVid2.getBoundingClientRect().top < window.innerHeight * 0.5) {
    ytVid2.classList.add('unblur2');
  }
  if (ytVid2.getBoundingClientRect().top > window.innerHeight * 0.5) {
    ytVid2.classList.remove('unblur2');
  }
});

const element = document.querySelector('.subartist');
const myOpacityScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // Calculate the opacity based on scroll position
  const opacity = 1 - (scrollTop / window.innerHeight);
  // Set the opacity of the element
  element.style.opacity = opacity.toFixed(2); // You can adjust the decimal places as needed
};
// Call the scrollOpacity function on scroll event
window.addEventListener('scroll', myOpacityScroll);

const heading = document.querySelector('.decadeheading');
const myOpacityScrollHeading = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // Calculate the opacity based on scroll position
  const opacity = 1 - (scrollTop / window.innerHeight);
  // Set the opacity of the element
  heading.style.opacity = opacity.toFixed(2); // You can adjust the decimal places as needed
};
// Call the scrollOpacity function on scroll event
window.addEventListener('scroll', myOpacityScrollHeading);