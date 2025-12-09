var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.contruturo = function (id, name, lastname, email, status) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.status = status;
        console.log(this.id, this.name, this.lastname, this.email, this.status);
    };
    return Pessoa;
}());
var user = new Pessoa();
//# sourceMappingURL=index.js.map