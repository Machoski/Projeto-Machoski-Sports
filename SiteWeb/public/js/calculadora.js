function cadastrar(){
    var meia = Number(30);
    var inteira = Number(60);
    var assistir_meia = Number(ipt_jogos.value) * meia;
    var assistir_inteira = Number (ipt_jogos.value) * inteira;
    var total = Number(ipt_mes.value) - assistir_meia
    var total2 = Number(ipt_mes.value) - assistir_inteira
    
        if (ipt_mes.value <= 29){
            alert ('Este mês você não verá nenhum jogo, INFELIZMENTE!')
            div_msg.innerHTML = '';
        } else if (ipt_jogos.value > 5){
            alert('Número inválido de jogos mensais.')
            div_msg.innerHTML = '';
        }  else{
        div_msg.innerHTML = `<p>  O valor que você gastará comprando 2 ingressos de meia entrada é: R$${assistir_meia}<br>
            O valor que você gastará comprando 2 ingressos integrais é: R$${assistir_inteira} <br>
            O valor que sobra para gastar com seu time no próximo mês, gastando com meia entrada é de: R$${total}<br>
            O valor que sobra para gastar com seu time no próximo mês, gastando com entrada integral é de: R$${total2}</p>`
        }

}