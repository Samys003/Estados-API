/*************************************************************************************************************************************** 
 *  Objetivo: arquivo de funções para gerenciar a API de estados e cidades

 * Data: 15/09/2025 
 
 * Autor: Samara Santos
 
 * Versão: 1.0
 
***************************************************************************************************************************************/
const MESSAGE_ERRO = {status: false, status_code: 500 , developement: 'Samara Santos'}
// import dos arquivos de estados e cidades
const dados = require('./estados_cidades.js')


// retorna todos os estados
const getAllEstados = function(){
    // array criado no "uf : []" , "push" incluiu as informações nele  
    //variavel de base para o cabeçalho da API
    let message = {status: true, status_code: 200, developement: 'Samara Santos', uf : {}}
    
    //loop
    dados.listaDeEstados.estados.forEach(function(item){

        // 'push' adiciona os elementos no array
        message.uf.push(item.sigla)
    })

    //criando um atributo que não existe no array
    //adicionando um elemento novo no json
    message.quantidade = message.uf.length

    //remove o atributo do JSON
    //'delete message.status'
    //find ultilizamos para array

    //se a condição não retorna um 'bloco', não é necessário as '{}'
    if(message.uf.length > 0 )
        return message // se verdadeiro: 200

    else
        return MESSAGE_ERRO // se falso: 500
    
   
}

//retorna um estado pesquisando pela sigla
const getEstadoBySigla = function(sigla){

    let message = {status: true, status_code: 200, developement: 'Samara Santos'}

    let estado = dados.listaDeEstados.estados.find(function(item){
        return item.sigla.toLowerCase() === sigla.toLowerCase()
    })

    message.uf = estado.sigla
    message.descricao = estado.nome
    message.capital = estado.capital
    message.regiao = estado.regiao

    
    
     if(message.uf.length > 0 )
     return message // se verdadeiro: 200

     else
     return MESSAGE_ERRO // se falso: 500


}

// Retorna a capital referente a um estado pesquisando pela sigla
const getCapitalSigla = function(sigla){

    let message = {status: true, status_code: 200, developement: 'Samara Santos'}
    let estado = dados.listaDeEstados.estados.find(function(item){
        return item.sigla.toLowerCase() === sigla.toLowerCase()
    })

    message.uf = estado.sigla
    message.descricao = estado.nome
    message.capital = estado.capital
   
    
    if(message.uf.length > 0 )
        return message // se verdadeiro: 200
   
        else
        return MESSAGE_ERRO // se falso: 500
   

}

// Retorna uma lista de estados pesquisando pela região
const getEstadosByRegiao = function(regiao) {

    let message = {status: true, status_code: 200, developement: 'Samara Santos', estados: []}
    let regiao = dados.listaDeEstados.estados.forEach(function(item){

       message.estados.push(item.regiao)
    })
      
       
        
}

// Retorna uma lista de estados referentes as capitais do país
const getVerifyCapitaisDoPais = function(){



}

//Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function(sigla){

}

//console.log(getAllEstados())

 //getEstadoBySigla()
 //getCapitalSigla("SP")
 getEstadosByRegiao('Norte')


module.exports = {
    getAllEstados,
    getEstadoBySigla,

} 
