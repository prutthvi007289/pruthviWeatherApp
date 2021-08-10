const express = require('express');
const path = require('path');
const hbs=require('hbs')
const app = express();
const port = 8000;
const static_path = path.join(__dirname, '../public')
const views_path = path.join(__dirname, 'template/views');
const template_path = path.join(__dirname, 'template/partials');
// console.log(views_path)

app.use(express.static(static_path));
app.set('view engine', 'hbs');
hbs.registerPartials(template_path)
app.set('views', views_path);
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/whether', (req, res) => {
    res.render('whether')
})

app.get('*', (req, res) => {
    res.render('error')
})
app.listen(port, () => {
    console.log('server creted')
})