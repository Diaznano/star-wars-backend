import { Module } from '@nestjs/common';
import { PlanetsController } from './planets.controller';
import { StarWarsService } from '../services/star-wars.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PlanetsController],
  providers: [StarWarsService],
})
export class PlanetsModule {}
