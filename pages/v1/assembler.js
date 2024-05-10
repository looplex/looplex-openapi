import { RedocStandalone } from 'redoc'

export default function Assembler () {
  return (
    <RedocStandalone specUrl="../assembler.yaml"/>
  )
}