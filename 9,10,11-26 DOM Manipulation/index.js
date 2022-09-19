let tittle = document.querySelector("h1")
let author = document.querySelector("p")
let mn = document.querySelector("main")

function cambiarAutor(){
	let autor = prompt()
	author.innerText = autor
}
function cambiarTitulo(){
	let titulo = prompt()
	tittle.innerText = titulo
}
function cambiarImagen(){
	url = prompt("URL de la imagen: ")
	let img = document.createElement('img');
	img.setAttribute('src', url);
	mn.append(img)
}