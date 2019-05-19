let cursos = [{
	id : "1",
	nombre : "Curso NODE.JS",
	duracion :"32 horas",
	valor : "0 pesos"
},
{
	id : "2",
	nombre : "Inglés",
	duracion : "50 horas",
	valor : "150000 pesos"	
},
{
	id : "3",
	nombre : "Calculo",
	duracion : "80 horas",
	valor : "100000 pesos"	
}
]

const opciones = {
	nombre: {
		demand : true,
		alias: "n"
	},

	cedula: {
		demand : true,
		alias : "c"
	},

	idCurso: {
		demand : true,
		alias: "i"
	}
}

function infoCurso(idCurso){
		for(var z = 1; z<cursos.length+1;z++){
		let cursoC = cursos.find(function(ccurso){
			 return ccurso.id == idCurso})
			return "El curso se llama " + cursoC.nombre + ", tiene una duracion de " +
				cursoC.duracion + ", un valor de " + cursoC.valor + " y su ID es " + cursoC.id + ".";
	}
}

const fs = require("fs");

const argv = require("yargs").command("inscribir","inscribirse a un curso",opciones).argv;

function imprimpirCursos(){
	for(var i = 1; i<cursos.length+1;i++){
		let cursoC = cursos.find(function(ccurso){
			return ccurso.id == i})
		setTimeout(function(){
			console.log("El curso se llama " + cursoC.nombre + ", tiene una duracion de " +
				cursoC.duracion + ", un valor de " + cursoC.valor + " y su ID es " + cursoC.id);
		},2000*i)
	}
}

if(argv.i!=null && argv.n!=null && argv.c!=null){
	if(argv.i!= 1 && argv.i != 2 && argv.i != 3){
		console.log("No existe ningún curso con el ID brindado")
	}else{
		texto = "El nombre del estudiante es " + argv.n + ", " +
				"Y su cedula es " + argv.c + "." +
				infoCurso(argv.i)
		fs.writeFile("inscripción.txt",texto,(err)=>{
			if(err)throw(err);
			console.log("Se ha creado el archivo")
		})
	}
}else{
imprimpirCursos();}