//Imprimir o nome completo

function	imprimeNomeCompleto(nome,	sobrenome,	nomeDoMeio) {
				if(nomeDoMeio	===	undefined)	{
								console.log(`${nome}	${sobrenome}`);
				}	else	{
								console.log(`${nome}	${nomeDoMeio}	${sobrenome}`);
				}
}
imprimeNomeCompleto('Romulo',	'Scampini');	
imprimeNomeCompleto('Leticia',	'Aparecida',	'de	Souza');
