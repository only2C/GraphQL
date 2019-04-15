import api from  '../api/api'
export default{

  name:'demo1',

  data:function(){
    return {
      name:1
    }
  },
  async mounted(){

   const data =  await api.getData() ;
   const data1 = await api.postData();
   console.log(data);
   console.log(data1)

  },

  method(){

  },

};
