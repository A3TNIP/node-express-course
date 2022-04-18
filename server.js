const express = require('express');
const app = express();


// Use Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.listen(8000, function() {
    console.log('listening on port 8000');
})


const mockUserData = [
    { name: 'bob' },
    { name: 'joe' },
]

app.get('/users', function(req, res) {
    res.json({
        success: true,
        users: mockUserData,
        message: 'successfully got users'
    });
})


app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'successfully got user',
        user: req.params.id
    })
})

app.post('/login', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const mockUserName = 'bob';
    const mockPassword = '123';


    if (username === mockUserName && password === mockPassword) {
        res.json({
            success: true,
            message: 'successfully logged in'
        })
    } else {
        res.json({ success: false, message: 'incorrect username or password' })
    }
})