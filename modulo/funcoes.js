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
    let message = {status: true, status_code: 200, developement: 'Samara Santos', uf : []}
    
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
        return item.sigla === sigla
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

    let message = {status: true, status_code: 200, developement: 'Samara Santos', regiao: regiao , estados: [] }
     estado = dados.listaDeEstados.estados.forEach(function(item){
            if (item.regiao === regiao)
            
          
            message.estados.push(item.nome)
            
        
     }) 
        
       if(message.estados > 0)
        return message
       else
        return MESSAGE_ERRO
        
    }

// Retorna uma lista de estados referentes as capitais do país
const getVerifyCapitaisDoPais = function(){
     
     let message = {status: true, status_code: 200, developement: 'Samara Santos', capital: []}

        capital = dados.listaDeEstados.estados.forEach(function(item){
           if(item.capital_pais){

            message.capital.push({
            capital_atual: item.capital_pais.capital,
             uf: item.sigla,
             descricao: item.nome,
             capital: item.capital,
             capital_pais_ano_inicio: item.capital_pais.ano_inicio,
             capital_pais_ano_termino: item.capital_pais.ano_fim 
           })
        
        }
             if(message.capital > 0)
                return message
            else
                return MESSAGE_ERRO

        })  
             
           
    
}

//Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function(sigla){
    let message = {status: true, status_code: 200, developement: 'Samara Santos', sigla: sigla , cidades: []}

    cidade = dados.listaDeEstados.estados.forEach(function(item){
           if(item.sigla === sigla) {
            
            item.cidades.forEach(function(cidade){
                message.cidades.push(cidade.nome)
            })
                
        }
    
    })
    
      if(message.sigla > 0)
                return message
            else
                return MESSAGE_ERRO

  
}


module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalSigla,
    getEstadosByRegiao,
    getVerifyCapitaisDoPais,
    getCidadesBySigla


} 
