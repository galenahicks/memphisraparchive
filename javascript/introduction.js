var myContinue = document.getElementById('continue');
var myfirstText = document.getElementById('firsttext');
var mysecondText = document.getElementById('secondtext');
var mythirdText = document.getElementById('thirdtext');
var myContinue2 = document.getElementById('continue2');
var myContinue3 = document.getElementById('continue3');
var my808 = document.getElementById('perspective');
var my8082 = document.getElementById('topdown');
var slideOne = document.getElementById('slideone');
var myTitlepage = document.getElementById('titlepage');
myContinue.addEventListener('click', () => { 
    myTitlepage.style.opacity = '0%';
    myTitlepage.style.marginTop = '-5%';
    myfirstText.style.display = 'none';
    mysecondText.style.display = 'block';
    myContinue.style.display = 'none';
    myContinue2.style.display = 'block';
    my808.style.marginTop = '-3%';
    my808.style.marginLeft = '25%';
    my808.style.transitionDuration = '3s';
    myTitlepage.style.transitionDuration = '3s';
    });
myContinue2.addEventListener('click', () => { 
    mysecondText.style.display = 'none';
    mythirdText.style.display = 'block';
    myContinue2.style.display = 'none';
    myContinue3.style.display = 'block';
    });
myContinue3.addEventListener('click', () => { 
window.location.href = 'home.html';
    });