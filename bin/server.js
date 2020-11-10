#!/usr/bin/env node
// Generated by LiveScript 1.3.1
var fs, yargs, path, template, argv, dir, opt;
fs = require('fs');
yargs = require('yargs');
path = require('path');
template = require('template');
argv = yargs.option('dist', {
  alias: 'd',
  description: "custom font directory",
  type: 'string'
}).help().alias('help', 'h').check(function(argv, options){
  if (!(argv.d && fs.existsSync(argv.d))) {
    throw new Error("custom font directory required.");
  }
  return true;
}).argv;
dir = argv.d;
dir = path.resolve(dir);
opt = {
  api: function(arg$){
    var app;
    app = arg$.app;
    return app.get('/assets/lib/ldif/dev/:fn', function(req, res){
      var ret, type, buf;
      if (!(ret = /\.(ttf|css|json)$/.exec(req.params.fn))) {
        res.status(404).send();
      }
      type = ret[1];
      buf = fs.readFileSync(path.join(dir, req.params.fn));
      res.type(type);
      return res.send(buf);
    });
  }
};
process.chdir(path.join(__dirname, '../web'));
template.server.init(opt);
