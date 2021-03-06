// JAVASCRIPT ES6+

// Criação da pasta do projeto

// 1 - ng init para criar o package json
// 2 - yarn add @babel/cli (INTERFACE DE LINHA DE COMANDO DO BABEL)
// 3 - yarn add @babel/preset-env (VAI ENTENDER O NAVEGADOR E CONVERTER AS FEATURES DO ES 6 7 8)
// 4 - yarn add @babel/plugin-proposal-object-rest-spread
// 5 - yarn add webpack webpack-cli -D
// 6 - yarn add babel-loader -D
// 7 - yarn add webpack-dev-server -D
// 8 - yarn add @babel/plugin-transform-async-to-generator -D
// 9 - yarn add @babel/polyfill -D
// 10 - yarn add axios


//#region CLASES E MÉTODOS
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super(); //chamar constructor da classe pai

        this.user = 'Diego';
    }

    monstraUser() {
        console.log(this.user);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.monstraUser();

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(25, 10));

//#endregion

//#region OPERAÇÕES EM ARRAY
const arr = [1, 3, 4, 6, 8, 9, 10];

//MAP
const newArr = arr.map(function(item) {
    return item * 2;
})
console.log(newArr);

//REDUCE
const sum = arr.reduce(function(total, next) {
    return total + next;
})
console.log(sum);

//FILTER
const filter = arr.filter(function(item) {
    return item % 2 === 0; // precisa retornar true ou false
})
console.log(filter);


//FIND
const find = arr.find(function(){
    return item === 4;
})
console.log(find)

//#endregion

//#region ARROW FUNCTIONS

const arr = [1, 3, 5, 6];
const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => ({ nome: 'Couto'});

console.log(teste());

//#endregion

//#region VALORES PADRÃO

const soma = (a = 3, b = 6) => a + b;
console.log(soma(1));
console.log(soma());

//#endregion

//#region DESESTRUTURAÇÃO

const usuario = {
    nome: 'Couto',
    idade: 21,
    endereco: {
        cidade: 'Guarulhos',
        estado: 'SP'
    }
};

const {nome, idade, endereco: {estado}} = usuario;

console.log(nome);
console.log(idade);
console.log(estado);

function mostraNome({ nome, idade }){
    console.log(nome);
    console.log(idade);
}

mostraNome(usuario);

//#endregion

//#region REST E SPREAD

//#region  REST - PEGAR O RESTO DAS PROPRIEDADES

const user = {
    nome: 'Couto',
    idade: '21',
    empresa: 'GCTecnologia'
};

const { nome, ...resto } = user;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];
const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c); 

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

//#endregion

//#region SPREAD - ELE FAZ O PAPEL DE PROPAGAR, REPASSAR AS INFORMAÇÕES PARA OUTRA ESTRUTURA

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user1 = {
    nome: 'Couto',
    idade: '21',
    empresa: 'TI'
};

const user2 = { ...user1, nome: 'Gabriel' };

console.log(user2);

//#endregion

//#endregion

//#region TEMPLATE LITERALS

const nome = 'Couto';
const idade = 21;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

//#endregion

//#region OBJECT SHORT SYNTAX

const nome = 'Couto';
const idade = 21;

const user = {
    nome,
    idade,
    empresa: 'TI'
}

console.log(user);

//#endregion

//#region IMPORT/EXPORT

//import soma, { sub } from './funcoes';
//import { soma as somaFunction, sub } from './funcoes';
//import somaFunction from './soma';
//#endregion
//#region AXIOS
import axios from 'axios';
import * as funcoes from './funcoes';

console.log(funcoes);
console.log(funcoes.soma(1, 2));
console.log(funcoes.sub(10, 6));

//FUNCTIONS

export function soma(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function multi(a, b) {
    return a * b;
}

//#endregion

//#region ASYNC/AWAIT

const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000 );
})

//PARA INSTALAÇÃO DO AWAIT É NECESSÁRIO INSTALAR O SEGUINTE PLUGIN
// yarn add @babel/plugin-transform-async-to-generator
// yarn add @babel/polyfill

// OBS:  NUNCA USA O AWAIT FORA DE UMA FUNÇÃO ASYNC

// async function executaPromise() {
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
// }

// minhaPromisse()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {

//     });


const executaPromise = async () => {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

executaPromise();


//PARA UTILIZAÇÃO DO AXIOS É NECESSÁRIO INSTALAR A DEPENDÊNCIA 
// yarn add axios
class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response);
        } catch (error) {
            console.warn("Erro no API")
        }
    }
}

Api.getUserInfo('gcoutinho2');
Api.getUserInfo('gcoutinho221121221');

//#endregion

