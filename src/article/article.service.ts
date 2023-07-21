import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { ArticleCreateInput } from './dto/article-create.dto';
import { ArticleUpdateInput } from './dto/article-update.dto';

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

    async updateArticle(articleId: string, input: ArticleUpdateInput){
        const article = await this.articleRepository.findOneOrFail({where: {id: articleId}});
        article.title = input.title;
        article.description = input.description;
        article.image = input.image;
        return await this.articleRepository.save(article);
    }

}
