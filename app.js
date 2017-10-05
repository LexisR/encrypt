

function validar (ascii) {// esta funcion va a validar si el codigoo ascci esta en el rago de numero
  if ((ascii >= 65 && ascii <= 90) ||(ascii >= 97 && ascii <= 122)){ // aca ponemos la condicion del rango y retorna true
    return true;
} else {

  return false;

  }
}

function cipher (frase) {
  var str = "";//almacenar mi resultado final
  for (var i = 0; i < frase.length; i++) {
    var n = frase[i];
    var valorPrimeraLetra; // variable vacia para asignar valos luego
    if (n === n.toUpperCase()) { // crear condiciones para determinar si es mayusculas o minusculas
      valorPrimeraLetra = 65;
    } else if (n === n.toLowerCase()){
      valorPrimeraLetra = 97;
    }
    var ascii = frase.charCodeAt(i);
    var resultadoAscii = validar (ascii);
    if (resultadoAscii === false ){
      return "Por favor introduzca solo letras"; // esto lo hice para que no continue si son caracteres
    }
    var cesar = (((ascii - valorPrimeraLetra) + 33 )% 26) + valorPrimeraLetra;
     /*sustitui los valores por mi variable valorPrimeraLetra ya que estos
     van a cambiar dependoendo de la letra estoy asignadno nueva letra y  guardando
     los caracteres*/
    str = str + String.fromCharCode(cesar);
  }

  return str;

}


  function decipher(frase) { // aun no he logrado que decifre minusculas
    var str = "";//almacenar mi resultado final
    for (var i = 0; i < frase.length; i++) {
      var n = frase[i];
      var valorPrimeraLetra; // variable vacia para asignar valos luego
      if (n === n.toUpperCase()) { // crear condiciones para determinar si es mayusculas o minusculas
        valorPrimeraLetra = 65;
      } else if (n === n.toLowerCase()){
        valorPrimeraLetra = 97;
      }
      var ascii = frase.charCodeAt(i);

      var cesar = (((ascii - valorPrimeraLetra) -7 + 78  )% 26) + valorPrimeraLetra;
       /*sustitui los valores por mi variable valorPrimeraLetra ya que estos
       v  man a cambiar dependoendo de la letra estoy asignadno nueva letra y  guardando
       los caracteres*/
     str = str + String.fromCharCode(cesar);
    }

    return str;

  }


  function inicio (){
    var tipoDeOpweracion = prompt("Hola introduce 1 si quieres cifrar tu frase o 2 para descifrar tu frase ");
    var fraseIntroducida = prompt("Introduzca su frase");
    if (tipoDeOpweracion === "1"  ) {
      alert("Resultado de cifrado: " + cipher (fraseIntroducida));
    } else if (tipoDeOpweracion === "2") {
       alert("Resultado de descrifrar: " + decipher (fraseIntroducida));
    } else {
       return alert("Introduzca una opcion valida")
    }


  }
  inicio  ();
