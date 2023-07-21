import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ArticleCreateInput{
    @Field(() => String)
    title: string;
    
    @Field(() => String)
    description: string;

    @Field(() => String)
    image: string;
}