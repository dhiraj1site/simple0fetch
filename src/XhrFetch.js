import {serialize, resolveData, setXhrHeaders} from './helpers.js';

const xhrFetch = (object) => {
    const {url ,body, query, headers, type, json, method} = object;
    return new Promise((resolve, reject) => {
        if(type == 'file') {
            var data = resolveData(body);
        }
        else {
            var data = JSON.stringify(body);
        }
        var queryParams = serialize(query);
        var xhr = new XMLHttpRequest();        
        xhr.addEventListener("load", function () {
            var finalResponse = json ? JSON.parse(this.responseText) : this.responseText;
            if(xhr.status < 400) {
                resolve(finalResponse);
            }
            else {
                reject(finalResponse);
            }
        });
        var _url = queryParams ?  url + '?' + queryParams : url;
        xhr.open(method, _url);
        setXhrHeaders(xhr, headers);
        xhr.send(data);
        })
}

export default xhrFetch;