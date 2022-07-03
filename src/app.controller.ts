import { Controller, Get, UseGuards, Req, Res, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthorizationGuard } from './authorization/authorization.guard';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // @Get()
  // @UseGuards(AuthorizationGuard)
  // async githubAuth(@Req() req) {
  //   console.log('githubAUTH');
  // }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getWeather/:city')
  getWeather(@Param() param: { city: string }) {
     return this.appService.getWeather(param.city);
  }

  // @Get('auth/github/callback')
  // @UseGuards(AuthGuard('github'))
  // githubAuthRedirect(@Req() req){
  //   console.log('githubREDRCT');
  //   return this.appService.githubLogin(req)
  // }

  // @Get('main/home')
  // @UseGuards(AuthGuard('github'))
  // githubAuthRedirect1(@Req() req){
  //   console.log('githubREDRCT');
  //   //return this.appService.githubLogin(req)
  // }

  // @Get('main/weather-app')
  // @UseGuards(AuthGuard('github'))
  // githubAuthRedirect2(@Req() req){
  //   console.log('githubREDRCT');
  //   //return this.appService.githubLogin(req)
  // }
}
