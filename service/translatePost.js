var request = require('request');
const axios = require('axios');
const querystring = require('querystring');
require('dotenv').config();

const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
const translateURL = 'https://translation.googleapis.com/language/translate/v2?key=';

var translatePost = {
   find: function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       
       var data = {
           'q': req.body.text,
           'source': req.body.fromLang,
           'target': req.body.targetLang
       };

       var customizeOptions = {
           uri: translateURL + apiKey,
           body: JSON.stringify(data),
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
           }
       }
       request(customizeOptions, function (error, response) {
            if(response.statusCode === 200){
                res.send(response.body);
            }
            else{
                res.send({"data":{"translations":[{"translatedText": -1}]}});
            }
        });

    //    request(translateURL + apiKey 
    //            + '&q=' + req.body.text + '&source=' 
    //            + req.body.fromLang + '&target='
    //            + req.body.targetLang,
    //    function (error, response, body) {
    //        if (!error && response.statusCode == 200) {
    //            response = JSON.parse(body);
    //            res.send(response);
    //        } else {
    //            console.log(response.statusCode + response.body);
    //            console.log(req.body.text);
    //            console.log(req.body.fromLang);
    //            console.log(req.body.targetLang);
    //            res.send({"data":{"translations":[{"translatedText": -1}]}});
    //        }
    //    });

   }
};

module.exports = translatePost;