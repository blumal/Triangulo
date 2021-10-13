function triangulo() {
    let cantTriangulo = document.getElementById('cantTriangulo').value; //Recogemos la variable enviada por el usuario
    let result = '';
    let piramide = '';

    for (i = 0; i < cantTriangulo; i++) { //El bucle dará las vueltas que asigne el usuario para dibujar los #
        piramide += '#';
        result += "<p>" + piramide + "</p>";
    }

    document.getElementById('dibujo').innerHTML = result;
}