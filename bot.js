var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
    var request = JSON.parse(this.req.chunks[0]);
    var botRegex = /^\/cool guy$/;
    var cccRegex = /^CCC$/;
    if (request.text && botRegex.test(request.text)) {
        this.res.writeHead(200);
        postMessage();
        this.res.end();
    } else if (request.text && botRegex.test(request.text)) {
        this.res.writeHead(200);
        postCCCMessage();
        this.res.end();
    } else {
        console.log("don't care");
        this.res.writeHead(200);
        postCCCMessage();
        this.res.end();
    }
}

function postCCCMessage() {
    var botResponse, options, body, botReq;

    botResponse = "Campus Cultural Challenge is a competition wherein participants complete activities at different booths focused on different regions of the world. Participants have the opportunity to earn points at each station by completing the activity and answering trivia questions about the booth’s region. The participants who obtain the most points will obtain prizes at the end of the competition.";

    options = {
        hostname: 'api.groupme.com',
        path: '/v3/bots/post',
        method: 'POST'
    };

    body = {
        "bot_id": "db65fe234bf77178516ed8ef57",
        "text": botResponse
    };

    console.log('sending ' + botResponse + ' to ' + botID);

    botReq = HTTPS.request(options, function(res) {
        if (res.statusCode == 202) {
            //neat
        } else {
            console.log('rejecting bad status code ' + res.statusCode);
        }
    });

    botReq.on('error', function(err) {
        console.log('error posting message ' + JSON.stringify(err));
    });
    botReq.on('timeout', function(err) {
        console.log('timeout posting message ' + JSON.stringify(err));
    });
    botReq.end(JSON.stringify(body));
}

function postMessage() {
    var botResponse, options, body, botReq;

    botResponse = cool();

    options = {
        hostname: 'api.groupme.com',
        path: '/v3/bots/post',
        method: 'POST'
    };

    body = {
        "bot_id": botID,
        "text": botResponse
    };

    console.log('sending ' + botResponse + ' to ' + botID);

    botReq = HTTPS.request(options, function(res) {
        if (res.statusCode == 202) {
            //neat
        } else {
            console.log('rejecting bad status code ' + res.statusCode);
        }
    });

    botReq.on('error', function(err) {
        console.log('error posting message ' + JSON.stringify(err));
    });
    botReq.on('timeout', function(err) {
        console.log('timeout posting message ' + JSON.stringify(err));
    });
    botReq.end(JSON.stringify(body));
}

exports.respond = respond;