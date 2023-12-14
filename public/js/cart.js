/*Funcionamiento botones + y - //Ver como hacer para no duplicar cod*/
const agregar= document.querySelector('#agregar');
const quitar= document.querySelector('#quitar');
const quantity = document.querySelector('#quantity');

const agregar2= document.querySelector('#agregar2');
const quitar2= document.querySelector('#quitar2');
const quantity2 = document.querySelector('#quantity2');

agregar.addEventListener('click', () => quantity.value= Number(quantity.value)+1);
quitar.addEventListener('click', () => {
    if (quantity.value>1) {
        quantity.value= Number(quantity.value)-1
    } else {
        quantity.value= 0
    }
});

agregar2.addEventListener('click', () => quantity2.value= Number(quantity2.value)+1);
quitar2.addEventListener('click', () => {
    if (quantity2.value>1) {
        quantity2.value= Number(quantity2.value)-1
    } else {
        quantity2.value= 0
    }
});

/*Calculo subtotal */

function precioPorItemSuma(){
    const cantidadelegida = document.getElementById('quantity').value;
    const subtotal = ((Number(cantidadelegida)+1) * 1799.99);
    document.getElementById('subtotal').innerHTML = "Total a pagar: $" + subtotal;   
    const cantidadElementos = (Number(cantidadelegida)+1); 
    document.getElementById('cantidadElementos').innerHTML = cantidadElementos;
    document.getElementById('resumenSubtotal').innerHTML = subtotal; 
    document.getElementById('resumenTotal').innerHTML = "$"+(subtotal + 2999);
};

function precioPorItemResta(){
    const cantidadelegida = document.getElementById('quantity').value;
    const subtotal = ((Number(cantidadelegida)-1) * 1799.99);
    document.getElementById('subtotal').innerHTML = "Total a pagar: $" + subtotal;  
    const cantidadElementos = (Number(cantidadelegida)-1); 
    document.getElementById('cantidadElementos').innerHTML = cantidadElementos;  
    document.getElementById('resumenSubtotal').innerHTML = subtotal; 
    document.getElementById('resumenTotal').innerHTML = "$"+(subtotal + 2999);
}; 

/*VER COMO NO REPETIR LA FUNC!!!*/
function precioPorItemSuma2(){
    const cantidadelegida = document.getElementById('quantity2').value;
    const subtotal = ((Number(cantidadelegida)+1) * 1799.99);
    document.getElementById('subtotal2').innerHTML = "Total a pagar: $" + subtotal;    
};

function precioPorItemResta2(){
    const cantidadelegida = document.getElementById('quantity2').value;
    const subtotal = ((Number(cantidadelegida)-1) * 1799.99);
    document.getElementById('subtotal2').innerHTML = "Total a pagar: $" + subtotal;    
}; 

/*CANTIDAD DE ELEMENTOS*/
document.getElementById('cantidadElementos').innerHTML = cantidadelegida

/*Total carrito*/
