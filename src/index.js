import xhrFetch from './XhrFetch';
import nativeFetch from './NativeFetch';
const simpleFetch = {};
const XHRMODE = typeof XMLHttpRequest === 'function';
const useMode = XHRMODE ? xhrFetch : nativeFetch;

simpleFetch.get = (object)  => {
  object.method = 'get';
  return useMode(object);
}

simpleFetch.post = (object)  => {
  object.method = 'post';
  return useMode(object);
}

simpleFetch.put = (object)  => {
  object.method = 'put';
  return useMode(object);
}

simpleFetch.delete = (object)  => {
  object.method = 'delete';
  return useMode(object);
}


export default simpleFetch;
