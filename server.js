var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var host = 'localhost';
var port = 3000;
var hotArray = ['webpack-dev-server/client?http://'+host+':'+port, 'webpack/hot/only-dev-server'];

(function(entry) {
  if(entry){
    for(var i in entry){
      entry[i] = [].concat(hotArray, entry[i]);
    }
  }
})(config.entry);

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  colors: true,
  historyApiFallback: true
});
server.listen(port, host, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + host + ':' + port);
});