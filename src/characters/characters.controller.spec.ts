import { Test, TestingModule } from '@nestjs/testing';
import { CharactersController } from './characters.controller';
import { StarWarsService } from '../services/star-wars.service';
import { HttpModule } from '@nestjs/axios';

describe('CharactersController', () => {
  let controller: CharactersController;
  let starWarsService: StarWarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersController],
      providers: [StarWarsService],
      imports: [HttpModule],
    }).compile();

    controller = module.get<CharactersController>(CharactersController);
    starWarsService = module.get<StarWarsService>(StarWarsService);
  });

  it('should return characters data', async () => {
    const charactersData = {
      count: 2,
      next: null,
      previous: null,
      results: [{ name: 'Luke Skywalker' }, { name: 'Darth Vader' }],
    };

    jest.spyOn(starWarsService, 'fetchData').mockResolvedValue(charactersData);

    const result = await controller.getCharacters();

    expect(result).toBe(charactersData);
  });

  it('should return characters data from specific page', async () => {
    const charactersData = {
      count: 2,
      next: 'https://swapi.dev/api/people/?page=2',
      previous: null,
      results: [{ name: 'Han Solo' }, { name: 'Leia Organa' }],
    };

    jest.spyOn(starWarsService, 'fetchData').mockResolvedValue(charactersData);

    const result = await controller.getCharacters(2); // Obtener datos de la segunda página

    expect(result).toBe(charactersData);
  });
});
