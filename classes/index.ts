class Pessoa {
    id: number;
    name: string;
    lastname: string;
    email:string;
    status:string;

    contruturo ( id:number, name: string, lastname: string, email:string, status:string){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.status = status
        console.log (this.id, this.name, this.lastname, this.email, this.status);
    }
}

const user =  new Pessoa();

//---------------------------------------

