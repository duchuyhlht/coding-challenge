export default class ResponseResult {
  constructor ({ data }) {
    this.success = data != null
    this.data = data
  }
}
