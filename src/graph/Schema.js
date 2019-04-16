var { buildSchema } = require('graphql')

export default {
  feedGet: function () {
    return buildSchema(`
      type Feed {
        feedId : String
        feedDesc : String
      }
    `)
  },
  feedPost: function () {
    return buildSchema(`
      type Feed2 {
        feedId : String
      }
    `)
  },
  queryD: function () {
    return buildSchema(`
      type Feed {
        feedId : String
        feedDesc : String
      }
      
      type Feed2 {
        feedId : String
      }
      
      type Query {
          dataG:Feed ,
          dataP:Feed2
      }
    `)
  }

}
