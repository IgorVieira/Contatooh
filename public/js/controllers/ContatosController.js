angular.module('contatooh').controller('ContatosController',
 function(Contato,$scope){

 	$scope.mensagem ={texto:''}
 

 	$scope.contatos = [];
 


 	function buscaContatos(){
 		Contato.query(
		 	function(contatos){
		 		$scope.contatos = contatos;
		 		$scope.mensagem = {};
		 	},
		 	function(erro){
		 		$scope.mensagem ={
		 			texto: 'Não foi possível obter lista'
		 		}
		 	});
 	}

 	buscaContatos();

 	$scope.remove = function(contato){
 		Contato.delete({id:contato._id},
 			buscaContatos,
 			function(erro){
 				$scope.mensagem ={
		 			texto: 'Não foi possível remover usuário'
		 		};
 				console.log(erro);
 			}
 		);
 	}



 });