console.log('Loaded!');



/*var img = document.getElementById('abc');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
             
        var interval = setInterval(moveRight, 50);    
};
*/
var counter = 0;
var button = document.getElementById("counter");
button.onclick = function() {
    
     var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.Done){
            if (request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById("countt");
                span.innerHTML = counter.toString();
            }
           
        }
    };
       request.open('GET',  'http://aman2489agarwal76.imad.hasura-app.io/counter', true);
       request.send(null);
    
};
