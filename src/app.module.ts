import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config]}),
    NewsModule,
  ],
})
export class AppModule {}