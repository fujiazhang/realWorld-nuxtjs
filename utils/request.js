import axios from 'axios'
// 创建axios实例
const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
});

export default request