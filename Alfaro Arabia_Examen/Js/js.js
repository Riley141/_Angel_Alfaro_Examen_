function pl() 
{

var X=document.getElementById('corx').value;


var Y=document.getElementById('cory').value;


var r;

r= Math.pow(2)


X= Math.pow(X, 2)
Y= Math.pow(X, 2)

r=(X+Y)


for(let t=0;t<X; t++){
    let cosT = Math.cos((t/360) * (Math.PI*2))
    let sinT = Math.tan((t/360) * (Math.PI*2))
    let X = cosT * 40;
    let Y = sinT * 40;
    X = cosT * 60;
    Y = sinT * 60;
    
};


let resultado=1;

for (let i=0; i<e; i++) 
{
   
}

return resultado;
}

document.getElementById('resul').resultado;


const caja = document.querySelector("#caja");
const texto = document.querySelector("#texto");


//evento
caja.addEventListener("click", cambiarColor);


//funcion cambiar color
function cambiarColor(){
  caja.classList.toggle("bg-primary");
  caja.classList.toggle('bg-success');
  texto.classList.toggle('text-warning');
  texto.classList.toggle('text-white');
}
