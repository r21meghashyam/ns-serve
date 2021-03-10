#! /usr/bin/env node
require('http').createServer((r,s)=>require('fs').readFile(require("path").resolve("")+(u=r.url.split(/\?|\:|\#/)[0],u=="/"?"/index.html":u),(e,d)=>s.end(e?e.message: d))).listen(8080)
