import { InputType } from "@nestjs/graphql";
import { ArticleCreateInput } from "./article-create.dto";

@InputType()
export class ArticleUpdateInput extends ArticleCreateInput{

}