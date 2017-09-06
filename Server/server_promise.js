/**
 * Created by janloeffelsender on 17.07.17.
 */


var http = require('http');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.use (function(req, res, next) {
    res.header('utf8');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get ('/get_stock/:stock_name/', function(req, res){
  var chunk = [];
  var path = encodeURI('/aq/autoc?query='+ req.params.stock_name + '&region=US&lang=en-US');
  // console.log(path);
  //options.path('/aq/autoc?query='+ req.params.stock_name + '&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks');
  var options = {
    host: 'd.yimg.com',
    port: 80,
    path: path,
    method: 'GET'
  };
  http.request(options, function(res1) {

    //console.log(options.path);
    // console.log('STATUS: ' + res1.statusCode);
    // console.log('HEADERS: ' + JSON.stringify(res1.headers));
     res1.setEncoding('utf8');
    // res1.header("Access-Control-Allow-Origin", "*");
    // res1.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        var body = '';
        res1.on('data', function (data, err) {
            //res.send(JSON.parse(data));
            body += data;
            //console.log('BODY: ' + JSON.stringify(JSON.parse(data)));
            //chunk.push

            // if (err) {
            //     return res.send();
            // }
            //res1
            // res1.on('error', function(error){
            //     console.log(e.error())
            // })
            //return;
        }).on('end', function() {
            // console.log(body);
            res.send(JSON.parse(body));
            return;
        })


  }).end();
    // .on('end', function (){
    //     var concat_response = Buffer.concat(chunk);
    //     res.send(JSON.parse(concat_response));
    //     console.log('BODY: ' + JSON.stringify(JSON.parse(concat_response)));
    //     res.status(400).end;
    // })
res.end;
});

app.get('/get_stock_price/:abbreviation/', function(req, res){
    const pat = new RegExp("[\.][A-Z]+");
    var abbreviation_checked = req.params.abbreviation.replace(pat, "");
    var chunk = [];
    var path = encodeURI('/finance/info?q='+abbreviation_checked+':ETR');
    console.log(path);
    //options.path('/aq/autoc?query='+ req.params.stock_name + '&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks');
    // www.google.com/finance/info?q=D05:ETR
    var options = {
        host: 'www.google.com',
        port: 80,
        path: path,
        method: 'GET'
    };
    try {
        http.request(options, function (res1) {

            console.log(options.path);
            // console.log('STATUS: ' + res1.statusCode);
            // console.log('HEADERS: ' + JSON.stringify(res1.headers));
            res1.setEncoding('utf8');
            // res1.header("Access-Control-Allow-Origin", "*");
            // res1.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            var body = '';
            res1.on('data', function (data, err) {
                //res.send(JSON.parse(data));
                body += data;
                //console.log('BODY: ' + JSON.stringify(JSON.parse(data)));
                //chunk.push

                // if (err) {
                //     return res.send();
                // }
                //res1
                // res1.on('error', function(error){
                //     console.log(e.error())
                // })
                //return;
            }).on('end', function () {
                var body_replaced = body.replace("//", "");
                console.log(body_replaced);
                try {
                    res.send(JSON.parse(body_replaced));
                } catch (err){
                    console.log(err.message);
                }
                // res.on('error', function (error) {
                //     console.log(e.error);
                //     return;
                // })
                return;
            })


        }).end();
    }catch(err) {
        console.log(err.message);
    }
    // .on('end', function (){
    //     var concat_response = Buffer.concat(chunk);
    //     res.send(JSON.parse(concat_response));
    //     console.log('BODY: ' + JSON.stringify(JSON.parse(concat_response)));
    //     res.status(400).end;
    // })
    res.end;
});


// request.on('response', function (response) {
//     var body = '';
//     response.on('data', function (chunk) {
//         body += chunk;
//     });
//     response.on('end', function () {
//         console.log('BODY: ' + body);
//     });
// });
// request.end();
console.log('todo list RESTful API server started on: ' + port);
