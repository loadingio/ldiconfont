require! <[fs path]>

recurse = (root) ->
  css-file = path.join(root, "ldif.min.css")
  if fs.exists-sync css-file =>
    console.log "bundle #css-file ..."
    b64 = fs.read-file-sync(path.join(root, "ldif.woff2")).toString \base64
    css = fs.read-file-sync css-file .toString!
    css += """
    @font-face{font-family:'ldi';src:url(data:font/woff2;base64,#{b64}) format('woff2')}
    """
    fs.write-file-sync path.join(root, "index.min.css"), css
  files = fs.readdir-sync root .map -> path.join(root, it)
  for file in files => if fs.stat-sync(file).is-directory! => recurse file

recurse path.join(__dirname, '..')
