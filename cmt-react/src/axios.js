import axios from 'axios';


const jsonplaceholderInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

const mockyioInstance = axios.create({
  baseURL: 'https://www.mocky.io'
});

export {
  jsonplaceholderInstance,
  mockyioInstance
};
