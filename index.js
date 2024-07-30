const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/sum', (req, res) => { 
    res.render("sum", {"numbers": getRandomNumbers(2)});
});

app.post('/sum', function(req, res) {
    totalNumbers = req.body.numbers.split(",").length
    console.log(req.body.numbers)
    res.render("sum", {"numbers": getRandomNumbers(totalNumbers + 1)});    
});

function getRandomNumbers(total) {
    let i = 0;
    let ret = [];

    while (i < total) {
        ret.push(parseInt(Math.random()*100));
        i++;
    }
    return ret;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})