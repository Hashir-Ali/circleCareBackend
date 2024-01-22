import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";
import { UserService } from "src/user/user.service";

export type JwtPayload = {
    sub: string;
    username: string;
  };

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        private userRepository: UserService
    ) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.userRepository.findOne(payload.sub);

        if (!user) throw new UnauthorizedException('Please log in to continue');
    
        return { userId: payload.sub, username: payload.username };
    }
}