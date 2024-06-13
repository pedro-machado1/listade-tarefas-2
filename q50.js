const prompt = require('prompt-sync')();

var reservas= [], hoteis = []
do{
    console.log("1-Adicionar hotéis-2-Buscar hóteis por cidade-3-Fazer reserva-4-Cancelar reservas-5-Listar resevas-6-Avaliar--digite outro número para terminar o programa. ")
    n = prompt('entre sua opção: ')
    if (n== 1){
        let f = adicionarHotel() 
            if (f != null){
                hoteis.push(f)
            }
    }
    if (n== 2){
        buscarHotel()
    }
    if (n== 3){
        f = fazerReseva()
        if (f != null){
            reservas.push(f)    
        }
    }
    if (n== 4){
        cancelar()
    }
    if (n== 5){
        listar()
    }
    if (n == 6){
        avaliar()
    }
}while(n<= 7)



function hotel(idHotel, nome , cidade , quartosTotais, quartosDisponiveis){
    this.idHotel = idHotel
    this.nome= nome
    this.cidade = cidade
    this.quartosTotais= quartosTotais
    this.quartosDisponiveis = quartosDisponiveis
    this. numNotas = 0
    this.nota = 0

}
function reserva(idReserva, idHotel, nomeCliente){
    this.idReserva = idReserva
    this.idHotel= idHotel
    this.nomeCliente=  nomeCliente  

}


//adicionar hoteis
function adicionarHotel(){
    let i
    let idHotel= prompt('Qual o id do hotel? ')
    for (i of hoteis){
        if(i.idHotel == idHotel){
            console.log('Esse id já foi registrado ')
            return null
        }
    }
    let nome= prompt('Qual nome do hotel? ')
    let cidade= prompt('Onde está o hotel? ')
    let quartosTotais= parseInt(prompt('Quantos quartos o hotel tem? '))
    let quartosDisponiveis= parseInt(prompt('Quantos quartos disponíveis o hotel tem ? '))
    if(quartosDisponiveis> quartosTotais){
        console.log('Por favor coloque um valor válido para a quantidade de quartos disponíveis')
        return null
    }
    return new hotel(idHotel,nome,cidade,quartosDisponiveis,quartosTotais)
}

//buscar hoteis
function buscarHotel(){
    let i, hoteisCidade = []
    cidadeBuscada=prompt(' Digite a cidade que você quer pesquisar ')
    for(i of hoteis){
        if (i.cidade == cidadeBuscada ){
            hoteisCidade.push(i)
        }
    }
    for(i of hoteisCidade){
        console.log('-----------')
        console.log('ID do Hotel: ' + i.idHotel)
        console.log('Nome do Hotel: ' + i.nome)
        console.log('Cidade do Hotel: ' + i.cidade)
        console.log('Quartos totais do Hotel: ' + i.quartosTotais)
        console.log('Quartos disponíveis no Hotel: ' + i.quartosDisponiveis)
        if (i.numNotas> 0){
            console.log('Nota média: ' + i.nota)
        }
    }
}
//fazer reserva
function fazerReseva(){
    let i
    let idReserva= prompt('Qual o id da reserva? ')
    for (i of reservas){
        if(i.idReserva == idReserva){
            console.log('Esse id já foi registrado ')
            return null
        }
    }
    let idHotel= prompt('Qual o id do hotel? ')
    for (i of hoteis){
        if(i.idHotel == idHotel){
            if (i.quartosTotais> 0){
                i.quartosTotais-= 1 
            }
            else{
                console.log('Infelizmente esse hotel não tem nenhum quarto disponível')
                return null
            }
            let nomeCliente = prompt('Qual o nome do cliente ')
            return new reserva(idReserva, idHotel, nomeCliente)
        }
    }
    console.log('Esse id de hotel não está registrado no sistema')
    return null 
}

// cancelar reserva
function cancelar (){
    let i, j
    let idReserva= prompt('Qual o id da reserva? ')
    for (i of reservas) {       
        if(i.idReserva == idReserva ){
            for (let f= 0 ; f<reservas.length; f++){
                if (reservas[f]== i){
                    reservas.splice(f,1)
                }
            }
            for (j of hoteis){                
                if(i.idHotel == j.idHotel){
                    j.quartosTotais+= 1 
                }
            console.log('A sua reserva foi cancelada')
            }
        }
        else{
        console.log('Nâo existe nenhuma reserva com essa nome ')
        }
    }
}

//listar reservas
// criar método para reservas 
function listar(){
    let i, count = 1 
    for (i of reservas){
        console.log( count+ ' --RESERVA--' )
        console.log('Id da reserva: ' + i.idReserva)
        console.log('Id do hotel: '+i.idHotel)
        console.log('Nome do cliente: '+ i.nomeCliente)
        if (i.nota){
            console.log('A média da avaliação desse hotel é ' + i.nota)
        }
        count++
    }
    if(count == 1){
        console.log('Não existe nenhuma reserva no momento')
    }
}
// avaliar hotel
function avaliar(){
    let i, nota, a
    idHotel = prompt('Qual é o id do hotel que desejas avaliar? ')
    for(i of hoteis){
        if (i.idHotel == idHotel){
            nota =parseInt(prompt('Digite a nota de 1-10 para o hotel: '))
            if(nota <= 10){
                i.numNotas++
                i.nota = (i.nota+ nota)/ i.numNotas
                console.log('Muito obrigado pela avaliação do Hotel')
            }
            console.log('Insira um valor válido para a nota')
        }
    }
    if (a== 0){
        console.log('Digite um id de hotel que esteja registrado no nosso sistema')
    }
}
