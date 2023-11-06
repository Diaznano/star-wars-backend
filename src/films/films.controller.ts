import { Controller, Get, Query } from '@nestjs/common';
import { StarWarsService } from '../services/star-wars.service';

@Controller('films')
export class FilmsController {
  constructor(private readonly starWarsService: StarWarsService) {}

  @Get()
  async getFilms(@Query('page') page?: number) {
    return this.starWarsService.fetchData('films', page);
  }
}
