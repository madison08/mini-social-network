import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { ArticleMutationsResolver } from './resolvers/article.mutation.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Article
    ])
  ],
  providers: [ArticleService, ArticleMutationsResolver]
})
export class ArticleModule {}
