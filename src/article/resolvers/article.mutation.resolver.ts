import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { ArticleService } from "../article.service";
import { Article } from "../entities/article.entity";
import { ArticleCreateInput } from "../dto/article-create.dto";

@Resolver(Article)
export class ArticleMutationsResolver{
    constructor(private readonly articleService: ArticleService){}

    @Mutation(() => Article)
    async articleCreate(
        @Args('input') input: ArticleCreateInput
    ){
        return this.articleService.createArticle(input);
    }

}