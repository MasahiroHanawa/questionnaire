import axios from 'axios'

const apiClient = () => {
  const apiInfo = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 100000,
  })
  return apiInfo
}

export default apiClient