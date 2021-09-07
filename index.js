import express from 'express';

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send("Hello hello\n");
});

app.get('/test', (req, res) => {
    res.send("Testinggggg\n");
});

app.get('*', (req, res) => {
    res.send("Wildcard route here whats up\n");
});

app.post('/login', (req,res) => {
    console.log(req.body);
    res.send("POSTed to login\n");
})

app.listen(3042);