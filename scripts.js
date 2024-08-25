
/*
[X] Saber qndo o botão foi clicado -> function adicionarTarefa(){}
[X] Pegar o texto dentro do input
[X] Colocar esse texto na tela
[X] Deletar a tarefa  da tela(qndo clicar no X)
*/






function adicionarTarefa(){
    let valorDoInput = document.querySelector("input").value
    // para chamar a função, devo ir no meu html e colocar no button o nome dessa function... que é : adicionarTarefa()
    /* let variavel*/ /*input dou um nome para essa variavel*//*document ->leva até o HTML, .querySelector irá selecionar algo que eu queira no HTML, dentro dos parenteses com aspas duplas coloco o item que desejo que ele me traga, neste caso ("input"), como só tem um não tem problema, mas caso ajam mais ele trará o primeiro que encontrar, .value-> vai trazer somente o valor dentro do input */

    let li = document.createElement('li')
    /*Criar outra variavel para fazer as LI não no HTML mas aqui no JS, .createElement-> vai criar elementos, -> crio uma ("li")*/
    li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)">❌</span>' /*.innerHTML-> vai colocar algo dentro*/

    document.querySelector('ul').appendChild(li)/*appendChild-> cria um filho dentro do elemento*/

    document.querySelector("input").value='' // vai fazer apagar o que foi digitado dando espaço a nova tarefa

}

function deletarTarefa(li) {
   li.parentElement.remove()
}