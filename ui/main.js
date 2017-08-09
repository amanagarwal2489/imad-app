console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'Hello Welcome to my Web Page';

var img = document.getElementById('abc');
img.onclick = function (){
    img.style.marginLeft = '100px';
};

