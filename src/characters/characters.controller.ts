import { Controller, Get, Query } from '@nestjs/common';
import { StarWarsService } from '../services/star-wars.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly starWarsService: StarWarsService) {}

  @Get()
  async getCharacters(@Query('page') page?: number) {
    return this.starWarsService.fetchData('people', page);
  }
}
