const database = firebase.database();
var produccion = "";
var desarrollo = "http://127.0.0.1:8000//SIR//";
var usandoURL = desarrollo;


firebase.auth().onAuthStateChanged(function(user) {
  	UID = user.uid;
});

function iniciarSesion(){
	var email = document.getElementById('emailUser').value;
	var password = document.getElementById("userPass").value;
	auth.signInWithEmailAndPassword(email, password).catch(function(error) {
	  	swal({
	     	position: 'top-end',
	   	  	type: 'error',
	  	  	title: 'Error',
	  	  	text: 'Contraseña invalida',
      		showConfirmButton: true
	  	});
	}.catch(function(){
		swal({
	   	  	position: 'top-end',
	 	  	type: 'error',
		  	title: 'Error',
		  	text: 'Usuario no registrado',
	   	  	showConfirmButton: false,
	   		timer: 2000
		});
	})
	);
}


function vistaRegistraUsuario(){
	document.getElementById("formUser").style.display="block";
	document.getElementById('logInUser').style.display = "none";
}

function atras(){
	document.getElementById("formUser").style.display="none";
	document.getElementById('logInUser').style.display = "block";
}

function registraUsuario(){
	var email = document.getElementById('userEmail').value;
	var password = document.getElementById('userPass').value;
	var userName = document.getElementById('userName').value;
	var userPhone = document.getElementById('userPhone').value;
	var userAccount = document.getElementById('cuentaBanc').value;
	var userType = document.getElementById('typeUser').value;
	
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  	var errorCode = error.code;
	  	var errorMessage = error.message;
	});
	//alert(UID);
	/*
	firebase.database().ref('Users/' + UID).set({
		'nombre':nameUser, 
		'telefono': telephoneUser, 
		'correo': emailUser,
		'direccion': addressUser,
		'tipo_de_usuario': userRol,
		'latitude' : latitud,
		'longitude' : longitude
	});		
*/
}