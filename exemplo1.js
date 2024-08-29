const nome = {
    nome: 'Victor',
    comprimentar: function() {
      console.log(`meu nome é ${this.nome}.`);
    }
  };
  
  nome.comprimentar();
  

  const nome2 = {
    nome: 'João',
    comprimentar2: () => {
      console.log(`meu nome é ${this.nome}.`);
    }
  };
  
  nome2.comprimentar2(); 
  // this so se refera ao objeto em funções tradicionais

///////////////////////////////////////////////////////////////////////////////////////

 function Carro(marca) {
    this.marca = marca;
    this.modelo = 'Sedan';
    
    // Arrow function dentro de um método
    this.exibirDetalhes = () => {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    };
  }
  
  const meuCarro = new Carro('Toyota');
  meuCarro.exibirDetalhes();
  

  //funções tradicionais usam o this baseado no contexto de chamada.
  //arrow functions usam o this do contexto léxico onde foram definidas, mantendo o this do escopo exterior.