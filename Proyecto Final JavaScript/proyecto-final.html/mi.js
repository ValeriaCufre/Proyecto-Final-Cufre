
let links = document.querySelectorAll('nav a')
console. log (links)

for(let link of links){
    link.addEventListener('click',pedirPagina)
}

function pedirPagina(e){
  e.prevenDefault()

  console.log(e.target.dataset.pagina)

  let url= e.target.dataset.pagina +'.html'

  const miPagina = document.querySelector('#miPagina')

  fectch(url)
  .then((res)=> {
    return res.tex ()
  } )
  .then((pagina)=>{
    console.log(pagina)
    miPagina.innerHTML = pagina
  })
  .catch((err)=>{
    console.log(err)
  })
   
}

let id = (id) => document.getElementById(id);

let classes = (classes) =>document.getElementsByClassName(classes);


let nombreDeUsuario = id("nombreDeUsuario"),
  apellido = id("apellido"),
  email = id("email"),
  Dni = id("dni"),
  turno = id("turno"),
  formulario = id("formulario"),
  msjError = classes("error"),
  iconoExito = classes("success-icon"),
  failureIcon = classes("failure-icon"); 

  formulario.addEventListener("enviar", (e) => {
    e.preventDefault(); motor(nombreDeUsuario,0,"El nombre de usuario no puede estar en blanco")
    motor(apellido ,1,"El apellido  no puede estar en blanco")
    motor(Dni,2,"El dni de usuario no puede estar en blanco")
    motor(correoElectronico,3,"El correo electronico no puede estar en blanco")
    
  });

  let motor = (id,serial, mensaje) =>{
    if (id.value.trim()===""){ 
      msjError[serial].innerHTML = mensaje;
      id.style.border = "2px solid red";
      //iconos
      failureIcon[serial].style.opacity = "1";
      successIcon[srial].style.opacity = "0" ;
    }
    else{
      msjError[serial].innerHTML = "";
      id.style.border = "2px solid green";

      failureIcon[serial].style.opacity = "0";
      successIcon[srial].style.opacity = "1" ;
   } }
  

  



