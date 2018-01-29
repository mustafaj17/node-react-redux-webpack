import express from 'express';

let app = express();
let port = 2001;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log('server running on port ', port)
});