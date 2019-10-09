var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
    var request = JSON.parse(this.req.chunks[0]);
    var botRegex = /^\/cool guy$/;
    var cccRegex = /CCCl/;
    var cccRegex2 = /When and Where is CCC/;
    var cccRegex3 = /When's CCC/;
    var cccRegex4 = /Where can I buy CCC tickets/
    var cccRegex5 = /How much are CCC tickets/
    var cccRegex6 = /Is there a link to buy CCC tickets/
    var cccRegex7 = /CJ/;
    var cccRegex8 = /Mannan/;
    if (request.text && botRegex.test(request.text)) {
        this.res.writeHead(200);
        postMessage();
        this.res.end();
    } else if (request.text && (cccRegex2.test(request.text) || cccRegex3.test(request.text))) {
        this.res.writeHead(200);
        postCCCMessage2();
        this.res.end();
    } else if (request.text && cccRegex.test(request.text)) {
        this.res.writeHead(200);
        postCCCMessage();
        this.res.end();
    } else if (request.text && cccRegex4.test(request.text)) {
        this.res.writeHead(200);
        postCCCMessage3("CCC tickets are available at the MSC box office(the same place y'all payed dues)!");
        this.res.end();
    } else if (request.text && cccRegex5.test(request.text)) {
        this.res.writeHead(200);
        postCCCMessage3("Tickets cost $5 for the general public, $2.50 for members and a specia; price $15 if you buy 4 tickets at once!");
        this.res.end();
    } else if (request.text && cccRegex6.test(request.text)) {
        this.res.writeHead(200);
        postCCCMessage3("Yes of course there is: https://boxoffice.tamu.edu/online/default.asp?doWork::WScontent::loadArticle=Load&BOparam::WScontent::loadArticle::article_id=8C3D300E-E6B8-4952-9B39-27A91F9CCDC1&BOparam::WScontent::loadArticle::context_id=C7205886-F1C1-447F-9AE7-C01FD6F8C211");
        this.res.end();
    } else if (request.text && cccRegex7.test(request.text)) {
        this.res.writeHead(200);
        postCCCMessage3("This man led CCC last year and coined the term Free Whataburger For a Year");
        this.res.end();
    } else if (request.text && cccRegex8.test(request.text)) {
        this.res.writeHead(200);
        postCCCMessage3("This man is leading CCC this year and striving to make it the best year yet. With some great prizes coming in hot this year, the winners are gonna make hella bread!!!");
        this.res.end();
    } else {
        console.log("don't care");
        this.res.writeHead(200);
        //postCCCMessage();
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

function postCCCMessage2() {
    var botResponse, options, body, botReq;

    botResponse = "CCC is on the 24th in MSC 2406 A&B Post up Bitches";

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

function postCCCMessage3(message) {
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