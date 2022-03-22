const series = [
    {
        id: 1,
        nombre: 'Last Kingdom',
        genero: 'Historica',
        temporadas: 5
    },
    {
        id: 2,
        nombre: 'Peaky Blinders',
        genero: 'Drama histórico',
        temporadas: 5
    },
    {
        id: 3,
        nombre: 'Shingeki no Kyojin',
        genero: 'Anime',
        temporadas: 4
    },
    {
        id: 4,
        nombre: 'Kimetsu no Yaiba',
        genero: 'Anime',
        temporadas: 3
    },
    {
        id: 5,
        nombre: 'Friends',
        genero: 'Sitcom',
        temporadas: 10
    },
    {
        id: 6,
        nombre: 'The Big Bang Theory',
        genero: 'Sitcom',
        temporadas: 13
    }
];

console.log(series);

const mostrarObjetoPorConsola = () => {
    let pId = document.getElementById("arrayId").value;
    let serieBuscada = series.filter(x => x.id.toString() === pId);
    console.log(serieBuscada);
}

const arrayNombres = series.map(x => x.nombre);
console.log("Nuevo array de nombres: " + arrayNombres.toString());

const promedioTemporadas = (series.reduce((valPrevio, valActual) => valPrevio.temporadas + valActual.temporadas, 0));
console.log("Promedio temporadas: " + promedioTemporadas.toString());

const nuevoArray = series.map((x) => {
    return new obj = {
        nombre = x.nombre,
        genero = x.genero
    }
});
console.log("Nuevo array de nombre y genero" + nuevoArray);