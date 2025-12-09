var Login = /** @class */ (function () {
    function Login(emailCerto, senhaCerta) {
        this.EmailCerto = emailCerto;
        this.SenhaCerta = senhaCerta;
    }
    Login.prototype.administrador = function (emial, senha) {
        if (emial === this.EmailCerto && senha === this.SenhaCerta) {
            return true;
        }
        else {
            return false;
        }
    };
    Login.prototype.funcionario = function (email, senha) {
        if (email === this.EmailCerto, senha === this.SenhaCerta) {
            return true;
        }
        else {
            return false;
        }
    };
    return Login;
}());
var login = new Login('augusto@gmail.com', '123');
var loginAdministrador = login.administrador('qualqueremail@gmail.com', '321');
var loginfuncionario = login.funcionario('emailerrado@gmail.com', '213');
//# sourceMappingURL=index.js.map