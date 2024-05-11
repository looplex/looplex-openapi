import { RedocStandalone } from 'redoc'

const json = require('./actions.json')

export default function Actions () {
  return (
    <RedocStandalone
      spec={json}
      options={{
        menuToggle: true
      }}
    />
  )
}