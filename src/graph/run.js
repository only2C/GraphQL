var express = require('express')
var graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql')

var schema = buildSchema(`
    type User{
        name: String
        sex: String
        intro: String
    }
    type Query {
        user:Userœ
    }
`)

var root = {
  user: {
    name: 'username',
    sex: '男',
    intro: '资深码农'
  }
}

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(8000, () => console.log('请在浏览器中打开地址：http://localhost:8000/graphql'))
