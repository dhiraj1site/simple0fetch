import xhrFetch from './XhrFetch';
import nativeFetch from './NativeFetch';
const simpleFetch = {};
const XHRMODE = typeof XMLHttpRequest === 'function';
const useMode = XHRMODE ? xhrFetch : nativeFetch;

simpleFetch.get = (object)  => {
  const {url ,body, query, headers} = object;
  return useMode(url, "GET", body, query, headers);
}

simpleFetch.post = (object)  => {
  const {url ,body, query, headers} = object;
  return useMode(url, "POST", body, query, headers);
}

simpleFetch.put = (object)  => {
  const {url ,body, query, headers} = object;
  return useMode(url, "PUT", body, query, headers);
}

simpleFetch.delete = (object)  => {
  const {url ,body, query, headers} = object;
  return useMode(url, "DELETE", body, query, headers);
}


export default simpleFetch;
