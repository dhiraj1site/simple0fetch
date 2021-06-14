var http = require("http");
import { URL } from 'url';
import {serialize} from './helpers.js';


const nativeFetch = (object) => {
const {url ,body, query, headers, type, json, method} = object;
return new Promise((resolve, reject)=> {
  if(method == 'POST') {
    postData = JSON.stringify(body);
  }
  var queryParams = serialize(query);
  var _url = queryParams ?  url + '?' + queryParams : url;
  var options = new URL(_url);
  options.method = method;
  
  var req = http.request(options, function (res) {
    var chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on('error', (err) => {
      console.error(err.stack);
      reject(err.stack);
    });
  
    res.on("end", function () {
      var body = Buffer.concat(chunks);
      if (!json) {
        resolve(body.toString()); }
      else {
        resolve(body.toJSON());
      }
    });
  });
  
    req.write(postData);
    req.end();
})
}

export default nativeFetch;