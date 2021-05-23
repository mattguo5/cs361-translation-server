const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

const port = process.env.PORT || 3001;

const routes = require('./api/routes');
routes(app);
app.listen(port, function(){
    console.log('Server started on port: ' + port);
});