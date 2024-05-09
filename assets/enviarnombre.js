const boton = document.getElementById('btnenviar');
const MsgError =  document.getElementById('mensajeError');

boton.addEventListener('click',(e)=>{    
    e.preventDefault();
    
    let  usuario = document.getElementById('nombreUsuario').value;  
    
    if (usuario != ""){
        window.location.href = "/abracadabra/juego/" + usuario;    
    }else{
        MsgError.innerText = '* Ingrese un nombre de ususario'
    }

})