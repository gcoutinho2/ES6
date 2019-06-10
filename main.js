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