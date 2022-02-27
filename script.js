const nombre = document.getElementById('Nombre');
const email = document.getElementById('Mail');
const pass = document.getElementById('Pass');
const boton = document.getElementById('btn-enviar');
const resultado = document.querySelector(".resultado")

boton.addEventListener("click",(e)=>{
	e.preventDefault();
	let error = validarCampos();
	if (error[0]){
		resultado.innerHTML = error[1];
		resultado.classList.add("red");
	}else {
		resultado.innerHTML = "TODO OK";
		resultado.classList.add("green");
		resultado.classList.remove("red");
	}
})

const validarCampos = ()=>{
	let error = [];
	if (nombre.value.length < 5) {
		error[0] = true;
		error[1]="El Nombre No Puede Tener Menos de 5 Letras";
		return error;
	}else if(nombre.value.length > 40){
		error[0] = true;
		error[1]="El Nombre No Puede Tener Menos de 5 Letras";
		return error;
	}else if(email.value.length < 5 ||
		email.value.length > 40 ||
		email.value.indexOf("@") == -1 ||
		email.value.indexOf(".") == -1){
		error[0]=true;
		error[1]="El Mail es Invalido";
		return error;
	}

	error[0]=false; 
	return error;
}