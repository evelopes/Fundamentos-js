var duracoes = [
  1.46, 1.73, 1.82, 2.07, 1.86, 1.05, 2.29, 1.35, 1.98, 1.97, 2.4, 1.53, 2.65,
  2.29, 1.12, 1.35, 1.45, 2.77, 2.61, 2.63, 1.96, 8.25, 2.25, 2.14, 1.87, 1.94, 2.93,
  2.88, 2.19, 2.02, 2.53, 1.38, 1.27, 2.11, 1.49, 2.2, 1.83, 1.32, 5.32, 6.25
];

tirarMaiores(duracoes)
function tirarMaiores(valor){
  if (valor >= 3){
    duracoes.splice(valor,1)
  }
  console.log(duracoes)
}
