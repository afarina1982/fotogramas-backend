import { Usuario } from "src/carpeta_models/usuario/Usuario";
import { Foto } from "src/carpeta_models/foto/Foto";

export class Comentario {
    constructor(
        id: number,
  texto: string,
  fecha: Date,
  usuario: Usuario,
  foto: Foto,
    ){}
}