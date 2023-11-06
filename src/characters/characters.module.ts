import { Module } from '@nestjs/common';
import { CharactersController } from './characters.controller';
import { StarWarsService } from '../services/star-wars.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CharactersController],
  providers: [StarWarsService],
})
export class CharactersModule {}
