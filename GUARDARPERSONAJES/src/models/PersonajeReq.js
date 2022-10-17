class PersonajReq {
    constructor(
            {
            anio_nacimiento,
            id,
            color_ojos,
            peliculas,
            genero,
            color_cabello,
            talla,
            mundo_hogar,
            peso,
            nombre,
            color_piel,
            creado,
            editado,
            especies,
            naves,
            url,
            vehiculos}
        ) {
            this.id = id;
            this.anio_nacimiento = anio_nacimiento;
            this.color_ojos = color_ojos;
            this.peliculas = peliculas;
            this.genero = genero;
            this.color_cabello = color_cabello;
            this.talla = talla;
            this.mundo_hogar = mundo_hogar;
            this.peso = peso;
            this.nombre = nombre;
            this.color_piel = color_piel;
            this.creado = creado;
            this.editado = editado;
            this.especies = especies;
            this.naves = naves;
            this.url = url;
            this.vehiculos = vehiculos;
        }
}

module.exports.PersonajReq = PersonajReq;