let valor_comida = 0;
let valor_bebida = 0;
let valor_sobremesa = 0;
let nome_comida = 0;
let nome_bebida = 0;
let nome_sobremesa = 0;

function escolher_Prato(comida, valor_alimento, nome){
    const alimento = document.querySelector(".Box_Pratos .Borda_Verde");
    const refeicao = document.querySelector(comida);
        if (alimento !== null) {
            alimento.classList.remove("Borda_Verde");
            }
    refeicao.classList.add("Borda_Verde");
    valor_comida = valor_alimento;
    nome_comida = nome;
    confirmar();
}
function escolher_Bebida(bebida, valor_alimento, nome){
    const alimento = document.querySelector(".Box_Bebidas .Borda_Verde");
    const refeicao = document.querySelector(bebida);
        if (alimento !== null) {
            alimento.classList.remove("Borda_Verde");
            }
    refeicao.classList.add("Borda_Verde");
    valor_bebida = valor_alimento;
    nome_bebida = nome;
    confirmar();
}
function escolher_Sobremesa(sobremesa, valor_alimento, nome){
    const alimento = document.querySelector(".Box_Sobremesas .Borda_Verde");
    const refeicao = document.querySelector(sobremesa);
        if (alimento !== null) {
            alimento.classList.remove("Borda_Verde");
            }
    refeicao.classList.add("Borda_Verde");
    valor_sobremesa = valor_alimento;
    nome_sobremesa = nome;
    confirmar();
}

function confirmar(){
    if (valor_comida != 0 && valor_bebida != 0 && valor_sobremesa != 0){
        const Botao = document.querySelector(".Barra_Inferior .Botao");
        Botao.classList.add("Fundo_Verde");
        texto = document.getElementById('Texto');
        texto.innerHTML= ('<h5 id="Texto" onclick="apertar_finalizar()">Finalizar Pedido</h5>');
            
    }
}
function apertar_finalizar(){
    valor_total = valor_bebida + valor_comida + valor_sobremesa;
    valor_total.toFixed(2);
    let mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nome_comida}\n- Bebida: ${nome_bebida}\n- Sobremesa: ${nome_sobremesa}\nTotal: ${valor_total.toFixed(2)} Reais`;
    link = encodeURIComponent(mensagem); 
    site = "https://wa.me/+5521999999999?text=";
    window.open("https://wa.me/+5521999999999?text=" +link);
}