import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000', 
});


// api.interceptors.request.use(
//     (config)=>{

//     }
// )

// api.interceptors.response.use(
//     (config)=>{
        
//     }
// )


export default api;