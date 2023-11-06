import { Controller, Get, Query } from '@nestjs/common';
import { StarWarsService } from '../services/star-wars.service';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly starWarsService: StarWarsService) {}

  @Get()
  async getPlanets(@Query('page') page?: number) {
    return this.starWarsService.fetchData('planets', page);
  }
}
