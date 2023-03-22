import express from 'express';

const port = process.env.port || 3000;
const app = express();

app.get('/example', (req, res) => {
    console.log('new example request arrived');
    res.send('<h1>Hi from class</h1>');
});

app.get('/', (req, res) => {
    console.log('new request arrived');
    res.send('<h1>Hi from index.js</h1>');
});

app.listen(port, () => {
    console.log(`server is running at port: ${port}`);
});
