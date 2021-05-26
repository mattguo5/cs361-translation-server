'use strict';

var properties = require('../package.json')
var distance = require('../service/translate');
var postReq = require('../service/translatePost');
var googleTranslate = require('../utils/googleTranslate');

var controllers = {
   about: function(req, res) {
       var aboutInfo = {
           name: properties.name,
           version: properties.version
       }
       res.json(aboutInfo);
   },
   getTranslate: function(req, res) {
           distance.find(req, res, function(err, dist) {
               if (err)
                   res.send(err);
               res.json(dist);
           });
       },
    getPost: function(req, res) {
            postReq.find(req, res, function(err, dist) {
                if (err)
                    res.send(err);
                res.json(dist);
            });
    },
    getLanguages: function(req, res) {
        googleTranslate.getSupportedLanguages("en", function(err, languageCodes){
            // supportedLanguages = JSON.stringify(languageCodes);
            res.json(languageCodes);
        });
        
    }
};

module.exports = controllers;