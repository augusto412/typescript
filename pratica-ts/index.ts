type humano = 'mulher' | 'homem';
type permissionsAdimn = 'adinin'| 'super-user'

//-----------------------------------------------

//INTERFACE -> DOCEMENTTAR -> VALIDAR O CÓDIGO -> FACILITAR O DESENVOLVIMENTO


interface Usuario{
    id: number,
    nome:string,
    email:string,
    senha:string,
    idade:number;
}

let usuario: Usuario ={
    id:10,
    nome:"augusto",
    email:'augustoaluno@gmail.com',
    senha: '123',
    idade:21,
}

