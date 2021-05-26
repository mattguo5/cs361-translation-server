const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
const googleTranslate = require("google-translate")(apiKey);
module.exports = googleTranslate;