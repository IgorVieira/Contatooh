//PageObject

var ContatosPage =  new require('./pages/contatosPage');



describe('Página principal', function(){

	var pagina = new ContatosPage();

	beforeEach(function(){
		pagina.visitar();
	});

	it('Deve estar logado', function(){
		pagina.obterUsuarioLogado()
			.then(function(texto){
				expect(texto.trim().length).toBeGreaterThan(0);
			});
	});

	it('Deve remover um contato da lista', function(){

		var totalAntes =  pagina.obterTotalDeItensDaLista();
		pagina.removerPrimeiroItemDaLista();
		var totalDepois  =  pagina.obterTotalDeItensDaLista();
		expect(totalDepois).toBeLessThan(totalAntes);
	});
});

// describe('Página principal', function(){
	
// 	beforeEach(function(){
// 		browser.get('http://localhost:3000/#/contatos');
// 	});

// 	it('Deve estar logado', function(){
		
// 		element(by.id('usuario-logado')).getText()
// 		.then(function(texto){
// 			expect(texto.trim().length).toBeGreaterThan(0);
// 		});
// 	});

// 	it('Deve remover um contato da lista', function(){
		
// 		var totalAntes = element
// 			.all(by.repeater('contato in contatos'))
// 			.count();
// 	})

// 	it('Deve remover um contato da lista', function(){

// 		var totalAntes  = element
// 			.all(by.repeater('contato in contatos'))
// 			.count();

// 		element(by.repeater('contato in contatos').row(0))
// 			.element(by.css('.btn'))
// 			.click();

// 		var totalDepois = element
// 			.all(by.repeater('contato in contatos')).count();
// 			expect(totalDepois).toBeLessThan(totalAntes);

// 	})

// });