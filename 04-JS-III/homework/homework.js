// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0]
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  return array[array.length-1]
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  const _newArray =[];

  array.forEach(element => {
    _newArray.push(parseInt(element)+1)
  });


  return _newArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  return [...array,elemento]

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  return [elemento,...array]

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join(' ')

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  return  array.includes(elemento) 

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  const _total = numeros.reduce((pre,current)=>pre+current);

  return _total

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  const _total = resultadosTest.reduce((pre,current)=>pre+current);

  return _total/resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let _mayor=0;

  for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    if(element>_mayor)_mayor =element
    
  }

  return _mayor

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  try {
    const _resultado = [...arguments].reduce((prev,actual)=>prev*actual);
    return _resultado;
  } catch (error) {
    return 0
  }

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  let _contadorMayor18 = 0;

  for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];

    if(element>18)_contadorMayor18=_contadorMayor18+1
    
  }

  return _contadorMayor18


}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  return (numeroDeDia===1||numeroDeDia===7)?"Es fin de semana":"Es dia Laboral"
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  return (String(n)[0]==="9")
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for (let index = 1; index < arreglo.length; index++) {
    const element = arreglo[index];

    if(element!==arreglo[index-1]) return false
    
  }

  return true
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  const _result=[];

  array.filter(x=>{
    if(x==="Enero"|x==="Marzo"|x=="Noviembre"){
      _result.push(x)
    }
  })


  return (_result.length>2)?_result:"No se encontraron los meses pedidos"

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  const _newArray =[]

  array.forEach(x=>{x>100&&_newArray.push(x)})


  return _newArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  const _newArray=[];

  let _numero = numero;

  for (let index = 0; index < 10; index++) {
    _numero = _numero + 2
    _newArray.push(_numero)
    if(_numero===index) {
      _numero = "Se interrumpió la ejecución"
      break
    }
  }

  return _numero==="Se interrumpió la ejecución"?"Se interrumpió la ejecución":_newArray
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  let i =0;
  let _numero = numero;
  const _newArray=[];

  while (i<10) {
    i++;
    
    if(i===5)continue;

    _numero = _numero +2
    _newArray.push(_numero)
  }

  return _newArray

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
