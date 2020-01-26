var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
    var request = JSON.parse(this.req.chunks[0]);
    var botRegex = /^\/cool guy$/;
    var masterRegex = /^how many people are left/;
    var masterRegex2 = /^when do we have to eliminate our person by/;
    if (request.text && botRegex.test(request.text)) {
        this.res.writeHead(200);
        postMessage();
        this.res.end();
    } else if (request.text && masterRegex.test(request.text.toLowerCase())) {
        this.res.writeHead(200);
        postCCCMessage("There are people left")
        this.res.end();
    } else if (request.text && masterRegex2.test(request.text.toLowerCase())) {
        this.res.writeHead(200);
        postCCCMessage("Kill atleast 1 person by sunday")
        this.res.end();
    } else {
        console.log("don't care");
        this.res.writeHead(200);
        //postCCCMessage();
        this.res.end();
    }
}


function postCCCMessage(message) {
    var botResponse, options, body, botReq;

    botResponse = message;

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