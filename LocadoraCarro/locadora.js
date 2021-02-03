function carFactory(modelo,placa) {
    return {
        modelo: modelo,
        placa: placa,
        isEmprestado: false,
        qtdTanque: 100,
        emprestar: function () {
            if (this.isEmprestado == false) {
                this.isEmprestado = true;
            }
            else {
                console.log("O carro já foi emprestado!");
            }
        },
        devolver: function () {
            if (this.isEmprestado) {
                if (this.qtdTanque < 100) {
                    console.log("Pague a taxa!");
                    this.abastecer(100 - this.qtdTanque);
                }
                this.isEmprestado = false;
                console.log("Obrigado por devolver!");
            }
            else {
                console.log("O carro já foi devolvido!");
            }
        },
        andar: function (andouG) {
            if (this.isEmprestado) {
                this.qtdTanque -= andouG;
            }
            else {
                console.log("O carro não está emprestado, não pode andar!");
            }
        },
        abastecer: function (qtdAbastecer) {
            if (this.qtdTanque + qtdAbastecer > 100) {
                let extra = (this.qtdTanque + qtdAbastecer) - 100;
                console.log("Você abasteceu e o excedente foi de " + extra);
                this.qtdTanque = 100;
            }
            else {
                this.qtdTanque += qtdAbastecer;
            }
        }
    }
}

function novoCarro(carroNome,modelo,placa){
    carroNome = carFactory(modelo,placa);
    locadora.push(carroNome);
}

let locadora = [];

// const meuCarro = carFactory("Civic","FE8W64F");
// const seuCarro = carFactory("HB20","F1EW984");

// locadora.push(meuCarro,seuCarro);

novoCarro("meuCarro","Civic","FEW848A");
novoCarro("seuCarro","HB20","FEW489E");


console.log(locadora);