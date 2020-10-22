let status = localStorage.getItem('dark');
const button = document.querySelector('#buton');
const enableDarkMode=()=>{
	document.body.classList.add("darkMode");
	document.getElementById("latwe").classList.remove("lightElem");
	document.getElementById("latweA").classList.remove("lightElem");
	document.getElementById("trudne").classList.remove("lightElem");
	document.getElementById("programy").classList.remove("lightElem");
	document.getElementById("programyA").classList.remove("lightElem");
	document.getElementById("komentarze").classList.remove("lightElem");
	document.getElementById("komentarzeA").classList.remove("lightElem");
	document.getElementById("latwe").classList.add("darkElem");
	document.getElementById("latweA").classList.add("darkElem");
	document.getElementById("trudne").classList.add("darkElem");
	document.getElementById("programy").classList.add("darkElem");
	document.getElementById("programyA").classList.add("darkElem");
	document.getElementById("komentarze").classList.add("darkElem");
	document.getElementById("komentarzeA").classList.add("darkElem");
	document.getElementById("PC").classList.remove("lightElem");
	document.getElementById("Android").classList.remove("lightElem");
	document.getElementById("PC").classList.add("darkElem");
	document.getElementById("Android").classList.add("darkElem");
	localStorage.setItem('dark',true);
	document.getElementById("buton").innerHTML="White Mode";
}
const disableDarkMode=()=>{
	document.body.classList.remove("darkMode");
	document.getElementById("latwe").classList.remove("darkElem");
	document.getElementById("latweA").classList.remove("darkElem");
	document.getElementById("trudne").classList.remove("darkElem");
	document.getElementById("programy").classList.remove("darkElem");
	document.getElementById("programyA").classList.remove("darkElem");
	document.getElementById("komentarze").classList.remove("darkElem");
	document.getElementById("komentarzeA").classList.remove("darkElem");
	document.getElementById("latwe").classList.add("lightElem");
	document.getElementById("latweA").classList.add("lightElem");
	document.getElementById("trudne").classList.add("lightElem");
	document.getElementById("programy").classList.add("lightElem");
	document.getElementById("programyA").classList.add("lightElem");
	document.getElementById("komentarze").classList.add("lightElem");
	document.getElementById("komentarzeA").classList.add("lightElem");
	document.getElementById("PC").classList.remove("darkElem");
	document.getElementById("Android").classList.remove("darkElem");
	document.getElementById("PC").classList.add("lightElem");
	document.getElementById("Android").classList.add("lightElem");
	localStorage.setItem('dark',null);
	document.getElementById("buton").innerHTML="Dark Mode";
	var zwitek=document.getElementsByClassName("zwitek");
}
if(status == "true")
{enableDarkMode();}

button.addEventListener("click", () =>{
	status = localStorage.getItem('dark');
	if(status!=="true")
	{enableDarkMode();}
	else
	{disableDarkMode();}
});