import ResponseResult from '@/app/core/ResponseResult'

export default class TestService {
  static getData (name) {
    return new Promise(resolve => {
      resolve(new ResponseResult({ data: require('@/data/' + name + '.json') }))
    })
  }
}
