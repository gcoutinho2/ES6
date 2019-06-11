import axios from 'axios';

// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// async function umPorSegundo() {
//     await delay(console.log('1s'));
//     await delay(console.log('2s'));
//     await delay(console.log('3s'));
// }

// umPorSegundo();

class Api {
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);

            console.log(response.data);
        } catch (error) {
            console.log('Usuário não existe');
        }
    }
}

class GitHub {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);

            console.log(response.data);
        } catch (error) {
            console.log('Repositório não existe');
        }
    }
}

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);

        console.log(response.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
};


Api.getUserFromGithub('diego3g');
Api.getUserFromGithub('diego3g124123');

GitHub.getRepositories('rocketseat/rocketseat.com.br');
GitHub.getRepositories('rocketseat/dslkvmskv');

buscaUsuario('diego3g');
