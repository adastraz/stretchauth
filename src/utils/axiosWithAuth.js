import axios from 'axios';

const axiosWithAuth = () => {
    return axios.create({
        //config object
        baseURL: 'http://localhost:3300/',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
}
export default axiosWithAuth