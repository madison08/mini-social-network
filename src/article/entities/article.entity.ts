import { Field, ObjectType } from "@nestjs/graphql";
import { NodeEnt } from "src/pagination/models/node.model";
import { Column, DeleteDateColumn, Entity } from "typeorm";


@Entity()
@ObjectType()
export class Article extends NodeEnt{

    @Field(() => String)
    @Column()
    title: string

    @Field(() => String)
    @Column()
    description: string

    @Field(() => String)
    @Column()
    image: string

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date | null;

}