import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3030'

export function createRequest ({ url, params, data }) {
  return axios
    .request({
      url,
      params,
      data,
      baseURL: API_ENDPOINT
    })
    .then(response => new ResponseResult(response))
    .catch(err => {
      let { response } = err

      if (!response) throw err

      throw new ResponseResult(response)
    })
}

class ResponseResult {
  constructor (response) {
    let { data, status } = response

    this.data = data
    this.status = status
  }
}
