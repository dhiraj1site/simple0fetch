import xhrFetch from './XhrFetch';
import nativeFetch from './NativeFetch';
const simpleFetch = {};
const XHRMODE = typeof XMLHttpRequest === 'function';
const useMode = XHRMODE ? xhrFetch : nativeFetch;

simpleFetch.get = (object)  => {
  const {url ,body, query, headers, type} = object;
  return useMode(url, "GET", body, query, headers, type);
}

simpleFetch.post = (object)  => {
  const {url ,body, query, headers, type} = object;
  return useMode(url, "POST", body, query, headers, type);
}

simpleFetch.put = (object)  => {
  const {url ,body, query, headers, type} = object;
  return useMode(url, "PUT", body, query, headers, type);
}

simpleFetch.delete = (object)  => {
  const {url ,body, query, headers, type} = object;
  return useMode(url, "DELETE", body, query, headers, type);
}


export default simpleFetch;
