import {
    Controller,
    Get,
    Post,
    Req,
    Res,
    UseGuards,
    Request
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { GoogleOauthGuard } from './google-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { GoogleStrategy } from './google.strategy';
import { AuthGuard } from '@nestjs/passport';
  
  @ApiTags('auth')
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
    
    @Get()
    async haha(){
        return await 'haha';
    }

    @Post('login')
    @UseGuards(AuthGuard('local'))
    async login(@Request() req): Promise<any> {
      return this.authService.login(req.user);
    }

    @Get('google')
    @UseGuards(GoogleOauthGuard)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async auth() {}

    @Get('google/callback')
    @UseGuards(GoogleOauthGuard)
    async googleAuthCallback(@Req() req, @Res() res: Response) {
        
        // console.log(req.user);
        const token = await this.authService.signIn(req.user);
    
        res.cookie('access_token', token, {
        maxAge: 2592000000,
        sameSite: true,
        secure: false,
        });
        return token;
    }
  }