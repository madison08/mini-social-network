import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserMutationResolver } from './resolvers/user.mutation.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [UserService, UserMutationResolver],
})
export class UserModule {}
