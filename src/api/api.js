const axios = require('axios')

const api = 'http://192.168.140.37:8080/'
module.exports = {
  getData: function () {
    return axios.get(api + 'graph').then((response) => {
      return response.data.data
    })
  },
  postData: function () {
    return axios.post(api + 'v1/feed', {feedId: '112'}).then((response) => {
      return response.data
    })
  }
}
