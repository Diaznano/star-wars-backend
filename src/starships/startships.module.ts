import { Module } from '@nestjs/common';
import { StarshipsController } from './starships.controller';
import { StarWarsService } from '../services/star-wars.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [StarshipsController],
  providers: [StarWarsService],
})
export class StartShipsModule {}
