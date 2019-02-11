import { apiHost } from '../../utils/apihost'

export default {
  async getRate(base) {
    try {
      let response = await fetch(apiHost + '/latest?base=' + base)
      let responseJSON = await response.json()
      return responseJSON
    } catch (error) {
      console.log(error)
    }
  },
}
