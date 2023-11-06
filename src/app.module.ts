import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { FilmsModule } from './films/films.module';
import { PlanetsModule } from './planets/planets.module';
import { StartShipsModule } from './starships/startships.module';

@Module({
  imports: [CharactersModule, FilmsModule, PlanetsModule, StartShipsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
