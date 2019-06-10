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