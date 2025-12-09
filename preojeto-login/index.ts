class Login{
EmailCerto: string;
SenhaCerta: string;

    constructor(emailCerto: string, senhaCerta:string){
        this.EmailCerto = emailCerto;
        this.SenhaCerta = senhaCerta
    }
    administrador(emial:string, senha:string): boolean{
        if(emial === this.EmailCerto && senha === this.SenhaCerta){
            return true
        }else{
            return false
        }
    }

    funcionario(email:string, senha: string): boolean{
        if(email === this.EmailCerto, senha === this.SenhaCerta){
            return true
        }else{
            return false
        }
    }
}

const login = new Login('augusto@gmail.com', '123');

const loginAdministrador = login.administrador('qualqueremail@gmail.com', '321');

const loginfuncionario = login.funcionario('emailerrado@gmail.com', '213')


