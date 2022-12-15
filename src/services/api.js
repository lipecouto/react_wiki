import axios from 'axios';

const apiAxios = axios.create(  {
     baseURL: 'http://api.github.com'
    }
)

export default apiAxios