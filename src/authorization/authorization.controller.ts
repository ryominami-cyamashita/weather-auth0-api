import { Controller, Get, UseGuards, Res, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('authorization')
export class AuthorizationController {
    @Get('github')
    @UseGuards(AuthGuard('github'))
    githubLogin(@Req() req, @Res() res)
    {
        console.log('AUTHCNTRL: ', req, res);
        console.log(req, res);

    }

    @Get('auth/github/callback')
    @UseGuards(AuthGuard('github'))
    googleLoginCallback(@Req() req, @Res() res)
    {
        console.log('AUTHCNTRLx: ', req, res);
        // handles the Google OAuth2 callback
        const jwt: string = req.user.jwt;
        if (jwt)
            res.redirect('http://localhost:4200/' + jwt);
        else
            res.redirect('http://localhost:4200/');
    }

}
