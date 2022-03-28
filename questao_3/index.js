let actualYear = 2022;
let employeeBornDate = 1962;
let workInitialDate = 1995;
let employeeId = 30;
let employeeWorkTime = actualYear - workInitialDate;
let employeeAge = actualYear -  employeeBornDate;

if(employeeAge >= 65){
  console.log(`<strong>O empregado de número ${employeeId} possui ${employeeAge} anos e pode requerer aposentadoria</strong>`); 

}else if(employeeWorkTime >= 30) {
  console.log(`<strong>O empregado de número ${employeeId} possui ${employeeWorkTime} anos de trabalho e pode requerer aposentadoria</strong>`);

}else if(employeeAge >= 60 && employeeWorkTime >= 25){
  console.log(`<strong>O empregado de número ${employeeId} possui ${employeeAge} anos e  ${employeeWorkTime} anos de trabalho e pode requerer aposentadoria</strong>`);

}else{
  console.log(`<strong>O empregado de número ${employeeId} não pode requerer aposentadoria</strong>`);
}