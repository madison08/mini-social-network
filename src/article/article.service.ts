import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { ArticleCreateInput } from './dto/article-create.dto';

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>,
    ) {}

    async findAll(): Promise<Article[]> {
        return await this.articleRepository.find();
    }

    async createArticle(input: ArticleCreateInput){
        const article = this.articleRepository.create(input);
        return await this.articleRepository.save(article);

    }

}
