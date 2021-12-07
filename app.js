
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8011;


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const task = (x) => {
  return new Promise((resolve, reject) => {
    if (x < 13) resolve('yes');
    else reject('no');
  });
};

app.get('/login', (req, res) => {
  res.send('Maksimov');
});

app.get('/login/1', (req, res) => {
  res.set({ 'Content-Type': 'application/json'});
  res.send('Maksimov');
});

app.get('/login/2', (req, res) => {
  res.set({ 'Content-Type': 'application/json; charset=UTF-8' });
  res.send('Maksimov');
});

app.get('/login/code1', (req, res) => {
  res.set({ 'Content-Type': 'text/html; charset=UTF-8' });
  res.send('<html><head><meta charset="utf-8"><style>p {font-weight: bold; font-size: 21pt;}</style></head> <body><p>Maksimov</p></body></html>');
});

app.get('/login/code2', (req, res) => {
  res.set({ 'Content-Type': 'text/plain; charset=UTF-8' });
  res.send('<html><head><meta charset="utf-8"><style>p {font-weight: bold; font-size: 21pt;}</style></head> <body><p>Maksimov</p></body></html>');
});

app.get('/promise', (req, res) => {
  res.send(task.toString());
});

app.get('/promise/:val', async (req, res) =>{
  try{
    const val = req.params.val;
    const result = await task(parseInt(val))
    res.send(result)
  }catch(err){
    res.send(err)
  }
})

app.get('/fetch', (req, res) => {
  res.set({ 'Content-Type': 'text/html; charset=UTF-8' });
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
  res.statusCode = 404;
  res.send('<html><head><meta charset="utf-8"><style>p {font-weight: bold; font-size: 14pt; color: red;} body{background-color: blue;}</style></head><body><p>Ужас - ошибка 404 (не найдено)</p></body></html>');
});

app.get('*', (req, res) => {
  res.statusCode = 500;
  res.send('<html><head><meta charset="utf-8"><style>p {font-weight: bold; font-size: 14pt; color: red;} body{background-color: yellow;}</style></head><body><p>Не понял - ошибка  500 (Internal Server Error)</p></body></html>');
});

app.listen(port);
