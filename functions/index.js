const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
admin.initializeApp();

setGlobalOptions({maxInstances: 10});

exports.helloKisan = onRequest((req, res) => {
  logger.info("Kisan AI Function Called");
  res.send("🌾 Hello from Project Kisan AI Assistant!");
});

