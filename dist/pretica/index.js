var usuario = {
    id: 10,
    nome: "augusto",
    email: 'augustoaluno@gmail.com',
    senha: '123',
    idade: 21,
};
;
var pessoa = {
    id: 10,
    nome: 'augusto',
    email: 'pessoa@gmail.com',
    senha: 'pessoa123'
};
function Usuario(email) {
    if (email === void 0) { email = 'pessoa@gmail.com'; }
    return 'email validado';
}
Usuario('pessoa@gmail.com');
console.log(Usuario);
//# sourceMappingURL=index.js.map