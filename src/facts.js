import fetch from 'isomorphic-fetch';
//"babel-core": "^6.26.3"
export default function getFacts() {
  return fetch('https://ssr-react.firebaseio.com/facts.json')
    .then(res => res.json());
}
