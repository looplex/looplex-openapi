"use client"

import { RedocStandalone } from 'redoc'

const json = require('./varas_foros.json')

export default function VarasEForos() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: false,
        downloadFileName: 'openapi_looplex_varas_foros_v2.json'
      }}
    />
  )
}