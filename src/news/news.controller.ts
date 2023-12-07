import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('/api/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async news() {
    const response = await this.newsService.getNews();
    return response.data;
  }
}
