import {serialize, resolveData, setXhrHeaders} from './helpers.js';

const xhrFetch = (url, method, body, queryParams, headers = {}, json = false, type = '') => {
    return new Promise((resolve, reject) => {
        if(type == 'file') {
            var data = resolveData(body);
        }
        else {
            data = JSON.stringify(body);
        }
        queryParams = serialize(queryParams);
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
        url = queryParams ?  url + '?' + queryParams : url;
        xhr.open(method, url);
        setXhrHeaders(xhr, headers);
        xhr.send(data);
        })
}

export default xhrFetch;