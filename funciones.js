function restavalores(){

    var num = (document.getElementById("number").value );
    var num2 = (document.getElementById("number2").value);
}
   if( !isNaN(num) &&   !isNaN(num2)) {
    const resultado = num- num2;

    document.getElementById("resultado").textContent= resultado;
   } else { 
    document.getElementById("resultado").textContent="error"
   }

