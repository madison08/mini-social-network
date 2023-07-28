import { ArgsType, Field, InputType, ObjectType } from "@nestjs/graphql";
import { Pagination, PaginationArgs, PaginationSortBy } from "src/pagination/dto/pagination.dto";
import { Article } from "../entities/article.entity";


@InputType()
export class ArticlePaginationSortBy extends PaginationSortBy{}

@ArgsType()
export class ArticlePaginationArg extends PaginationArgs{
    @Field(() => ArticlePaginationSortBy, {nullable: true})
    sortBy?: ArticlePaginationSortBy;
}


@ObjectType()
export class ArticlesPagination extends Pagination<Article>{
    @Field(() => [Article])
    nodes: Article[];
}