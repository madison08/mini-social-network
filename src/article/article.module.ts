import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { ArticleMutationsResolver } from './resolvers/article.mutation.resolver';
import { ArticleQueryResolver } from './resolvers/article.query.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Article
    ])
  ],
  providers: [ArticleService, ArticleMutationsResolver, ArticleQueryResolver],
})
export class ArticleModule {}
