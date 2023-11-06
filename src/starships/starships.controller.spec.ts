import { Test, TestingModule } from '@nestjs/testing';
import { StarshipsController } from './starships.controller';
import { StarWarsService } from '../services/star-wars.service';
import { HttpModule } from '@nestjs/axios';

describe('StarshipsController', () => {
  let controller: StarshipsController;
  let starWarsService: StarWarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarshipsController],
      providers: [StarWarsService],
      imports: [HttpModule],
    }).compile();

    controller = module.get<StarshipsController>(StarshipsController);
    starWarsService = module.get<StarWarsService>(StarWarsService);
  });

  describe('getStarships', () => {
    it('should return starships data', async () => {
      const starshipsData = {
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            name: 'CR90 corvette',
            model: 'CR90 corvette',
          },
          {
            name: 'Star Destroyer',
            model: 'Imperial I-class Star Destroyer',
          },
        ],
      };

      jest.spyOn(starWarsService, 'fetchData').mockResolvedValue(starshipsData);

      const result = await controller.getStarships();

      expect(result).toBe(starshipsData);
    });
  });
});
