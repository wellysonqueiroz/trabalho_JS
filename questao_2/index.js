let notsB =[5.0, 4.0, 3.0, 2.0];
let notsF = (notsB[0] + notsB[1] + notsB[2] + notsB[0]) / 4;
 
if (notsF >= 9.0) {
document.write("O aluno foi aprovado com a media final: " +notsF)

} else if (notsF >= 7.5 && notsF < 9.0){
    document.write("O aluno foi aprovado com a media final: " +notsF)  
} else if (notsF >= 6.0 && notsF < 7.5) {
    document.write("O aluno esta de recuperação na nota final: " +notsF)
} else if (notsF < 6.0  && notsF >=0.0){
    document.write("O aluno esta reprovado com a nota final: " +notsF)
}