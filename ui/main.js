console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'Hello Welcome to my Web Page';
var img = document.getElementById('img');
img.onclick = function () {
    img.style.marginleft = '100px';
};

