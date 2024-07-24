import { Foto } from "src/carpeta_models/foto/Foto";

export class Usuario{
constructor(
    nombreUsuario: string,
    email: string,
    password: string,
    fechaRegistro: Date,
    fotoPerfil: string,
    seguidores: Usuario[],
    siguiendo: Usuario[],
    fotosSubidas: Foto[],
){}
}