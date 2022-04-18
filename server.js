const express = require('express');
const app = express();



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