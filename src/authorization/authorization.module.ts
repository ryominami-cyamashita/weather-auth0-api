import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GithubStrategy } from './github.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthorizationController } from './authorization.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }), ConfigModule.forRoot()],
    providers: [
        GithubStrategy,
        JwtStrategy],
    exports: [PassportModule],
    controllers: [AuthorizationController],
})
export class AuthorizationModule {}
