import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class StarWarsService {
  constructor(private httpService: HttpService) {}
  private readonly baseUrl = process.env.SWAPI_BASE_URL;
  async fetchData(info: string, page?: number): Promise<any> {
    const apiUrl = `${this.baseUrl}/${info}/?page=${page ? page : 1}`;
    console.log(apiUrl);
    const response = await this.httpService
      .get(apiUrl)
      .pipe(map((response) => response.data))
      .toPromise();

    const nextPage = response.next;

    if (nextPage) {
      const dataNextPage = await this.httpService
        .get(nextPage)
        .pipe(map((response) => response.data))
        .toPromise();
      response.results = [...response.results, ...dataNextPage.results];
    }

    return response;
  }
}
