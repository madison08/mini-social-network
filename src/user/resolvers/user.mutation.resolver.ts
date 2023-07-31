import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "../entities/user.entity";
import { UserService } from "../user.service";
import { UserCreateInput } from "../dto/user-create.dto";



@Resolver(User)
export class UserMutationResolver {
    constructor(
        private readonly userService: UserService,
    ){}

    @Mutation(() => User)
    async createUser(
        @Args('input') input: UserCreateInput,
    ){
        return this.userService.createUser(input);
    }
}