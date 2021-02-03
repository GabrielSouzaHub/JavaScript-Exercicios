class Cachorro {
    constructor(nomeCachorro,pesoCachorro,raçaCachorro,castradoCachorro){
        this.nome = nomeCachorro,
        this.peso = pesoCachorro,
        this.raça = raçaCachorro,
        this.castrado = castradoCachorro,
        this.vacinas = []
    }
    vacinar(vacina){
        this.vacinas.push(vacina);
    }
}

let cachorros = [];

for (let i = 0; i < 9; i ++){
    cachorros.push(new Cachorro("Cachorro"+i,1*i,"Poodle",true));
}



cachorros[2].vacinar("Tétano");

console.log(cachorros);