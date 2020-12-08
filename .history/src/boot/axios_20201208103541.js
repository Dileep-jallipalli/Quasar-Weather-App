import axios from 'axios' 
const axiosInstance = axios.create({ 
  baseURL: 'https://' 
})
export default ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }