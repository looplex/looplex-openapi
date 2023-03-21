// https://joolfe.github.io/postman-to-openapi
// https://redocly.com/docs/openapi-visual-reference/server-variables/#visuals
export default {
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
    ]
}
