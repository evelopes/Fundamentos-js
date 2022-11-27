class AreaDoTerreno {
    constructor(altura, largura) {
      this.altura = altura; this.largura = largura;
      
    }

    get area(){
        return this.calcularArea()
    }

    calcularArea(){
        return this.altura * this.largura;
    }


    }


	const novoTerreno = new AreaDoTerreno(50, 10);

	console.log(novoTerreno.area);