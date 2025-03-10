programa
{
	
	funcao inicio()
	{
		inteiro cont, n, result

		cont = 0

		escreva ("Digite o a tabuada desejada: ")
		leia(n)
		
		enquanto (cont <= 10)
		{
			result = n*cont
			escreva (cont, "x", n, "=", result, "\n")
			cont = cont + 1
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 252; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */