import postmanToOpenApi from 'postman-to-openapi'
import options from './postman/options.mjs'

const postman = './postman/graph.looplex.com.postman_collection.json'
const openapi = './openapi/openapi.yaml'

try {
  const result = await postmanToOpenApi(postman, openapi, options)
} catch (error) {
  console.error(error)
}
