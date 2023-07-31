import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCreateInput } from './dto/user-create.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async createUser(input: UserCreateInput){
        const user = this.userRepository.create(input);
        return await this.userRepository.save(user);
    }

    async findOneByEmail(email: User['email']): Promise<User | undefined> {
        const user =  await this.userRepository.findOne({where: {email: email}});
        if(!user){
            throw new NotFoundException("Ressource non trouvée");
        }
        return user;
    }

    
}
