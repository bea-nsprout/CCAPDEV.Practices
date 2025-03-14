const express = require('express')
const app = new express()
const port = process.env.PORT || 3000;
const path = require('path'); // to join with public

app.set('view engine', 'hbs');

// route serves the index file when the users visit the root url
app.get('/', function (req, res) {
    res.sendFile(__dirname + '\\' + 'index.html');
});
// for the images
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port http://localhost:${port}/`);
    }
});

app.get('/template', (req, res) => {
    res.render('template', {posts: posts});
});

// define posts array, for the contents of hbs
const posts = [
    {
        title: 'just got auserlese\'d',
        content: 'daniel told me to do this',
        image: 'auserlese.png'      // images in 'public' directory
    },
    {
        title: 'rip',
        content: 'rip rip rip rip rip rip rip rip',
        image: 'https://animesum.com/wp-content/uploads/2024/04/maxresdefault-2.jpg'
    }
]