import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsController } from './news/news.controller';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config]}),
  ],
  controllers: [NewsController],
})
export class AppModule {}