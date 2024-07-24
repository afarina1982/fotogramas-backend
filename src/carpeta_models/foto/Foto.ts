import { Usuario } from "src/carpeta_models/usuario/Usuario";
import { Comentario } from "src/carpeta_models/comentario/Comentario";

export class Foto {
    constructor(
        id: number,
        ruta: string,
        descripcion: string,
        hashtags: string[],
        fechaSubida: Date,
        usuario: Usuario,
        meGusta: Usuario[],
        comentarios: Comentario[],
    ){}
}