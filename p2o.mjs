import fs from 'node:fs/promises'
import path from 'node:path'

import p2o from 'postman-to-openapi'
import options from './postman/options.mjs'

const postman = './postman/graph.looplex.com.postman_collection.json'
const openapi = './openapi/openapi.yaml'

try {
  const result = await p2o(postman, openapi, options)
} catch (error) {
  console.error(error)
}
