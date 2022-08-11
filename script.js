let valor_bebida = 0;
let valor_comida = 0;
let valor_sobremesa = 0;

/* INICIO DO JAVASCRIPT PARA COMIDAS */

function escolher_Ramen(){
    document.getElementById("Ramen").style.borderColor ="#26ff00";
    document.getElementById("Ramen").style.borderStyle ="solid";
    document.getElementById("Salmao").style.borderColor = "#ffffff";
    document.getElementById("Onigiri").style.borderColor = "#ffffff";
    document.getElementById("Takoyaki").style.borderColor = "#ffffff";
    document.getElementById("Omurice").style.borderColor = "#ffffff";
    let comida = "Ramen";
    valor_comida = 39.90;
    Botao_Verde()
}

function escolher_Salmao(){
    document.getElementById("Salmao").style.borderColor ="#26ff00";
    document.getElementById("Salmao").style.borderStyle ="solid";
    document.getElementById("Ramen").style.borderColor = "#ffffff";
    document.getElementById("Onigiri").style.borderColor = "#ffffff";
    document.getElementById("Takoyaki").style.borderColor = "#ffffff";
    document.getElementById("Omurice").style.borderColor = "#ffffff";
    let comida = "Salmao";
    valor_comida = 79.90;
    Botao_Verde()
}

function escolher_Onigiri(){
    document.getElementById("Onigiri").style.borderColor ="#26ff00";
    document.getElementById("Onigiri").style.borderStyle ="solid";
    document.getElementById("Ramen").style.borderColor = "#ffffff";
    document.getElementById("Salmao").style.borderColor = "#ffffff";
    document.getElementById("Takoyaki").style.borderColor = "#ffffff";
    document.getElementById("Omurice").style.borderColor = "#ffffff";
    let comida = "Onigiri";
    valor_comida = 29.90;
    Botao_Verde()
}

function escolher_Takoyake(){
    document.getElementById("Takoyaki").style.borderColor ="#26ff00";
    document.getElementById("Takoyaki").style.borderStyle ="solid";
    document.getElementById("Ramen").style.borderColor = "#ffffff";
    document.getElementById("Salmao").style.borderColor = "#ffffff";
    document.getElementById("Onigiri").style.borderColor = "#ffffff";
    document.getElementById("Omurice").style.borderColor = "#ffffff";
    let comida = "Takoyake";
    valor_comida = 69.90;
    Botao_Verde()

}

function escolher_Omurice(){
    document.getElementById("Omurice").style.borderColor ="#26ff00";
    document.getElementById("Omurice").style.borderStyle ="solid";
    document.getElementById("Ramen").style.borderColor = "#ffffff";
    document.getElementById("Salmao").style.borderColor = "#ffffff";
    document.getElementById("Onigiri").style.borderColor = "#ffffff";
    document.getElementById("Takoyaki").style.borderColor = "#ffffff";
    let comida = "Omurice";
    valor_comida = 49.90;
    Botao_Verde()

}

/* FIM DO JAVASCRIPT PARA COMIDAS */

/* INICIO DO JAVASCRIPT PARA AS BEBIDAS */

function escolher_Coca(){
    document.getElementById("Coca").style.borderColor ="#26ff00";
    document.getElementById("Coca").style.borderStyle ="solid";
    document.getElementById("IceTea").style.borderColor = "#ffffff";
    document.getElementById("Suco").style.borderColor = "#ffffff";
    document.getElementById("Monster").style.borderColor = "#ffffff";
    document.getElementById("Agua").style.borderColor = "#ffffff";
    let bebida = "Coca";
    valor_bebida = 4.90;
    Botao_Verde()
}

function escolher_IceTea(){
    document.getElementById("IceTea").style.borderColor ="#26ff00";
    document.getElementById("IceTea").style.borderStyle ="solid";
    document.getElementById("Coca").style.borderColor = "#ffffff";
    document.getElementById("Suco").style.borderColor = "#ffffff";
    document.getElementById("Monster").style.borderColor = "#ffffff";
    document.getElementById("Agua").style.borderColor = "#ffffff";
    let bebida = "IceTea";
    valor_bebida = 5.90;
    Botao_Verde()
}

function escolher_Suco(){
    document.getElementById("Suco").style.borderColor ="#26ff00";
    document.getElementById("Suco").style.borderStyle ="solid";
    document.getElementById("IceTea").style.borderColor = "#ffffff";
    document.getElementById("Coca").style.borderColor = "#ffffff";
    document.getElementById("Monster").style.borderColor = "#ffffff";
    document.getElementById("Agua").style.borderColor = "#ffffff";
    let bebida = "Suco";
    valor_bebida = 7.90;
    Botao_Verde()
}

function escolher_Monster(){
    document.getElementById("Monster").style.borderColor ="#26ff00";
    document.getElementById("Monster").style.borderStyle ="solid";
    document.getElementById("IceTea").style.borderColor = "#ffffff";
    document.getElementById("Suco").style.borderColor = "#ffffff";
    document.getElementById("Coca").style.borderColor = "#ffffff";
    document.getElementById("Agua").style.borderColor = "#ffffff";
    let bebida = "Monster";
    valor_bebida = 9.90;
    Botao_Verde()
}

function escolher_Agua(){
    document.getElementById("Agua").style.borderColor ="#26ff00";
    document.getElementById("Agua").style.borderStyle ="solid";
    document.getElementById("IceTea").style.borderColor = "#ffffff";
    document.getElementById("Suco").style.borderColor = "#ffffff";
    document.getElementById("Monster").style.borderColor = "#ffffff";
    document.getElementById("Coca").style.borderColor = "#ffffff";
    let bebida = "coca";
    valor_bebida = 19.90;
    Botao_Verde()
}

/* FIM DO JAVASCRIPT PARA AS BEBIDAS */

/* INICIO DO JAVASCRIPT PARA AS SOBREMESAS */

function escolher_Bolo(){
    document.getElementById("Bolo").style.borderColor ="#26ff00";
    document.getElementById("Bolo").style.borderStyle ="solid";
    document.getElementById("Petit_Gato").style.borderColor = "#ffffff";
    document.getElementById("Dango").style.borderColor = "#ffffff";
    document.getElementById("Pudim").style.borderColor = "#ffffff";
    document.getElementById("Wasaghi").style.borderColor = "#ffffff";
    let sobremesa = "Bolo";
    valor_sobremesa = 89.90;
    Botao_Verde()
}

function escolher_Petit_Gato(){
    document.getElementById("Petit_Gato").style.borderColor ="#26ff00";
    document.getElementById("Petit_Gato").style.borderStyle ="solid";
    document.getElementById("Bolo").style.borderColor = "#ffffff";
    document.getElementById("Dango").style.borderColor = "#ffffff";
    document.getElementById("Pudim").style.borderColor = "#ffffff";
    document.getElementById("Wasaghi").style.borderColor = "#ffffff";
    let sobremesa = "Petit Gato";
    valor_sobremesa = 29.90;
    Botao_Verde()
}

function escolher_Dango(){
    document.getElementById("Dango").style.borderColor ="#26ff00";
    document.getElementById("Dango").style.borderStyle ="solid";
    document.getElementById("Bolo").style.borderColor = "#ffffff";
    document.getElementById("Petit_Gato").style.borderColor = "#ffffff";
    document.getElementById("Pudim").style.borderColor = "#ffffff";
    document.getElementById("Wasaghi").style.borderColor = "#ffffff";
    let sobremesa = "Dango";
    valor_sobremesa = 19.90;
    Botao_Verde()
}

function escolher_Pudim(){
    document.getElementById("Pudim").style.borderColor ="#26ff00";
    document.getElementById("Pudim").style.borderStyle ="solid";
    document.getElementById("Bolo").style.borderColor = "#ffffff";
    document.getElementById("Petit_Gato").style.borderColor = "#ffffff";
    document.getElementById("Dango").style.borderColor = "#ffffff";
    document.getElementById("Wasaghi").style.borderColor = "#ffffff";
    let sobremesa = "Pudim";
    valor_sobremesa = 19.90;
    Botao_Verde()
}

function escolher_Wasaghi(){
    document.getElementById("Wasaghi").style.borderColor ="#26ff00";
    document.getElementById("Wasaghi").style.borderStyle ="solid";
    document.getElementById("Bolo").style.borderColor = "#ffffff";
    document.getElementById("Pudim").style.borderColor = "#ffffff";
    document.getElementById("Petit_Gato").style.borderColor = "#ffffff";
    document.getElementById("Dango").style.borderColor = "#ffffff";
    let sobremesa = "Wasaghi";
    valor_sobremesa = 29.90;
    Botao_Verde()
}

/* FIM DO JAVASCRIPT PARA AS SOBREMESAS */

/* INICIO DO JAVASCRIPT PARA A TELA DE FINALIZAÇÃO */


function Botao_Verde(){
    if (valor_bebida != 0 && valor_comida != 0 && valor_sobremesa != 0){
    document.getElementById("Texto").innerHTML= "FINALIZAR PEDIDO";
    document.getElementById("Finalizar").style.backgroundColor ="#26ff00";
    }
}
