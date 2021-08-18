import axios from 'axios'
import api from '../../api/api'
import { parseCookie } from '../parseCookie/parseCookie'

const applyData = (Component) => {

  Component.getInitialProps = async ({ req, query }) => {

    try {
      const cookie = parseCookie(req)
      const [data, companyId] = await Promise.all([
        axios.post(`${api}/api/user/auth`, {}, { headers: {'Authorization': `${cookie.token}`}}).then(r => r.data),
        axios.get(`${api}/api/employee/apply/${query.id}`).then(r => r.data)
      ])
      return {
        data,
        companyId
      }
    } catch(err) {
      return {
        data: null,
        companyId: null
      }
    }
  }

  return Component
}

export default applyData