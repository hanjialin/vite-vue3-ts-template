import instance from '@/utils/request'
//GET无参数
export function demo() {
  return instance({ url: 'you_url', method: 'GET' })
}
