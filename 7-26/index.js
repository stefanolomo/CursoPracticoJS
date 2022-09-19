let arr = [
	1,
	2,
	"Ultraviolento!"
];

let musica = [
	"No obstante lo cual",
	"Campanas en la noche",
	"Break Stuff"
];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

let obj = {
	"No obstante lo cual": "Riff",
	"Campanas en la noche": "Los tipitos",
	"Break Stuff": "Lipm Bizkit"
};

// console.log(obj["Break Stuff"])
// console.log(obj["No obstante lo cual"])

function array(arr){
	console.log(arr[0]);
};
// array(arr);

function array2(arr){
	for (let i = 0; i < arr.length; i++){

		console.log(arr[i]);
	};
};
// array2(musica);

function imprimirValoresDeObjeto(obj){
	let arr = Object.values(obj)
	console.log("Mis bandas favoritas son: ")
	for (let i = 0; i < arr.length; i++){
		console.log(arr[i])
	}
}
imprimirValoresDeObjeto(obj)