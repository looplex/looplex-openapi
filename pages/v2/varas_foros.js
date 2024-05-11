import { RedocStandalone } from 'redoc'

const json = require('./varas_foros.json')

export default function VarasEForos() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        menuToggle: true
      }}
    />
  )
}