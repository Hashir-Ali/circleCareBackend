import { Controller, Get, UseGuards, Req  } from '@nestjs/common';
import { AppService } from './app.service';

import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { return ['I am here...'] }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }
}
