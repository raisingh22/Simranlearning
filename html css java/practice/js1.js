const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New web page</title>
      <style>
          .cont{
              border: 2px solid rgb(68, 40, 177);
              background-color: rgb(219, 196, 203);
              padding: 50px;
              margin: 34px auto;
              width: 500px;
          }
          a{
              text-decoration: none;
              color: black ;
          }
          a:hover{
              color: rgb(113, 7, 7);
              background-color: blueviolet;
          }
          a:visited{
              background-color: rgb(240, 128, 208);
          }
          .btn{
              font-family: Georgia, 'Times New Roman', Times, serif;
              background-color: #a27575;
              padding: 6px;
              border: none;
              cursor: pointer;
              font-size: 13px;
              border-radius: 4px;
          }
          .btn:hover{
              border: 2px solid lemonchiffon;
              
          }
  
      </style>
  </head>
  <body>
      <div class="cont" id="stat">
          <h3>This is My Heading</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum inventore eos obcaecati cumque officia, labore, saepe molestiae eligendi quaerat consequuntur veniam excepturi temporibus vitae! Illo veritatis soluta consectetur odio!</p>
          <a href="https://dribbble.com/shots/23337277-WEB-CAR-LEXUS" class="btn">Read more.</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});