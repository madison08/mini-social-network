import { Args, Query, Resolver } from "@nestjs/graphql";
import { Article } from "../entities/article.entity";
import { ArticleService } from "../article.service";
import { ArticlePaginationArg, ArticlesPagination } from "../dto/article-pagination.dto";


@Resolver(Article)
export class ArticleQueryResolver{
    constructor(
        private readonly articleService: ArticleService
    ){}

    @Query(() => ArticlesPagination)
    async articlesPagination(
        @Args() args: ArticlePaginationArg
    ){
        return await this.articleService.articlePagination(args);
    }
}