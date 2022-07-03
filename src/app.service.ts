import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService
    ) {}

  githubLogin(req) {
    console.log('githubLOGN');

    if(!req.user){
      return 'No user from github'
    }
    return{
      message: 'User Info from Github',
      user: req.user
    }
  }

  authGithub(): string {
    return 'Hello World!';
  }

  getHello(): string {
    return 'Hello World!';
  }

  getWeatherString(): string {
    return 'http://api.openweathermap.org/data/2.5/weather?q=Manila&APPID=ded8be5f5d4e6d3a0dec2e4a2812a187';
  }

  async getWeather(param) {
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${param}&APPID=${this.configService.get('WEATHER_APP_API')}`;
   console.log(url);
   const { data } = await firstValueFrom(this.httpService.get(url));
   return data;
  }
}
