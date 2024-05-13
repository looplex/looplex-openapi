"use client"

import { RedocStandalone } from 'redoc'

const json = require('./assembler.json')

export default function Assembler () {
  return (
    <RedocStandalone
      spec={json}
      options={{
        sortTagsAlphabetically: true,
        downloadFileName: 'openapi_looplex_assembler.json'
      }}
    />
  )
}