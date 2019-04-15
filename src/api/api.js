const axios = require('axios')

const api =  'http://192.168.117.35:3000/';
module.exports = {
  getData : function () {
    return  axios.get(api+'v1/feeds').then((response)=>{
      return response.data;
    });
  },
  postData : function () {
    return  axios.post(api+'v1/feed' , {feedId:'112'}).then((response)=>{
      return response.data;
    });
  }
};
