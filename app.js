const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const app = express();

//try app.get("/", function (req, res) {
    //res.sendFile(__dirname + "/signup.html")
//}) and json.stringify
//try to clear cache again and do not init git in terminal

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
  params: {
    prefix: 'chicken soup'
  },
  headers: {
    'X-RapidAPI-Key': '2cce2f0256msh88d4e457cbb5cd6p1fb3b9jsn202c148ff951',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};


axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});

app.get('/', (req, res) => {
    res.render(response.display);
});



app.listen(3000, () => {
    console.log('server started');
}
);