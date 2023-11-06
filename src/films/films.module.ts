import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { StarWarsService } from '../services/star-wars.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FilmsController],
  providers: [StarWarsService],
})
export class FilmsModule {}
