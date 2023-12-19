/*Botones sumar y quitar items*/
const agregar= document.querySelector('#agregar');
const quitar= document.querySelector('#quitar');
const quantity = document.querySelector('#quantity');


agregar.addEventListener('click', () => quantity.value= Number(quantity.value)+1);

quitar.addEventListener('click', () => {
    if (quantity.value>1) {
        quantity.value= Number(quantity.value)-1
    } else {
        quantity.value= 0
    }
});
    
/*Ver si la logica del contador no arruina algo*/


