const restaurant="Burgerstin";

//Prompt 
let nombre = prompt("¿Cómo es tu nombre?");
alert ("¡Bienvenido a Burgerstin, " + nombre + "!");
alert ("Hoy es un lindo día para comer algo rico. Te invitamos a ver nuestra carta.");
let confirmar = confirm("¿Estás preparado/a para vivir una experiencia de sabores "+nombre+"?")

//switch
let opciones = prompt ("¿Qué tenés ganas de comer hoy " + nombre + "?, Tenemos hamburguesas, lomos, piza, empanadas y milanesas");
switch (opciones){
case "hamburguesas":
    alert("Contamos con 13 variedades, te invitamos a ver nuestra carta.");
    break;
case "lomos":
    alert("Nuestros lomos son muy populares. ¡No te los pierdas!");
    break;
case "piza":
    alert("Ofrecemos una gran variedad de pizas. ¿Cuál te gustaría?");
    break;
case "empanadas":
    alert("Nuestras empanadas están recién hechas. ¡Deliciosas!");
    break;
case "milanesas":
    alert("Podés elegirlas con papas fritas o puré, ¡Te van a encantar!");
    break;
default:
    alert("Lo siento, no entendemos esa opción. Por favor elige una de las opciones disponibles.");
}

//Ciclo for
for (let i=0; i<=9; i++){
    console.log ("Mensaje de prueba de interación con ciclo FOR")
}
 
//function
let total = 0;
function sumar(plato1, plato2){
    total = plato1+ plato2
}
sumar(7500, 8000)
alert(total)
