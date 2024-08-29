///Desestruturação////////////////////////////////////////////////////////////////////////////////////
// objetos  
const usuario = {
    nome: 'Victor',
    idade: 24,
    endereco: {
      cidade: 'Fortaleza',
      estado: 'CE'
    }
  };

//sem desestruturacao
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;

//com 
const { Nome, Idade, endereco: { Cidade } } = usuario;


/////////////////////////////////////////////////////////////////////////////////////////////////////

// arrays
const produtos = ['Notebook', 'Teclado', 'Mouse', 'Monitor'];

//sem

const produto1 = produtos[0];
const produto2 = produtos[1];
const produto3 = produtos[2];
const produto4 = produtos[3];

//com

const [Produto1, Produto2, Produto3, Produto4] = produtos;

/////////////////////////////////////////////////////////////////////////////////////////////////////

//funçoes
//sem
function mostrarUsuario(usuario) {
    const nome = usuario.nome;
    const idade = usuario.idade;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
  }
  
// com

function mostrarUsuario({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
  }
  
  mostrarUsuario(usuario); 
  