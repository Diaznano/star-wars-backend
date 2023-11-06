import { Test, TestingModule } from '@nestjs/testing';
import { FilmsController } from './films.controller';
import { StarWarsService } from '../services/star-wars.service';
import { HttpModule } from '@nestjs/axios';

describe('FilmsController', () => {
  let controller: FilmsController;
  let starWarsService: StarWarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmsController],
      providers: [StarWarsService],
      imports: [HttpModule],
    }).compile();

    controller = module.get<FilmsController>(FilmsController);
    starWarsService = module.get<StarWarsService>(StarWarsService);
  });

  describe('getFilms', () => {
    it('should return films data', async () => {
      const filmsData = {
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            title: 'A New Hope',
            episode_id: 4,
          },
          {
            title: 'The Empire Strikes Back',
            episode_id: 5,
          },
        ],
      };

      jest.spyOn(starWarsService, 'fetchData').mockResolvedValue(filmsData);

      const result = await controller.getFilms();

      expect(result).toBe(filmsData);
    });
  });
});
