function Massa_Por_Ciclo() {
    var N_ciclo = document.getElementById("T_ciclo").value; 
    var M_ciclo =
  document.getElementById("Massa_ciclo").value;      
  var Massa_ciclo = M_ciclo / N_ciclo ;
  var Massa_Ciclo = Massa_ciclo.toFixed(2); 
  var elemento = document.getElementById("resultado"); document.getElementById("M_C").innerHTML = "Massa por Ciclo:" + Massa_Ciclo +" Ton/ciclo";
  }
