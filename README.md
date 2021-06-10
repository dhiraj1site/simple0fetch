# simple0fetch

> simple 0 dependency fetch urls for both xhr and native http

[![NPM](https://img.shields.io/npm/v/simple0fetch.svg)](https://www.npmjs.com/package/simple0fetch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple0fetch
```

## Usage

```jsx
import React, { Component } from 'react'

import simpleFetch from 'simple0fetch'

export default function App() {
  const [apiResponse, setResponse] = useState(0);
  simpleFetch.get({
    url : 'http://www.google.com', 
    query : {test: true, nofollow: 'yes'}  
  }).then(res => {
    console.log('got response', res);
    setResponse(res);
  }).catch(err => {
    console.log('got err', err);
    setResponse(err);
  })
  return apiResponse;
}
```

## License

MIT © [dhiraj1site](https://github.com/dhiraj1site)
