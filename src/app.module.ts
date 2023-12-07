import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { NewsModule } from './news/news.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config]}),
    CacheModule.register({ isGlobal: true }),
    NewsModule,
  ],
})
export class AppModule {}