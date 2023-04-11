// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Css Grid Project</title>
      <style>
          * {
              margin: 2px 2px;
              padding: 0px;
          }
  
          .main {
              display: grid;
              /* grid-template-columns: 50px 50px 50px 50px 50px 50px; */
              grid-template-columns: repeat(6, 1fr);
              /* grid-template-rows: repeat(12, 1fr); */
              grid-row-gap: 5px;
              grid-column-gap: 5px;
              height: 100vh;
              text-align: center;
          }
  
          .box {
              /* height: 50px; */
              /* width: 236px; */
              background-color: skyblue;
          }
  
          .imp {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: repeat(12, 1fr);
              grid-row-gap: 10px;
          }
  
          .box1 {
              grid-row: 1/13;
          }
  
          .box2 {
              grid-row: 1/7;
          }
  
          .box3 {
              grid-row: 7/13;
          }
  
          .box4 {
              grid-row: 1/5;
          }
  
          .box5 {
              grid-row: 5/9;
          }
  
          .box6 {
              grid-row: 9/13;
          }
  
          .box7 {
              grid-row: 1/4;
          }
  
          .box8 {
              grid-row: 4/7;
          }
  
          .box9 {
              grid-row: 7/10;
          }
  
          .box10 {
              grid-row: 10/13;
          }
  
          .box11 {
              grid-row: 1/3;
          }
  
          .box12 {
              grid-row: 3/5;
          }
  
          .box13 {
              grid-row: 5/7;
          }
  
          .box14 {
              grid-row: 7/9;
          }
  
          .box15 {
              grid-row: 9/11;
          }
  
          .box16 {
              grid-row: 11/13;
          }
  
          .box17 {
              grid-row: 1/2;
          }
  
          .box18 {
              grid-row: 2/3;
          }
  
          .box19 {
              grid-row: 3/4;
          }
  
          .box20 {
              grid-row: 4/5;
          }
  
          .box21 {
              grid-row: 5/6;
          }
  
          .box22 {
              grid-row: 6/7;
          }
  
          .box23 {
              grid-row: 7/8;
          }
  
          .box24 {
              grid-row: 8/9;
          }
  
          .box25 {
              grid-row: 9/10;
          }
  
          .box26 {
              grid-row: 10/11;
          }
  
          .box27 {
              grid-row: 11/12;
          }
  
          .box28 {
              grid-row: 12/13;
          }
      </style>
  </head>
  
  <body>
      <div class="main">
          <div class="main1 imp">
              <div class="box box1">1</div>
          </div>
          <div class="main2 imp">
              <div class="box box2">2</div>
              <div class="box box3">3</div>
          </div>
          <div class="main3 imp">
              <div class="box box4">4</div>
              <div class="box box5">5</div>
              <div class="box box6">6</div>
          </div>
          <div class="main3 imp">
              <div class="box box7">7</div>
              <div class="box box8">8</div>
              <div class="box box9">9</div>
              <div class="box box10">10</div>
          </div>
          <div class="main4 imp">
              <div class="box box11">11</div>
              <div class="box box12">12</div>
              <div class="box box13">13</div>
              <div class="box box14">14</div>
              <div class="box box15">15</div>
              <div class="box box16">16</div>
          </div>
          <div class="main5 imp">
              <div class="box box17">17</div>
              <div class="box box18">18</div>
              <div class="box box19">19</div>
              <div class="box box20">20</div>
              <div class="box box21">21</div>
              <div class="box box22">22</div>
              <div class="box box23">23</div>
              <div class="box box24">24</div>
              <div class="box box25">25</div>
              <div class="box box26">26</div>
              <div class="box box27">27</div>
              <div class="box box28">28</div>
          </div>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
