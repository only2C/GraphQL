import {
  graphql,
  GraphQLList,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql'
import Api from '@/api/api'

export default {
  name: 'demo',
  data () {
    return {
      name: 1,
      getD: '',
      postD: ''
    }
  },
  async mounted () {
    const animals = await Api.getData()
    const Animal = new GraphQLInterfaceType({
      name: 'Animal',
      description: '接口',
      fields: () => ({
        name: {type: new GraphQLNonNull(GraphQLString)}
      })
    })
    const Dog = new GraphQLObjectType({
      name: 'Dog',
      interfaces: [Animal],
      description: '狗狗实体',
      fields: () => ({
        name: {type: new GraphQLNonNull(GraphQLString)},
        legs: {type: new GraphQLNonNull(GraphQLInt)},
      }),
      isTypeOf: obj => obj.legs,
    })
    const Fish = new GraphQLObjectType({
      name: 'Fish',
      interfaces: [Animal],
      description: '鱼儿实体',
      fields: () => {
        return ({
          name: {type: new GraphQLNonNull(GraphQLString)},
          tailColor: {type: new GraphQLNonNull(GraphQLString)},
        });
      },
      isTypeOf: obj => obj.tailColor,
    })
    const Query = new GraphQLObjectType({
      name: 'AnimalQuery',
      description: '动物信息查询',
      fields: () => ({
        animals: {
          type: new GraphQLList(Animal),
          description: '查询全部动物列表',
          resolve: function () {
            return animals
          }
        },
        animalSearch: {
          type: Animal,
          args: {
            text: {type: new GraphQLNonNull(GraphQLString)}
          },
          resolve: function (source, {text}) {
            if (text === 'dog') {
              return animals[0];
            } else {
              return animals[1];
            }
          }
        }
      })
    })
    const schema = new GraphQLSchema({
      types: [Dog, Fish, Animal],
      query: Query
    })
    graphql(schema, '{animals{name}}').then((response) => {
      console.log('===================')
      console.log(response)
    })
    console.log(schema)
  },
  methods: {
    initSource () {
    }
  }
}
