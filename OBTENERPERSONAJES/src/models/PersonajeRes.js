class PersonajeRes {
    constructor(
            {birth_year,
            eye_color,
            films,
            gender,
            hair_color,
            height,
            homeworld,
            mass,
            name,
            skin_color,
            created,
            edited,
            species,
            starships,
            url,
            vehicles }
        ) {
            this.anio_nacimiento = birth_year;
            this.color_ojos = eye_color;
            this.peliculas = films;
            this.genero = gender;
            this.color_cabello = hair_color;
            this.talla = height;
            this.mundo_hogar = homeworld;
            this.peso = mass;
            this.nombre = name;
            this.color_piel = skin_color;
            this.creado = created;
            this.editado = edited;
            this.especies = species;
            this.naves = starships;
            this.url = url;
            this.vehiculos = vehicles;
        }
}

module.exports.PersonajeRes = PersonajeRes;