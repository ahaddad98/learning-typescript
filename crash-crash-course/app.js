const express = require('express');

// const app
const app = express();
// register veiw engine

app.set('view engine', 'ejs');


// lesten for request
app.listen(3000);
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});
// 404 page
app.use((req, res) => {
    res.status().sendFile('./views/404.html', {root: __dirname})
});