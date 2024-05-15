"use client"

import { RedocStandalone } from 'redoc'

const json = require('./planilha_padrao.json')

export default function Planilha_Padrao() {
    return (
        <RedocStandalone
            spec={json}
            options={{
                sortTagsAlphabetically: true,
                downloadFileName: 'openapi_looplex_planilha_padrao.json'
            }}
        />
    )
}