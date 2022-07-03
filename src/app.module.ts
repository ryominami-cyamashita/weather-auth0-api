import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { HttpModule } from '@nestjs/axios';
import { GithubStrategy } from './authorization/github.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthorizationModule,
            ConfigModule.forRoot(),
            HttpModule],
  controllers: [AppController],
  providers: [AppService, GithubStrategy],
})
export class AppModule {}
