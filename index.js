const op = require('./operaciones.js');
const so = require('os')
const colors = require('colors')
const exp = require('express')


console.log(so.platform().green)
console.log(so.release  ())
console.log(op.suma(5,4))
console.log(op.restar(5,4))
console.log(op.multiplicar(5,4))
console.log(op.dividir(5,4))
console.log(op.dividir(5,0))

const server = exp();

server.listen(3000,function(){
    console.log("Servidor corriendo".red)
})