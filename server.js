import path from 'path';  
import express from 'express';  
import webpack from 'webpack';  
import webpackMiddleware from 'webpack-dev-middleware';  
import webpackHotMiddleware from 'webpack-hot-middleware'; // This line  
import config from './webpack.config.js';

const app = express();  
const compiler = webpack(config);


app.use(express.static(__dirname + '/public'));  
console.log(config.entry);
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler)); // And this line  
app.get('*', function response(req, res) {  
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000);  
