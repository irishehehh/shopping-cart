import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === 'development'
                        ? 'http://localhost:8080'
                        : '';

axios.interceptors.request.use((config:InternalAxiosRequestConfig)=>{
  return config
});

axios.interceptors.response.use((res:AxiosResponse) => {
  if(res.status !==200) {
    return Promise.reject(res.statusText)
  }
  return res.data;

},(err)=>{
  return Promise.reject(err)
})


export default axios