var request = require('request');
require('dotenv').config();

const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
const translateURL = 'https://translation.googleapis.com/language/translate/v2?key=';

var translate = {
   find: function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       request(translateURL + apiKey 
               + '&q=' + req.params.text + '&source=' 
               + req.params.fromLang + '&target='
               + req.params.targetLang,
       function (error, response, body) {
           if (!error && response.statusCode == 200) {
               response = JSON.parse(body);
               res.send(response);
           } else {
               console.log(response.statusCode + response.body);
               console.log(req.params.text);
               console.log(req.params.fromLang);
               console.log(req.params.targetLang);
               res.send({"data":{"translations":[{"translatedText": -1}]}});
           }
       });

   }
};

module.exports = translate;