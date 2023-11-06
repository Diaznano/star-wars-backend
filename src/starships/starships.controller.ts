import { Controller, Get, Query } from '@nestjs/common';
import { StarWarsService } from '../services/star-wars.service';

@Controller('starships')
export class StarshipsController {
  constructor(private readonly starWarsService: StarWarsService) {}

  @Get()
  async getStarships(@Query('page') page?: number) {
    return this.starWarsService.fetchData('starships', page);
  }
}
