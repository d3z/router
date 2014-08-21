#!/usr/bin/env node
(function() {

  'use strict';

  var config = require('./conf');
  var http = require('http');
  var httpProxy = require('http-proxy');

  var proxy = httpProxy.createProxyServer({});

  var server = http.createServer(function(request, response){
    var host = request.headers.host;
    var url = request.url;
    var target = config.routing_table[host];
    if (!target) {
      response.writeHead(400, {'Content-Type':'text/plain'});
      response.end('Unknown host');
    }
    else {
      if (!isNaN(target)) {
        target = config.default_host + ':' + target;
      }
      console.log('    Forwarding ' + host + url + ' -> ' + target); 
      proxy.web(request, response, {target: target});
    }
  });

  server.listen(config.port);
  console.log('router is running on 127.0.0.1:' + config.port);

})();
