import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt";


export function encodePassword(rawPassword: string){
const SALT = bcrypt.genSaltSync();
return bcrypt.hashSync(rawPassword, SALT);
}

export function decodePassword(rawPassword: string, hash: string){
    return bcrypt.compareSync(rawPassword, hash);
}

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string){
      console.log("I am here bitch");
        const user = await this.userService.findOneByMail(username);
        console.log(user);
        // if(user && decodePassword(password, user.password)){
          if(user && password === user.password){
            const { password, ...result } = user;
            return await result;
        }
        return await null;
    }

    async login(user:any) {
        const payload = { username: user.email, sub: user._id };
        return await {
          access_token: await this.jwtService.sign(payload),
        };
    }


    async signIn(user:any) {
        if (!user) {
            throw new BadRequestException('Unauthenticated');
        }

        const userExists = await this.userService.findOneByMail(user.email);

        if (!userExists) {
            return this.registerUser(user);
        }

        return this.jwtService.sign({
            sub: userExists._id,
            username: userExists.email,
        });
    }

    async registerUser(user) {
        try {
          const newUser = await this.userService.create(user);
            //   newUser.username = generateFromEmail(user.email, 5);
            //   await this.userService.create(newUser);
        
          return this.jwtService.sign({
            sub: newUser._id,
            username: newUser.email,
          });
        } catch {
          throw new InternalServerErrorException();
        }
      }
}
