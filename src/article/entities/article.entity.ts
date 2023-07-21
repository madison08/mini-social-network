import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
@ObjectType()
export class Article{
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String)
    @Column()
    title: string

    @Field(() => String)
    @Column()
    description: string

    @Field(() => String)
    @Column()
    image: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date | null;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date | null;





}