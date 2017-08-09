var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' : {
    title: 'Articel-one | Aman Agarwal',
    heading: 'Article One',
    date:  'August 8,2017',
    content: `
        <p>
            Hello everyone, this is my first Webapp.  Hello everyone, this is my first Webapp. Hello everyone, this is my first Webapp.
        </p>
        <p>
             Hello everyone, this is my first Webapp.  Hello everyone, this is my first Webapp.  Hello everyone, this is my first Webapp.
        </p>
         <p>
              Hello everyone, this is my first Webapp.  Hello everyone, this is my first Webapp.  Hello everyone, this is my first Webapp.
         </p>`
},
 'article-two' : {
     
     title: 'Articel-two | Aman Agarwal',
    heading: 'Article Two',
    date:  'August 10,2017',
    content: `
        <p>
            Hello everyone, this is my  Webapp.  Hello everyone, this is my  Webapp. Hello everyone, this is my  Webapp.
        </p>
        <p>
             Hello everyone, this is my  Webapp.  Hello everyone, this is my  Webapp.  Hello everyone, this is my  Webapp.
        </p>
         <p>
              Hello everyone, this is my  Webapp.  Hello everyone, this is my  Webapp.  Hello everyone, this is my  Webapp.
         </p>`
 },
 'article-three' : {
     title: 'Articel-three | Aman Agarwal',
    heading: 'Article Three',
    date:  'August 8,2017',
    content: `
        <p>
            Hello everyone, this is my Article.
        </p>`

 },
};

 function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
 var htmlTemplate =`
  <html>
    <head>
        <title>${title}</title>
        <meta name='viewport'  content="width-device-width, initialscale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
            
    </head>
    <body>
        <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
         ${content}
         </div>
         </div>
    </body>
</html>  
`;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function(req, res){
     var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/aman.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aman.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
