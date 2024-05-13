# Looplex OpenAPI  

Essas são as documentações das APIs da Looplex

## APIs disponíveis  
> Actions  
> Assembler  
> Cases  
> Looplex 365  
> Varas e Foros  

## Estrutura do projeto  
Na pasta `api_yaml_files` estão os arquivos **yaml** contendo:  
- Os componentes das apis (headers, parametros, DTOs, enums, etc.) na pasta `components`
- Os endpoints separados por projetos (APIs) na pasta `paths` 
- Os arquivos `actions.yaml`, `assembler.yaml`, `cases.yaml`, `looplex365.yaml` e `varas_foros_v2.yaml` que são os arquivos que referenciam as rotas dos endpoints.  

## Run project (localhost)  
Abra o terminal e rode o comando `yarn <nome_arquivo_projeto>.`  
Exemplo: `yarn varas_foros_v2.yaml`  
> NOTA  
**<nome_arquivo_projeto>** são os arquivos que estão na pasta `api_yaml_files`  
Qualquer alteração feita nesse arquivo será refletida na página enquanto estiver em debug.  

## Build após criação do endpoint  
Após criar endpoint novo e queira fazer o commit para atualizar as documentações dos ambientes, rode o comando `yarn build_apis` e faça o commit das alterações dos arquivos .json que forem compilados para a pasta `app/<version_number>/<api_name>/*.json`