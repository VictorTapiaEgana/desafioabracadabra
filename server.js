const express =  require('express');
const app = express();
const path = require('path');
const usuarios = require('./usuarios.json')

// app.use(express.static(path.join(process.cwd(), "/assets")));

app.use('/static', express.static(__dirname + '/assets'));

app.get('/abracadabra/usuarios',(req,res)=>{
    res.json(usuarios)
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(process.cwd(), 'usuario.html'));
})

app.use('/abracadabra/juego/:usuario',(req,res,next)=>{

    const usuario = req.params.usuario;     

    const filtro = usuarios.find(element => element.nombre === usuario)

    filtro != undefined 
    ? next () 
    : res.sendFile(path.join(process.cwd(), 'errorusuario.html'));   

});

app.get('/abracadabra/juego/:usuario', (req, res) => {              
    res.sendFile(path.join(process.cwd(), 'index.html'));    
});

app.get('/abracadabra/conejo/:numero',(req,res)=>{

       const SombreroElejido = req.params.numero;    
       const Aleatorio = Math.floor(Math.random() * 4) + 1;
       
       SombreroElejido == Aleatorio 
       ? res.sendFile(path.join(process.cwd(),'/ganador.html'))
       : res.sendFile(path.join(process.cwd(),'/perdiste.html'));

});

app.get("*",(req,res)=>{
    res.send(`<h1>“Esta página no existe 😥"</h1>`);
});

app.listen(3000,()=>{
    console.log(`Holiwis en Puerto 3000`)
});