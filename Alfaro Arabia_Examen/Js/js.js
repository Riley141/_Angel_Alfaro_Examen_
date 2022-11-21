function pl((X, Y)) 
{

var X=document.getElementById('corx').value;


var Y=document.getElementById('cory').value;


   var r;
   var d;
   var resul;
     

r= Math.pow(2)


X= Math.pow(X, 2)
Y= Math.pow(X, 2)


    d = Math.sqrt(X*X + Y*Y)
    r = Math.atan2(Y,X) 
    resul = { distance:distance, radians:radians }
    return resul;

document.getElementById('resul').resultado;



  
}
