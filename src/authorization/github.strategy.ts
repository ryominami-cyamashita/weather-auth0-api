import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback} from 'passport-github2'
import { Injectable } from "@nestjs/common";

import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github'){

    constructor(
        private configService: ConfigService
    ){
       super({
            clientID : configService.get('GITHUB_CLIENT_ID'),
            clientSecret : configService.get('GITHUB_CLIENT_SECRET'),
            callbackURL : configService.get('GITHUB_callbackURL'),
            scope : ['email', 'profile']
        });
    }

    async validate(accessToken: string, refreshToken:string, profile: any, done: VerifyCallback ): Promise<any>{
        try{
            console.log('inGH: ', profile, accessToken);
            const { name, githubURL } = profile
            const user = {
                name: profile.displayName,
                githubURL: profile.profileUrl,
                accessToken
            };
            done(null, user);
        }
        catch (error) {
            done(error, false);
        }

    }
}