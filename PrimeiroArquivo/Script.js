//input
anoNascimento = 1984
nome = "Joao Victor"

//processamento
hoje = new Date();
anoAtual = hoje.getFullYear();
idade = anoAtual - anoNascimento
mensagem = "Sou" + nome + "e tenho" + idade+ "anos"

//output
alert(mensagem)


