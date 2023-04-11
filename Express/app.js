const { static } = require("express");
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For Serving Static Files 
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as Pug
app.set('views', path.join(__dirname, 'views')); // Set the views Directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content available on Internet yet"
    const params = {'title': 'Pubg is the best game', "content": con};
    res.status(200).render('index.pug', params );
});

app.post('/', (req, res) => {
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;

    let OutputToWrite = `The name of the Clint is ${name}, ${age} years old, ${gender}, Residing at ${address}. More about the client  : ${more}`;

    fs.writeFileSync('output.txt', OutputToWrite);

    const params = {'message': 'Your Form has been submitted successfully'};
    res.status(200).render('index.pug', params )
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The Application started successfully on port ${port}`);
})