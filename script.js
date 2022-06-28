let eu = {
nome: "welder",
idade:"32",
cursoDesenvolvedor:true,
}
console.log(eu);

eu.Time = "São Paulo";
console.log(eu);

delete eu.cursoDesenvolvedor;
console.log(eu);

console.log(eu);

let dados = [
    {
        nome: "welder",
        idade: 32,
        telefone: 2132132,
        amigos: ["mari", "cosme","thiago","alberto"]

    },
    {
        nome:"luis",
            idade:40,
            telefone:2142132,
            amigos:["Thiago","Luis","gilberto","ricardo"],
    },
    
    {
        nome:"marcelo",
            idade:18,
            telefone:2142132,
            amigos:["bianca","Luis","laura","barbara"],
    } ,

    {
        nome:"rogerio",
            idade:1,
            telefone:2152132,
            amigos:["marcos","Luis","lavinia","jessica"],
    }  ,    
    {
        nome:"cristiano",
            idade:19,
            telefone:2542132,
            amigos:["beatriz","Luis","mariana","geovanna"],
    }        
    
    
]
console.log(dados[1])

console.log(dados[0].amigos[0],[1],[2],[3]);

console.log(dados[1].amigos[0],[1],[2],[3]);

console.log(dados[2].amigos[0],[1],[2],[3]);

console.log(dados[3].amigos[0],[1],[2],[3]);
  
console.log(dados[4].amigos[0],[1],[2],[3]);
                 