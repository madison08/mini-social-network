import { ArgsType, Field, InputType, Int, InterfaceType, registerEnumType } from "@nestjs/graphql";
import { NodeEnt } from "../models/node.model";


export enum sortDirection{
    ASC,
    DESC
}

registerEnumType(sortDirection, {
    name: 'sortDirection',
})


@InputType()
export class PaginationSortBy{
    @Field(() => sortDirection, {nullable: true})
    createdAt: string;
}

@ArgsType()
export class PaginationArgs{
    @Field(() => Int)
    skip: number;

    @Field(() => Int)
    take: number;

}

@InterfaceType()
export abstract class Pagination<N extends NodeEnt = NodeEnt>{

    @Field()
    totalCount: number;

    @Field(() => [NodeEnt])
    abstract nodes: N[];

}