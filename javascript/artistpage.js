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
  const opacity = 1 - (scrollTop / window.innerHeight);
  element.style.opacity = opacity.toFixed(2); 
};
window.addEventListener('scroll', myOpacityScroll);

const heading = document.querySelector('.decadeheading');
const myOpacityScrollHeading = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const opacity = 1 - (scrollTop / window.innerHeight);
  heading.style.opacity = opacity.toFixed(2); 
};
window.addEventListener('scroll', myOpacityScrollHeading);

const scroller = document.querySelector('.downarrow');
const myDown = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const opacity = 1 - (scrollTop / window.innerHeight);
  scroller.style.opacity = opacity.toFixed(2); 
};
window.addEventListener('scroll', myDown);

const scroller2 = document.querySelector('.downarrow2');
const myDown2 = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const opacity = 1 - (scrollTop / window.innerHeight);
  scroller2.style.opacity = opacity.toFixed(2); 
};
window.addEventListener('scroll', myDown2);

const scroller3 = document.querySelector('.downarrow3');
const myDown3 = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const opacity = 1 - (scrollTop / window.innerHeight);
  scroller3.style.opacity = opacity.toFixed(2); 
};
window.addEventListener('scroll', myDown3);
// const pageSong = document.querySelector('.pagesong');
// window.onload = function() {
// pageSong.play();
// };