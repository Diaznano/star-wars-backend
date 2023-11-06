import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsController } from './planets.controller';
import { StarWarsService } from '../services/star-wars.service';
import { HttpModule } from '@nestjs/axios';

describe('PlanetsController', () => {
  let controller: PlanetsController;
  let starWarsService: StarWarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanetsController],
      providers: [StarWarsService],
      imports: [HttpModule],
    }).compile();

    controller = module.get<PlanetsController>(PlanetsController);
    starWarsService = module.get<StarWarsService>(StarWarsService);
  });

  describe('getPlanets', () => {
    it('should return planets data', async () => {
      const planetsData = {
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            name: 'Tatooine',
            rotation_period: '23',
            orbital_period: '304',
          },
          {
            name: 'Alderaan',
            rotation_period: '24',
            orbital_period: '364',
          },
        ],
      };

      jest.spyOn(starWarsService, 'fetchData').mockResolvedValue(planetsData);

      const result = await controller.getPlanets();

      expect(result).toBe(planetsData);
    });
  });
});
