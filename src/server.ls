require! <[fs yargs path template]>

argv = yargs
  .option \dist, do
    alias: \d
    description: "custom font directory"
    type: \string
  .help!
  .alias \help, \h
  .check (argv, options) ->
    if !(argv.d and fs.exists-sync(argv.d)) => throw new Error("custom font directory required.")
    return true
  .argv

dir = argv.d 
dir = path.resolve(dir)

opt = do
  api: ({app}) ->
    app.get \/assets/lib/ldif/dev/:fn, (req, res) ->
      if !(ret = /\.(ttf|css|json)$/.exec(req.params.fn)) => res.status(404).send!
      type = ret.1
      buf = fs.read-file-sync path.join(dir,req.params.fn)
      res.type type
      res.send buf

process.chdir path.join(__dirname, '../web')

template.server.init opt
