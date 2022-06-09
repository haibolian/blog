import request from '@/utils/request';

export const getdata = () => {
  return request({
    url: '/getdata',
    method: 'get'
  })
}
