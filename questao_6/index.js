let codigo = 100
let quant = 5

switch (codigo) {
    case 100:
        let cQuente = quant * 1.70
        document.write("O preço final do Cachorro Quente vai ser " + cQuente + " R$")
        break;
    case 101:
        let bSimples = quant * 2.30
        document.write("O preço final do Bauru Simples vai ser " + bSimples + " R$")
        break;

    case 102:
        let bComOvo = quant * 2.60
        document.write("O preço final do Bauru Com Ovo vai ser " + bComOvo + " R$")
        break;

    case 103:
        let hamb = quant * 2.40
        document.write("O preço final do Hamburguer vai ser " + hamb + " R$")
        break;

    case 104:
        let cheeseb = quant * 2.50
        document.write("O preço final do Cheeseburguer vai ser " + cheeseb + " R$")
        break;

    case 105:
        let refri = quant * 1.00
        document.write("O preço final do Refrigerante vai ser " + refri + " R$")
        break;
}