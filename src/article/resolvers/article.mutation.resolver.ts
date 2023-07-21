import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { ArticleService } from "../article.service";
import { Article } from "../entities/article.entity";
import { ArticleCreateInput } from "../dto/article-create.dto";
import { ArticleUpdateInput } from "../dto/article-update.dto";

@Resolver(Article)
export class ArticleMutationsResolver{
    constructor(private readonly articleService: ArticleService){}

    @Mutation(() => Article)
    async articleCreate(
        @Args('input') input: ArticleCreateInput
    ){
        return this.articleService.createArticle(input);
    }

    @Mutation(() => Article)
    async articleUpdate(
        @Args('articleId', {type: () => ID}) articleId: string,
        @Args('input') input: ArticleUpdateInput,
    ){
        return this.articleService.updateArticle(articleId,input);
    }

    @Mutation(() => Article)
    async articleDelete(
        @Args('articleId', {type: () => ID}) articleId: string
    ){
        return this.articleService.deleteArticle(articleId);
    }

}