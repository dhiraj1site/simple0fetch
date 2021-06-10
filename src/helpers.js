const serialize = (obj) => {
    if(!obj) return '';
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
}

const resolveData = (body) => {
    var data = new FormData();
    for(var b in body) {
        if(body.hasOwnProperty(b)) {
            data.append(b, body[b]); 
        }
    }
    return data;
}

const setXhrHeaders = (xhr, obj) => {
    xhr.setRequestHeader("cache-control", "no-cache");
    for(var b in obj) {
        if(obj.hasOwnProperty(b)) {
            xhr.setRequestHeader(b, obj[b]);
        }
    }
}

export {serialize, resolveData, setXhrHeaders};