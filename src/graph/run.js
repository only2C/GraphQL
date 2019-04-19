var express = require('express')
var app = express()
var fs = require('fs')
var {
  graphql,
  GraphQLList,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')
// 异步读取
fs.readFile('src/graph/jsonSchema/file1.json', function (err, data) {
  if (err) {
    return console.error(err)
  }
  resolveFile(data)
  console.log('异步读取: ' + data.toString())
})
function resolveFile (data) {
  let prop = data.properties
  let schema
  /**
   * {
   *    id:{
   *        type:''
   *    }
   * }
   */
  for(let i in prop){
  }
}
app.use('/graphql', function () {})
app.get('/', function (req, res) {
  res.send('GraphQL')
})

var server = app.listen(8888, function () {
  var port = server.address().port
  console.log('应用实例，访问地址为 http://localhost:', port)
})
