#Google Translate Microservice

Deployed on Heroku: https://frozen-journey-96381.herokuapp.com

##Version 1.0.0 GET usage:<br/>
{url}/translate/initial_language/target_language/text_to_translate

###GET Example:<br/>
https://frozen-journey-96381.herokuapp.com/translate/en/el/Hello World
- This will translate "Hello World" from English to Greek

##Version 1.0.0 POST usage:<br/>
Send a POST request to {url}/translate
```
POST data contents:
    {
        text: text_to_translate,
        fromLang: initial_language,
        targetLang: target_language
    }
```
POST body type: application/x-www-form-url-encoded

###POST Example:<br/>
https://frozen-journey-96381.herokuapp.com/translate
```
POST contents:
    {
        text: Hello World,
        fromLang: en,
        targetLang: el
    }
```
- This will translate "Hello World" from English to Greek

##Response:<br/>
Upon a successful response, a response package will be given as such:
```
"data": {
    "translations": [
        "translatedText": "Hello World"
    ]
}
```

Upon an unsuccessful response, a response package will be given as such:
```
"data": {
    "translations": [
        "translatedText": -1
    ]
}
```