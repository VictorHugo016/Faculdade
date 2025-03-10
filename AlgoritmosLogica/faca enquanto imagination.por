programa
{
	
	funcao inicio()
	{
		inteiro cont, n, num

		cont = 0

		escreva ("Pense em um numero: ")
		leia(n)
		limpa()

		faca{
			escreva ("tente adivinhar o número: ")
			leia (num)

			se (n<num){
				escreva ("\nChute alto\n")
			}
			senao se (n>num){
				escreva ("\nChute baixo\n")
			}
			cont=cont+1
		}
			enquanto ( num != n )
				
						
		escreva ("Parabéns você acertou\n")	
		escreva ("Você tentou ", cont, " vezes")	
			

			
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 318; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */