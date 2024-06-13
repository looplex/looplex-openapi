# Build de uma nova API

Toda API desse projeto é renderizada de acordo com o arquivo `.json` que é compilado de acordo com o arquivo dessa API disponível na pasta `api_yaml_files`.  
Quando uma nova API for criada nesse projeto na pasta `api_yaml_files`, é necessário adicionar o seguinte script no arquivo `build_apis.json` que está na pasta `api_config_files`.  

```json
  // Adicione esse script dentro do array desse arquivo
  "redocly bundle ./api_yaml_files/<nome_arquivo_nova_api>.yaml -o ./app/<pasta_de_versao>/<nome_arquivo_nova_api>/<nome_arquivo_nova_api> --ext json"

  // Na parque em que está ./app/<nome_arquivo_nova_api>/<nome_arquivo_nova_api> repetido é normal 
  // pois, o primeiro se refere à pasta e o segundo ao nome do arquivo (que é igual à pasta)
```

### <nome_arquivo_nova_api>  
Nome do arquivo de API sem espaço e sem açento  

### <pasta_de_versao>  
A versão da API. `(e.g. v1, v2)`