const database = firebase.database();


function registraUsuario(){
	var usuario = document.getElementById("userName").value;
	var correo = document.getElementById('emailUser').value;
	var password =document.getElementById('userPass').value;
	var telefono = document.getElementById('cuentaBanc').value;
	var tipoUsuario = document.getElementById('typeUser').value;
	var UID = 1;

	database.ref('userID/' + UID).set({
		'Nombre':usuario, 
		'Numero': telefono, 
		'Correo': correo,
		'Tipo': tipoUsuario
	});

}