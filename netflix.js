let usuario="Pruebafront@coex.com"
 let contrasena="BigMind"
 let input=document.getElementById("ingresar")
 
 input.addEventListener("click",()=>{
    let email=document.getElementById("email").value
    let password=document.getElementById("contrasena1").value
   console.log(email)
   console.log(password)
   if (!email || !password){
      alert("Faltan credenciales ")
   }else if(usuario===email && contrasena===password){
         alert("inicio de sesion exitosa")
         window.location.href=("newpage.html")
      
   }
})