import axios from 'axios';

const InstanceAxios = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https',
  withCredentials: true,
});

export default InstanceAxios;
