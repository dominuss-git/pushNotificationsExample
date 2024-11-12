const webpush = require("web-push");
const fs = require('fs');

const VAPID = {
  publicKey:
    "BNOwhx50npVIpoyZjCLH9cIbp4xx7hw1JORPZJOqycH-RvpJmxnhLvQMqR5hNA2PGvYeRBhjqacR56SS0zasmRc",
  privateKey: "K0vvlyBHtSvKeikOxmypLmfF5217PwOxpQCiW-YdviE",
};
webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  VAPID.publicKey,
  VAPID.privateKey
);

function sendNotification(pushSubscription) {
  return webpush
    .sendNotification(
      pushSubscription,
      "payload"
    )
    .then((e) => console.log('sended', e))
    .catch((err) => {
      console.log(err);
    });
}

const pushSubscription = JSON.parse(fs.readFileSync("subscription.json"));
sendNotification(pushSubscription);


// console.log(webpush.generateVAPIDKeys());