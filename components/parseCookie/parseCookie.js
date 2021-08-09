import cookie from 'cookie'

export const parseCookie = (req) => {
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie )
}