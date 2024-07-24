import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistaModule } from './artista/artista.module';
import { UsuarioModule } from './carpeta_models/usuario/usuario.module';
import { FotoModule } from './carpeta_models/foto/foto.module';
import { ComentarioModule } from './carpeta_models/comentario/comentario.module';

@Module({
  imports: [ArtistaModule, UsuarioModule, FotoModule, ComentarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
