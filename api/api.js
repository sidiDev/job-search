import { env } from "../next.config"

const api = env.API || 'http://localhost:8000'
// 'https://job-search-api-v1.herokuapp.com'
export default api