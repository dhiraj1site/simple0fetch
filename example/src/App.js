import React, {useState} from 'react';
import simpleFetch from 'simple0fetch'

export default function App() {
  const [apiResponse, setResponse] = useState(0);
  simpleFetch.get({
    url : 'http://localhost:4000/users/dhiraj201site@gmail.com', 
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