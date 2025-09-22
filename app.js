/*************************************************************************************************************************************** 
 *  Objetivo: endPoints referente a API de estados e cidades

 * Data: 15/09/2025 
 
 * Autor: Samara Santos
 
 * Versão: 1.0

 * Observação: Instalação do Express, Cors, Body-Parser

 * npm install express -- save

 * npm install cors -- save

 * npm install body-parser -- save

 * npm i (instala tudo o que foi instalado no package.json) importante quando o código é enviado para o git sem a pasta node_modulos.
 
***************************************************************************************************************************************/

const express = require('express') //responsavel pela api
const cors = require('cors') //responsavel pelas permissões da API (APP) 
const bodyParser = require('body-parser') // Responsavel por gerenciar a chegada dos dados da API com o front
const dados = require('./modulo/funcoes.js') // import do arquivo de funções 



// ultilizara a porta enviada do servidor ou (||) ultilizara a porta local
const PORT = process.PORT || 8080

// criando uma instancia de uma classe do express
const app = express()

//Configuração de permissões 
//request = chegada de algo/  
//response = receber/ entregar algo
// next = proximo endpoint

app.use((request, response, next)=>{
    //              acesso sera pelo servidor original, '*'- servidor     
    response.header('Access-Control-Allow-Origin', '*') //Servidor de origem da API
    response.header('Access-Control-Allow-Methods', 'GET') //Verbos permitidos na API
    app.use(cors())
    next() // Próximo, carregar os proximos endpoints
    
})

// request - chegada de dados na API
// response - retorno de dados na API


app.get('/v1/estado/:uf' , function(request, response){
    let sigla = request.params.uf 
    console.log(sigla)

})



//ENDPOINTS
app.get('/v1/estados', function(request, response){
    //Pesquisa na função de estados
    let estados = dados.getAllEstados()
   
    //retorna o status code
    response.status(estados.status_code)

    //Retorna o JSON
   response.json(estados)
})

app.get('/v1/estados/regiao/:id' , function(request, response){
    let sigla = request.query.uf
    let estado = request.query.estado
    let regiao = request.query.regiao
    let id     = request.params.id
    console.log(sigla)
    console.log(estado)
    console.log(regiao)
    console.log(id)
})



//start na API
app.listen(PORT, function(){
    console.log('API aguardando requisições ....')
})