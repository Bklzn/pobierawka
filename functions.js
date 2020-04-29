let status = localStorage.getItem('dark');
const button = document.querySelector('#buton');
const enableDarkMode=()=>{
	document.body.classList.add("darkMode");
	localStorage.setItem('dark',true);
	document.getElementById("buton").innerHTML="White Mode";
}
const disableDarkMode=()=>{
	document.body.classList.remove("darkMode");
	localStorage.setItem('dark',null);
	document.getElementById("buton").innerHTML="Dark Mode";
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