// Criando uma função para que os números apareçam na tela 
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
// Criando a função para que o botão "C" limpe tudo da tela       
function clean(){        
    document.getElementById('resultado').innerHTML = " ";
}

// Criando a função para que o botão "⌫" apague o último valor digitado
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

// Criando a função para quando a pessoa aperter no botão "=" faça o calculo escolhido 
// ou apresente a mensagem de erro
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
            else {
                document.getElementById('resultado').innerHTML = "Erro!"
            }
}