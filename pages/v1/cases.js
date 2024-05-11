import { RedocStandalone } from 'redoc'

const json = require('./cases.json')

export default function Cases() {
  return (
    <RedocStandalone
      spec={json}
      options={{
        menuToggle: true
      }}
    />
  )
}