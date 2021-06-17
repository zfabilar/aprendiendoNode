function suma(x,y){
    return x + y;
}

function restar(x,y){
    return x - y;
}

function multiplicar(x,y){
    return x * y;
}
function dividir(x,y){
    if(y == 0){
        return "No mms no se puede eso";
    }else{
        return x/y; 
    }
}

exports.suma = suma;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;