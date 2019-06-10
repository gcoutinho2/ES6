// Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
// extender uma segunda classe chamada "Usuario".
// A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
// em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
// repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
// true na classe.
// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
// retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

class Usuario {
    constructor(email, senha) {
        this.user = {email, senha};
    }

    isAdmin() {
        return this.admin === true;
    }
}


class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
}

const User1 = new Usuario('user@teste.com', '12345');
const Admin1 = new Admin('admin@teste.com', '654123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());


// 2 -

const usuarios = [
    {
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    },
];

const idades = usuarios.map(function(item) {
    return item.idade;
})

console.log(idades);

const filter = usuarios.filter(function(item) {
    return item.idade > 18 && item.empresa === 'Rocketseat';
})

console.log(filter);

const userGoogle = usuarios.find(item => item.empresa === 'Google');

console.log(userGoogle);


const calc = usuarios
.map(usuario => ({...usuario, idade: usuario.idade * 2}))
.filter(usuario => usuario.idade <= 50);


console.log(calc);


// 3 -

const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);


// 3.2
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = (usuario) => ( usuario.idade );

console.log(mostraIdade(usuario));

// 3.3

const nome = 'Diego';
const idade = 23;

const mostraUser = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUser(nome, idade));
console.log(mostraUser(nome));


// 3.4

const promise = () => new Promise((resolve, reject) => resolve());