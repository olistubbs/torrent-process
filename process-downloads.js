// Watcher to keep an eye on unprocessed downloads and move them to their relevant folders
var mv = require('mv');
var fs = require('fs');

var chokidar = require('chokidar');

var watcher = chokidar.watch('.', {
  ignored: /(^|[\/\\])\../,
  persistent: true
});

var log = console.log.bind(console);

watcher
  .on('add', function(file) {
    console.log(`File ${file} has been added`);
  });

//watcher
//  .on('add', function(path) { log('File', path, 'has been added'); })
//  .on('addDir', function(path) { log('Directory', path, 'has been added'); })
//  .on('change', function(path) { log('File', path, 'has been changed'); })
//  .on('unlink', function(path) { log('File', path, 'has been removed'); })
//  .on('unlinkDir', function(path) { log('Directory', path, 'has been removed'); })
//  .on('error', function(error) { log('Error happened', error); })
//  .on('ready', function() { log('Initial scan complete. Ready for changes.'); })
//  .on('raw', function(event, path, details) { log('Raw event info:', event, path, details); });
