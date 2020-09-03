import axios from 'axios'

const request = axios.create({

    baseURL:"/",
    timeout:5000//请求超时
})
export default request//导出axios对象