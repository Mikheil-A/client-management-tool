import axios from 'axios';


const jsonServerInstance = axios.create({
  baseURL: 'http://localhost:3005'
});

const jsonplaceholderInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export {
  jsonplaceholderInstance,
  jsonServerInstance
};
