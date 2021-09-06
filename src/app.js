const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath))


app.get('',(req,res) => {
    res.render("index",{
        title:'Weather App',
        name:'Harvinder Singh'
    });
})

app.get('/help',(req,res) => {
    res.render("help",{
        title:'Help',
        helpText:'This is help page',
        name:'Harvinder Singh'
    });
})

app.get('/weather',(req,res) => {
    res.send("Your Weather");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})