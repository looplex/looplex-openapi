import fs from 'node:fs/promises'
import path from 'node:path'

import postmanToOpenApi from 'postman-to-openapi'
import options from './postman/options.mjs'

const postman = './postman/graph.looplex.com.postman_collection.json'
const openapi = './openapi/openapi.yaml'

try {
  // const result = await p2o(postman, openapi, options)
  const result = await postmanToOpenApi(postman, openapi, {
    servers: [
      {
        url: 'https://graph.looplex.com',
        description: 'Looplex Graph'
      },
      {
        url: 'https://graph.looplex.com/cases/',
        description: 'Looplex Cases'
      },
      {
        url: 'https://graph.looplex.com/varas_foros/',
        description: 'Looplex Varas e Foros'
      }
    ],
    operationId: 'auto',
    folders: {
      concat: false
    }
  })

} catch (error) {
  console.error(error)
}
