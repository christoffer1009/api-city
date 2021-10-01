# API City

## Descrição
Uma api rest construída com Node.js para consultar e filtrar dados dos municípios do Brasil, utilizando a api do IBGE como fonte, esta api é capaz de buscar por cidades através de parâmetros (query strings) como **"name"** e **"state"**.

## Como usar

```npm install```

```npm start```

A aplicação será executada em *http://localhost:3000*

### Rotas
A única rota utilizada é:

* /api/city

e retorna uma lista com todos os municípios do Brasil.


### Estrutura dos dados

os dados são retornados em formato JSON em uma lista contendo as cidades que cumprem os parâmetros de busca. Por exemplo:

```
{
"id":2304400,
"name":"Fortaleza",
"state":"Ceará",
"uf":"CE",
"region":"Nordeste"
}

{
"id":3304557,
"name":"Rio de Janeiro",
"state":"Rio de Janeiro",
"uf":"RJ",
"region":"Sudeste"
}

```

#### Query strings

As query strings são parâmetros passados na url, a api então retorna os municípios que atendem ao parâmetros.

* uf : A sigla do estado ao qual o município pertence, deve conter apenas duas letras maiúsculas
* name : O nome do município, pode conter acentos, maiúsulos e minúsculos e espaços
* state : O estado ao qual o município pertence, pode conter acentos, maiúsulos e minúsculos e espaços
* region : A região a qual o município pertence, pode conter acentos, maiúsulos e minúsculos

#### Como usar as query strings

* /api/city?uf=UF&name=nome da cidade&state=nome do estado&region=nome da regiao

As queries são opcionais e passadas após o caractere **?** e devem seguir a forma **query=parametro** e as separações são feitas com o caractere **&**. A ordem não importa. Caso não houver queries a api retorna uma lista com todas as cidades. Nos campos name, state e region apenas uma parte do nome pode ser passado como parâmetro de busca.

### Exmplos
* /api/city?uf=CE&name=fortaleza&state=ceará&region=nordeste

```
{
"id":2304400,
"name":"Fortaleza",
"state":"Ceará",
"uf":"CE",
"region":"Nordeste"
}

```

* /api/city?uf=SP&name=são p&region=sudeste

Usando apenas parte do nome e ocultando o campo state


```
[
    {
        "id": 3500600,
        "name": "Águas de São Pedro",
        "state": "São Paulo",
        "uf": "SP",
        "region": "Sudeste"
    },
    {
        "id": 3550308,
        "name": "São Paulo",
        "state": "São Paulo",
        "uf": "SP",
        "region": "Sudeste"
    },
    {
        "id": 3550407,
        "name": "São Pedro",
        "state": "São Paulo",
        "uf": "SP",
        "region": "Sudeste"
    },
    {
        "id": 3550506,
        "name": "São Pedro do Turvo",
        "state": "São Paulo",
        "uf": "SP",
        "region": "Sudeste"
    }
]
```



