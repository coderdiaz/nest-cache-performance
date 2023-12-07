import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}