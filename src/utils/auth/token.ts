import Cookies from 'js-cookie'
const tokenKey = 'template'
export function getToken() {
  return Cookies.get(tokenKey)
}
export function setToken(token: String) {
  return Cookies.set(tokenKey, token)
}
export function removeToken() {
  return Cookies.remove(tokenKey)
}
