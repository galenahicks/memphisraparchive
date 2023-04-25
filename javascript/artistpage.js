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

var raiderKlan = document.getElementById('raiderklantt');
var raiderKlanul = document.getElementById('raiderklanul');
const onMouseMove = (e) =>{
  raiderKlan.style.left = e.pageX + 5 * window.innerWidth * 0.01 + 'px';
  raiderKlan.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

raiderKlanul.addEventListener('mouseover', () => { 
 raiderKlan.style.display ='block';
});

raiderKlanul.addEventListener('mouseleave', () => { 
  raiderKlan.style.display ='none';
 });

 var juicyJ = document.getElementById('juicyjtt');
var juicyJul = document.getElementById('juicyjul');
const onMouseMove2 = (e) =>{
  juicyJ.style.left = e.pageX + 5 * window.innerWidth * 0.01 + 'px';
  juicyJ.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove2);

juicyJul.addEventListener('mouseover', () => { 
  juicyJ.style.display ='block';
});

juicyJul.addEventListener('mouseleave', () => { 
  juicyJ.style.display ='none';
 });

 var juicyJ2 = document.getElementById('juicyjtt2');
 var juicyJul2 = document.getElementById('juicyjul2');
 const onMouseMove3 = (e) =>{
   juicyJ2.style.left = e.pageX + 5 * window.innerWidth * 0.01 + 'px';
   juicyJ2.style.top = e.pageY + 'px';
 }
 document.addEventListener('mousemove', onMouseMove3);
 
 juicyJul2.addEventListener('mouseover', () => { 
   juicyJ2.style.display ='block';
 });
 
 juicyJul2.addEventListener('mouseleave', () => { 
   juicyJ2.style.display ='none';
  });

 var juicyJ3 = document.getElementById('juicyjtt3');
 var juicyJul3 = document.getElementById('juicyjul3');
 const onMouseMove4 = (e) =>{
   juicyJ3.style.left = e.pageX + 5 * window.innerWidth * 0.01 + 'px';
   juicyJ3.style.top = e.pageY + 'px';
 }
 document.addEventListener('mousemove', onMouseMove4);
 
 juicyJul3.addEventListener('mouseover', () => { 
   juicyJ3.style.display ='block';
 });
 
 juicyJul3.addEventListener('mouseleave', () => { 
   juicyJ3.style.display ='none';
  });

  var juicyJ4 = document.getElementById('juicyjtt4');
 var juicyJul4 = document.getElementById('juicyjul4');
 const onMouseMove5 = (e) =>{
   juicyJ4.style.left = e.pageX + 5 * window.innerWidth * 0.01 + 'px';
   juicyJ4.style.top = e.pageY + 'px';
 }
 document.addEventListener('mousemove', onMouseMove5);
 
 juicyJul4.addEventListener('mouseover', () => { 
   juicyJ4.style.display ='block';
 });
 
 juicyJul4.addEventListener('mouseleave', () => { 
   juicyJ4.style.display ='none';
  });



  var juicyJ5 = document.getElementById('juicyjtt5');
 var juicyJul5 = document.getElementById('juicyjul5');
 const onMouseMove6 = (e) =>{
   juicyJ5.style.left = e.pageX + 5 * window.innerWidth * 0.01 + 'px';
   juicyJ5.style.top = e.pageY + 'px';
 }
 document.addEventListener('mousemove', onMouseMove6);
 
 juicyJul5.addEventListener('mouseover', () => { 
   juicyJ5.style.display ='block';
 });
 
 juicyJul5.addEventListener('mouseleave', () => { 
   juicyJ5.style.display ='none';
  });


var newJunt = document.getElementById('newjunttt');
var newJuntul = document.getElementById('newjuntul');
const onMouseMove33 = (e) =>{
  newJunt.style.left = e.pageX + 5 * window.innerWidth * 0.01 + 'px';
  newJunt.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove33);

newJuntul.addEventListener('mouseover', () => { 
  newJunt.style.display ='block';
});

newJuntul.addEventListener('mouseleave', () => { 
  newJunt.style.display ='none';
 });

 