let nomeProduto = "Limão";
let quantidade = 20;
let preço = 10.00;
let totalpreço = quantidade * preço;
let descontos = [2, 3, 5]

if (quantidade <= 5) {
    let porcent = (descontos[0] * totalpreço) / 100;
    let desc = totalpreço - porcent;

    document.write(nomeProduto + "<br>Quantidade: " + quantidade + "<br>Preço: " + preço + " R$<br>Preço Total: " + totalpreço + " R$ <br>Desconto a ser aplicado: " + descontos[0] + "% <br>Preço Com Desconto: " + desc + "R$")

} else if (quantidade > 5 && quantidade <= 20) {

    let porcent = (descontos[1] * totalpreço) / 100;
    let desc = totalpreço - porcent;

    document.write(nomeProduto + "<br>Quantidade: " + quantidade + "<br>Preço: " + preço + " R$<br>Preço Total: " + totalpreço + "<br>Desconto a ser aplicado: " + descontos[1] + "% <br>Preço Com Desconto: " + desc)


} else if (quantidade > 20) {
    let porcent = (descontos[2] * totalpreço) / 100;
    let desc = totalpreço - porcent;

    document.write(nomeProduto + "<br>Quantidade: " + quantidade + "<br>Preço: " + preço + " R$<br>Preço Total: " + totalpreço + "<br>Desconto a ser aplicado: " + descontos[2] + "% <br>Preço Com Desconto: " + desc)

}