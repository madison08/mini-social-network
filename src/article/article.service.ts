import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { ArticleCreateInput } from './dto/article-create.dto';
import { ArticleUpdateInput } from './dto/article-update.dto';
import { ArticlePaginationArg } from './dto/article-pagination.dto';

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
        const article = await this.articleRepository.findOne({where: {id: articleId}});
        if(!article){
            throw new NotFoundException("Ressource non trouvée");
        }
        article.title = input.title;
        article.description = input.description;
        article.image = input.image;
        await this.articleRepository.save(article);

        return article;
    }

    async deleteArticle(articleId: string){
        const article = await this.articleRepository.findOne({where: {id: articleId}});
        if(!article){
            throw new NotFoundException("Ressource non trouvée");
        }

        await this.articleRepository.delete({id: articleId});
        return article;
    }

    async articlePagination(args: ArticlePaginationArg){
        const [nodes, totalCount] = await this.articleRepository.findAndCount({
            skip: args.skip,
            take: args.take,
        });

        return {
            nodes,
            totalCount,
        }
    }

}
