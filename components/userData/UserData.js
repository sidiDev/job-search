import axios from 'axios'
import api from '../../api/api'
import { parseCookie } from '../parseCookie/parseCookie'

const userData = (Component) => {

  Component.getInitialProps = async ({ req }) => {
    const cookie = parseCookie(req)
    const { data } = await axios.post(`${api}/api/user/auth`, {}, { headers: {'Authorization': `${cookie.token}`} })
    return {
      data
    }
  }

  return Component
}

// const UserData = (Component) => {

//     return Component
// }

// UserData.getInitialProps = async ({ req }) => {
//   const cookie = parseCookie(req)
//   const { data } = await axios.post(`${api}/api/user/auth`, {}, { headers: {'Authorization': `${cookie.token}`} })
//   return {
//     data
//   }
// }


export default userData