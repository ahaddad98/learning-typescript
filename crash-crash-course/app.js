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
    res.render('about', {title: 'About'});
    // res.sendFile('./views/about.html', {root: __dirname});
});
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'create'});
    // res.redirect('/about');
});
// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
});