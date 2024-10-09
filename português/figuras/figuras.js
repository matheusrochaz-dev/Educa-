
let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
});

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
   nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>4){
      count = 1;
    }
    
    document.getElementById("radio"+count).checked = true;
    
}