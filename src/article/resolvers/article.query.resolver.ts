import { Query, Resolver } from "@nestjs/graphql";
import { Article } from "../entities/article.entity";
import { ArticleService } from "../article.service";


@Resolver(Article)
export class ArticleQueryResolver{
    constructor(
        private readonly articleService: ArticleService
    ){}

    @Query(() => [Article])
    async articles(){
        return await this.articleService.findAll();
    }
}