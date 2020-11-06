export default function funcEstatistica(entrada)
{
  let saida = { };
  let x = [];
  let y = [];
  const math = require('mathjs');
  entrada.forEach( (e,i) => {
    if (i!==0) {
      x.push (parseFloat(entrada[i][0]));
      y.push (parseFloat(entrada[i][1]));
    } 
  });
  
  // console.log(x);
  // console.log(y);
  saida.medx = math.mean(x).toFixed(4);
  saida.medy = math.mean(y).toFixed(4);
  saida.devx = math.std(x).toFixed(4);
  saida.devy = math.std(y).toFixed(4);
  return saida ; 
}