import { RedocStandalone } from 'redoc'

const json = require('./looplex365.json')

export default function Looplex365 () {
  return (
    <RedocStandalone
      spec={json}
      options={{
        menuToggle: true,
        disableSearch: false,
        downloadFileName: 'openapi_looplex365.json'
      }}
    />
  )
}