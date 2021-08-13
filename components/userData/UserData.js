import axios from 'axios'
import api from '../../api/api'
import { parseCookie } from '../parseCookie/parseCookie'

const userData = (Component, bool) => {

  Component.getInitialProps = async ({ req, query }) => {
    const cookie = parseCookie(req)
    const [data, jobData] = await Promise.all([
      axios.post(`${api}/api/user/auth`, {}, { headers: {'Authorization': `${cookie.token}`} }).then(r => r.data),
      bool ? axios.get(`${api}/api/jobs/job/${query.id}`).then(r => r.data) : ''
    ])
    // const { data } = await axios.post(`${api}/api/user/auth`, {}, { headers: {'Authorization': `${cookie.token}`} })
    // const jobData = bool ? await axios.get(`${api}/api/jobs/job/${query.id}`) : ''
    return {
      data,
      job: jobData
    }
  }

  return Component
}

export default userData