var duracoes = [1.46,  1.73,  1.82,  2.07,   1.86,  1.05,   2.29,  1.35,  1.98,  1.97,  2.4,  1.53,  2.65,   2.29,  1.12,  1.35,   1.45,  2.77,  2.61,  2.63,  1.96,  2.25,  2.14,  1.87, 1.94,  2.93, 2.88,  2.19,  2.02,  2.53,  1.38,  1.27,  2.11,  1.49,  2.2,  1.83,1.32];
let somaDias = 0;
let itens = duracoes.length;



function acharMinimoDeDias(duracoes) {
    
  let somaDias = 0;
  var duracoes = [1.46,  1.73,  1.82,  2.07,   1.86,  1.05,   2.29,  1.35,  1.98,  1.97,  2.4,  1.53,  2.65,   2.29,  1.12,  1.35,   1.45,  2.77,  2.61,  2.63,  1.96,  2.25,  2.14,  1.87, 1.94,  2.93, 2.88,  2.19,  2.02,  2.53,  1.38,  1.27,  2.11,  1.49,  2.2,  1.83,1.32];
  let somaDias = 0;
  let itens = duracoes.length;
  
  
  
  function acharMinimoDeDias(duracoes) {
       
    let i =0;
   
    
    for (i=0; i<=duracoes.length; i++){
         if(duracoes[i]>=3){
        duracoes.splice(i,1)
        itens = itens -1
      }
        
      else if(duracoes[i]>2 && duracoes[i] < 3){
        somaDias+= 1
        duracoes.splice(i,1)
        itens = itens -1
      }
      else if (duracoes[i]+duracoes[i++]<=3){
        somaDias+= 1
        duracoes.splice(i,2)
        itens = itens -2
        
      } 
   
      else if (duracoes.length == 1) { 
        somaDias+=1
        duracoes.splice(i,1)
        itens = itens -1
      }
      
    }
          
  
  return somaDias
  }
  
  acharMinimoDeDias(duracoes)
  console.log(somaDias);
  
  let itens = duracoes.length;  
  let i =0;
 
 
  while (duracoes.length > 0) {
    for (i=0; i<=duracoes.length; i++){
      console.log(duracoes)
    }    
  };