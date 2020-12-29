import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID jDbmaJjRKDYoUrpuHdV5CPCuNZAc0xLfgNuw_mDtO-8'
  }
});