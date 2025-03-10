programa
{
	
	funcao inicio()
	{
		inteiro n, cont, acm, par
		real media
		
		acm = 0
		cont = 0
		par = 0
				
		enquanto (cont <10)
		{
			escreva ("Valor da nota ", cont + 1, ": ")
			leia (n)
			cont = cont + 1
			
			se (n %2 == 0){
				acm = acm + n
				par = par + 1
			}
			
		}
			
		media = acm/par
		escreva ("A media aritmedica é ", media) 
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 74; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */