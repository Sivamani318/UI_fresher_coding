function myFunction() {
  var x = document.getElementById("lemail").value;
  var pwd = document.getElementById("pwd").value;
  if(x== 'user@gmail.com' && pwd=='123456' ){
     location.replace("login.html");
  }else{
	  alert('user details not match');
}
}
function pswd(){
	var pass = document.getElementById("pass").value;
	var cpass=  document.getElementById("cpass").value;
	
	if(pass==cpass && pass.length != 0){
		
	}
	else{
		alert('pasward not match');
	}
}
function sinput(){
	
var id=	document.getElementById("sid").value;
var name=	document.getElementById("sname").value;
var email=	document.getElementById("semail").value;
var clss=	document.getElementById("sclss").value;
var year=	document.getElementById("syear").value;
var city=	document.getElementById("scity").value;
var cunt=	document.getElementById("scunt").value;
var details=[id,name,email,clss,year,city,cunt];


additem();
function additem(){
document.getElementById('id').innerHTML =id;
document.getElementById('name').innerHTML = name;
document.getElementById('email').innerHTML=email;
document.getElementById('clss').innerHTML=clss;
document.getElementById('year').innerHTML=year;
document.getElementById('city').innerHTML=city;
document.getElementById('cunt').innerHTML=cunt;
}
}
function sclear(){
document.getElementById('sid').value ="";
document.getElementById('sname').value ="";
document.getElementById('semail').value="";
document.getElementById('sclss').value="";
document.getElementById('syear').value="";
document.getElementById('scity').value="";
document.getElementById('scunt').value="";
	
}
function sedit(){

}
function sdelete(){
document.getElementById('id').innerHTML ="";
document.getElementById('name').innerHTML = "";
document.getElementById('email').innerHTML="";
document.getElementById('clss').innerHTML="";
document.getElementById('year').innerHTML="";
document.getElementById('city').innerHTML="";
document.getElementById('cunt').innerHTML="";
}



	
	
	
	
	
	
	
	

