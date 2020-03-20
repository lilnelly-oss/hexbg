var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
var nano = require('nanoid')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs')
})

app.get('/allcolors', (req, res)=> {
    res.render(__dirname +"/views/allcolors.ejs")
})

app.listen(3000, () => {
    console.log("3000 On!")
})