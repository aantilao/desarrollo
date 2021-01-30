"# desarrollo"
Toda la informacion esta package.json (framework utilizado).
Se tomo en consideración el siguiente supuesto:
    -secuencia fibonacci: 0,1,1,2,3,5...
    -por lo que la posicion 1 retornara un 0
la url para hacer la consulta es : http://localhost:3000/fibonacci/numero, 
por ejemplo: http://localhost:3000/fibonacci/4

Lo que retornara es un objeto {nummber: n-ésimo termino de la sucesión de fibonacci}
Solo Acepta numeros positivos, en caso de que sea un strin o numero negativo retornara el siguiente mensaje: 
    Solo se aceptan numeros positivos sin incluis el 0

Para iniciarl el servidor solo se necesita utilizar el siguiente comando.
    npm start
Para visualizar los test utilizar el comando: 
    npm test