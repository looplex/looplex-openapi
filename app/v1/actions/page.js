"use client"

import { RedocStandalone } from 'redoc'

const json = require('./actions.json')

export default function Actions () {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_actions.json'
      }}
    />
  )
}