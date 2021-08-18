import axios from "axios"
import api from '../../api/api'
import { parseCookie } from '../parseCookie/parseCookie'

const jobData = (Component, bool) => {

  Component.getInitialProps = async ({ req, query }) => {
    try {
      const cookie = parseCookie(req)
      const [data, jobData] = await Promise.all([
        axios.post(`${api}/api/user/auth`, {}, { headers: {'Authorization': `${cookie.token}`} }).then(r => r.data),
        axios.get(`${api}/api/jobs/job/${query.id}`).then(r => r.data)
      ])
      return {
        data,
        job: jobData
      }
    } catch(err) {
      return {
        data: null,
        job: null
      }
    }
  }

  return Component
}

export default jobData