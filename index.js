const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get("/", (req, res) => {
    res.render('index.ejs')
})

app.get("/termos", (req, res) => {
    res.render('termos.ejs')
})

app.get("/planos", (req, res) => {
    res.render('planos.ejs')
})

app.get("/equipe", (req, res) => {
    res.render('equipe.ejs')
})

app.get("/discord", (req, res) => {
    res.redirect('https://discord.gg/xfDcy4Cqnq')
})
  
app.use(function (req, res, next) {
    res.render('error.ejs')
});

app.listen(3000,async()=>{
    console.log(`http://localhost:3000`)
})