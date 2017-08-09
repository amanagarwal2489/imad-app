console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'Hello Welcome to my Web Page';

var img = document.getElementById('abc');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
             
        var interval = setInterval(moveRight, 50);    

};

